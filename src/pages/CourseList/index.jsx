import React, { useState, useEffect } from 'react';
import CourseCard from '../../common/components/CourseCard';
import { Header } from '../../common/components/Header';
import './course-list.scss';
import loadingImg from '../../resources/preloader.gif'
import FilterMenu from '../../common/components/FilterMenu';
import CourseListContext from '../../context/CourseListContext';
import {defaultCourseSortOrder, PAGE_SIZE} from '../../common/utils/constant'
import SearchBar from '../../common/components/SearchBar';
import PaginationCards from '../../common/components/PaginationCard';
import { getAllCategories } from '../../service/categories';
import { queryCourses } from '../../service/courses';

const CourseList = (props) => {
	
	const[categories, setCategories] = useState([]);
	const [courseList, setCourseList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [sortOrder, setSortOrder] = useState(defaultCourseSortOrder.id);
	const [searchString, setSearchString] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);

	const [selectedCategory, setSelectedCategory] = useState('');
	const [query, setQuery] = useState({
    sortBy: sortOrder,
    page: 1,
		limit: PAGE_SIZE,
  });

	const getCategories = async () => {
		const allCategories = await getAllCategories();
		setCategories(allCategories);
	}
	const getHistory = () => {
		//Get history search
		const queryString = new URLSearchParams(props.location.search);
		const title = queryString.get('title');
		const sortBy = queryString.get('sortBy');
		const page = queryString.get('page');
		const category = queryString.get('category');
		
		if (title) setSearchString(title);
		if (sortBy) setSortOrder(sortBy);
		setCurrentPage(page || 1);

		let newQuery = {sortBy: sortOrder, page: currentPage, limit: PAGE_SIZE};

		if(category) {
			setSelectedCategory(category);
			newQuery.category = category;
		}
		else {
			const subCategory = queryString.get('subCategory');
			if (subCategory) {
				setSelectedCategory(subCategory);
				newQuery.subCategory = subCategory;
			}
		}
		if (searchString) newQuery = { ...newQuery, title: searchString};

		createQuery(newQuery);
	}

	//When the component init
	useEffect(() => {
		setIsLoading(true);
		
		getCategories();
		getHistory();

		setIsLoading(false);
	}, []);

	//Handle selected Category change
	const handleCategoryChange = (category) => {
		let newQuery;

		if (category === selectedCategory){
			category = '';
			newQuery = { sortBy: sortOrder, page: 1, limit: PAGE_SIZE};
		} else {
			newQuery = { category: category, sortBy: sortOrder, page: 1, limit: PAGE_SIZE};
		}
		setSelectedCategory(category);


		if (searchString) newQuery = { ...newQuery, title: searchString};
		createQuery(newQuery);
	}

	//Handle selected sub cat change
	const handleSubCategoryChange = (subCategory) => {
		let newQuery;
		
		if (subCategory === selectedCategory){
			subCategory = '';
			newQuery = { sortBy: sortOrder, page: 1, limit: PAGE_SIZE};
		} else {
			newQuery = { subCategory: subCategory, sortBy: sortOrder, page: 1, limit: PAGE_SIZE};
		}
		setSelectedCategory(subCategory);
		
		if (searchString) newQuery = { ...newQuery, title: searchString};

		createQuery(newQuery);
	}

	//Handle search change
	const handleSearchChange = (search) => {
		setSearchString(search);
		let newQuery = query;

		if (newQuery.title) {
			newQuery.title = search;
			newQuery.page = 1;
		}
		else {
			newQuery = { ...newQuery, title: search };
		}

		createQuery(newQuery);
	}

	//Handle sort change
	const handleSortChange = (sort) => {
		setSortOrder(sort);
		let newQuery = query;

		if (newQuery.sortBy) {
			newQuery.sortBy = sort;
		}
		else {
			newQuery = {...newQuery, sortBy : sort};
		}

		createQuery(newQuery);
	}

	const handlePageChange = (index) => {
		let newQuery = query;
		newQuery.page = index;
		createQuery(newQuery);
	}

	//Call API with query
	const createQuery = async (query) => {
		props.history.push({
			search: '?' + new URLSearchParams(query).toString()
		});
		setQuery(query);

		const res = await queryCourses(query);

		setCurrentPage(query.page);
		setCourseList(res.courses);
		setTotalPage(res.totalPages);
	}

	//Render course list
	const renderCourseList = courseList.map(course => {
		const { id, img, category, instructorName, title, averageRating, totalRatings, lectureCount, fee } = course;
		return <CourseCard key={id} id={id} img={img} category={category} instructorName={instructorName} title={title} 
		averageRating={averageRating} totalRatings={totalRatings} lectureCount={lectureCount} fee={fee}/>
	})

	return (
		<>
			<Header/>
			<div className='course-list-wrapper'>
				<CourseListContext.Provider value={{ courseList, categories, query, selectedCategory,
					handleCategoryChange, handleSubCategoryChange, handleSearchChange, handleSortChange, handlePageChange }}>
					{isLoading ? <img src={loadingImg} alt='isLoading'/> :
					<div className='row content-wrapper'>
						<div className='col-md-2 menu-filter padding-0'>
							<FilterMenu />
						</div>
						<div className='col-md-10 padding-0'>
							<div className='search-bar'>
								<SearchBar initQuery={searchString} initSortOrder={sortOrder}/>
							</div>
							<div className='grid'>
								{renderCourseList}
							</div>
							{
								courseList.length > 0 &&
								<div className='pagination'>
									<PaginationCards totalPages={totalPage} current={currentPage}/>
								</div>
							}
							
						</div>
					</div>
					}
				</CourseListContext.Provider>
			</div>
			
		</>		
	);
}

export default CourseList;