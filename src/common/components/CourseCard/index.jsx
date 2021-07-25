import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/swiper.min.css';
import './course-card.scss';
import StarRatings from 'react-star-ratings';


const CourseCard = ({id, img, category, instructor, title, rating, numOfRatings, time, lectureCount, price}) => {
  const heartButtonClick = () => {
  }
  return(
		<Link className="course-one__single color-2">
      <div className="course-one__image">
        <img src="/images/course-1-2.jpg" alt="" />
        <i onClick={heartButtonClick} className="far fa-heart"></i>
      </div>
      <div className="course-one__content">
        <Link to="/courses" className="course-one__category">{category}</Link>
        <div className="course-one__admin">
          <img src={img} alt="" />
            by <Link>{instructor}</Link>
        </div>
        <h2 className="course-one__title overflow-text" title={title}><Link>{title}</Link></h2>
        <div className="course-one__stars">
          <StarRatings className="course-one__stars-wrap"
            rating={rating} starDimension="15px" starSpacing="0" starRatedColor="#f16101"
          />
          <span className="course-one__count">{rating}</span>
          <span className="course-one__stars-count">{numOfRatings}</span>
        </div>
        <div className="course-one__meta">
          <Link><i className="far fa-clock"></i> {time} Hours</Link>
          <Link><i className="far fa-folder-open"></i> {lectureCount} Lectures</Link>
          <Link>{price}</Link>
        </div>
      </div>
    </Link>
	);
}

export default CourseCard;