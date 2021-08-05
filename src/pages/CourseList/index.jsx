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
 const courses = [
	{
		id: "60ba929e039fa80af447cbac", 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966"		, 
		instructor: "Minh Tuấn", 
		title: "Lập trình di dộng cơ bản", 
		rating: 3.5,
		numOfRatings: 2, 
		time: 4, 
		lectureCount: 6,
		price: 400.000
	},
	{
		id: "60bab0f017f856177476c555"	, 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966"		, 
		instructor: "Minh Tuấn", 
		title: "Tìm hiểu về Flutter", 
		rating: 4,
		numOfRatings: 3, 
		time: 7, 
		lectureCount: 4,
		price: 400.000
	},
	{
		id: "60bab0f017f856177476c555"	, 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966", 
		instructor: "Minh Tuấn", 
		title: "Tìm hiểu về Flutter", 
		rating: 4.3,
		numOfRatings: 3, 
		time: 7, 
		lectureCount: 4,
		price: 400.000
	},
	{
		id: "60bab0f017f856177476c555"	, 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966", 
		instructor: "Minh Tuấn", 
		title: "Tìm hiểu về Flutter 2", 
		rating: 2.8,
		numOfRatings: 3, 
		time: 7, 
		lectureCount: 4,
		price: 699.000
	},
	{
		id: "60bab0f017f856177476c555"	, 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966", 
		instructor: "Bảo Châu", 
		title: "Chuyên sâu về Flutter 3", 
		rating: 5,
		numOfRatings: 3, 
		time: 7, 
		lectureCount: 4,
		price: 250.000
	},{
		id: "60ba929e039fa80af447cbac", 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966"		, 
		instructor: "Minh Tuấn", 
		title: "Lập trình di dộng cơ bản", 
		rating: 3.5,
		numOfRatings: 2, 
		time: 4, 
		lectureCount: 6,
		price: 400.000
	},
	{
		id: "60bab0f017f856177476c555"	, 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966"		, 
		instructor: "Minh Tuấn", 
		title: "Tìm hiểu về Flutter", 
		rating: 4,
		numOfRatings: 3, 
		time: 7, 
		lectureCount: 4,
		price: 400.000
	},
	{
		id: "60bab0f017f856177476c555"	, 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966", 
		instructor: "Minh Tuấn", 
		title: "Tìm hiểu về Flutter", 
		rating: 4.3,
		numOfRatings: 3, 
		time: 7, 
		lectureCount: 4,
		price: 400.000
	},
	{
		id: "60bab0f017f856177476c555"	, 
		img:"/images/video-bg-1-1.jpg", 
		category: "60ea6a37f55ff957e4adf966", 
		instructor: "Minh Tuấn", 
		title: "Tìm hiểu về Flutter 2", 
		rating: 2.8,
		numOfRatings: 3, 
		time: 7, 
		lectureCount: 4,
		price: 699.000
	},
]




const CourseList = (props) => {
	
	const[categories, setCategories] = useState([]);
	const [courseList, setCourseList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [sortOrder, setSortOrder] = useState(defaultCourseSortOrder.id);
	const [searchString, setSearchString] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedSubCategory, setSelectedSubCategory] = useState('');
	const [query, setQuery] = useState({
    sortBy: sortOrder,
    page: 1,
		limit: PAGE_SIZE,
  });
		
	useEffect(async () => {
		setIsLoading(true);
		const allCategories = await getAllCategories();
		setCategories(allCategories);
		setTimeout(() => {
			setCourseList(courses);
			setIsLoading(false);
		}, 300);

		//Get query string search
		const queryString = new URLSearchParams(props.location.search);
		const title = queryString.get('title');
		const sortBy = queryString.get('sortBy');
		const page = queryString.get('page');
		const category = queryString.get('category');
		if(category) {
			setSelectedCategory(category);
		}
		else {
			const subCategory = queryString.get('subCategory');
			if (subCategory) {
				setSelectedSubCategory(subCategory);
			}
		}
		if (title) setSearchString(title);
		if (sortBy) setSortOrder(sortBy);
		setCurrentPage(page || 1);
	}, []);
	
	//Handle selected Category change
	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		if (!category) {
			return;
		}
		let newQuery = { category: category, sortBy: sortOrder, page: 1, limit: PAGE_SIZE};

		if (searchString) newQuery = { ...newQuery, title: searchString};
		createQuery(newQuery);
	}

	//Handle selected sub cat change
	const handleSubCategoryChange = (subCategory) => {
		setSelectedSubCategory(subCategory);
		if (!subCategory) {
			return;
		}
		let newQuery = { subCategory: subCategory, sortBy: sortOrder, page: 1, limit: PAGE_SIZE};

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
	const createQuery = (query) => {
		props.history.push({
			search: '?' + new URLSearchParams(query).toString()
		});
		setQuery(query);

		console.log(query);
	}

	//Render course list
	const renderCourseList = courseList.map(course => {
		const { id, img, category, instructor, title, rating, numOfRatings, lectureCount } = course;
		return <CourseCard id={id} img={img} category={category} instructor={instructor} title={title} 
							rating={rating} numOfRatings={numOfRatings} lectureCount={lectureCount}/>
	})

	return (
		<>
			<Header/>
			<div className='course-list-wrapper'>
				<CourseListContext.Provider value={{ courseList, categories, query,
					handleCategoryChange, handleSubCategoryChange, handleSearchChange, handleSortChange, handlePageChange }}>
					{isLoading ? <img src={loadingImg} alt='isLoading'/> :
					<div className='row content-wrapper'>
						<div className='col-md-2 menu-filter padding-0'>
							<FilterMenu/>
						</div>
						<div className='col-md-10 padding-0'>
							<SearchBar initQuery={searchString} initSortOrder={sortOrder}/>
							<div className='grid'>
								{renderCourseList}
							</div>
							<PaginationCards totalPages={PAGE_SIZE} />
						</div>
					</div>
					}
				</CourseListContext.Provider>
			</div>
			
		</>		
	);
}

export default CourseList;