import React from 'react';
import CourseCard from '../../common/components/CourseCard';
import { Header } from '../../common/components/Header';
import './course-list.scss';

const courseList = () => {
	return (
		<>
			<Header/>
			<div className='course-list-wrapper'>
				<div className='grid'>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>

				</div>
			</div>
			
		</>		
	);
}

export default courseList;