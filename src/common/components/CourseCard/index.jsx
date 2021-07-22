import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/swiper.min.css';
import './course-card.scss';

const CourseCard = ({id, img, category, instructor, title, rating, ratingCount, time, lectureCount}) => {
  return(
		<div className="course-one__single color-2">
      <div className="course-one__image">
        <img src="/images/course-1-2.jpg" alt="" />
        <i className="far fa-heart"></i>
      </div>
      <div className="course-one__content">
        <Link to="/courses" className="course-one__category">It & Software</Link>
        <div className="course-one__admin">
          <img src="/images/team-1-2.jpg" alt="" />
            by <Link>Cora Diaz</Link>
        </div>
        <h2 className="course-one__title"><Link>Improve editing skills</Link></h2>
        <div className="course-one__stars">
          <span className="course-one__stars-wrap">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
          <span className="course-one__count">4.8</span>
          <span className="course-one__stars-count">250</span>
        </div>
        <div className="course-one__meta">
          <Link><i className="far fa-clock"></i> 10 Hours</Link>
          <Link><i className="far fa-folder-open"></i> 6 Lectures</Link>
          <Link>$18</Link>
        </div>
        <Link className="course-one__link">See Preview</Link>
      </div>
    </div>
	);
}

export default CourseCard;