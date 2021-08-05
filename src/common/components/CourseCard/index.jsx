import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/swiper.min.css';
import './course-card.scss';
import StarRatings from 'react-star-ratings';


const CourseCard = ({id, img, category, instructor, title, rating, numOfRatings, lectureCount, price}) => {
  const heartButtonClick = () => {
  }
  return(
		<Link className="course__single color-2">
      <div className="course__image">
        <img src="/images/course-1-2.jpg" alt="" />
        <i onClick={heartButtonClick} className="far fa-heart"></i>
      </div>
      <div className="course__content">
        <Link to="/courses" className="course__category">{category}</Link>
        <div className="course__admin">
          <img src={img} alt="" />
            by <Link>{instructor}</Link>
        </div>
        <h2 className="course__title overflow-text" title={title}><Link>{title}</Link></h2>
        <div className="course__stars">
          <StarRatings className="course__stars-wrap"
            rating={rating} starDimension="15px" starSpacing="0" starRatedColor="#f16101"
          />
          <span className="course__count">{rating}</span>
          <span className="course__stars-count">{numOfRatings}</span>
        </div>
        <div className="course__meta">
          <Link>{price}</Link>
        </div>
      </div>
    </Link>
	);
}

export default CourseCard;