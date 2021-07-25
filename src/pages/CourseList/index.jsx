import React, { useState, useEffect } from 'react';
import CourseCard from '../../common/components/CourseCard';
import { Header } from '../../common/components/Header';
import './course-list.scss';
import loadingImg from '../../resources/preloader.gif'
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
	},
]
const CourseList = () => {
	const [courseList, setCourseList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setCourseList(courses);
			setIsLoading(false);
		}, 3000);
	}, []);

	const renderCourseList = courseList.map(course => {
		console.log(course);
		const { id, img, category, instructor, title, rating, numOfRatings, time, lectureCount } = course;
		return <CourseCard id={id} img={img} category={category} instructor={instructor} title={title} 
							rating={rating} numOfRatings={numOfRatings} time={time} lectureCount={lectureCount}/>
	})
	return (
		<>
			<Header/>
			<div className='course-list-wrapper'>
				{isLoading ? <img src={loadingImg} alt='isLoading'/> :
				
				<div className='grid'>
					{renderCourseList}
				</div>
				}
			</div>
			
		</>		
	);
}

export default CourseList;