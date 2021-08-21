import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/swiper.min.css';
import './course-card.scss';
import StarRatings from 'react-star-ratings';

// eslint-disable-next-line react/prop-types
const CourseCard = ({id, img, category, instructorName, title, averageRating, totalRatings, fee}) => {
  const heartButtonClick = () => {
  }
  return(
		<Link to={`/course/${id}`} className="course__single color-2">
      <div className="course__image">
        <img src={img || "/images/course-1-2.jpg"} alt="" className='course-img'/>
        <i onClick={heartButtonClick} className="far fa-heart"></i>
      </div>
      <div className="course__content">
        <Link to="/courses" className="course__category">{category}</Link>
        <div className="course__admin">
          <img src={img} alt="" />
            by <Link>{instructorName}</Link>
        </div>
        <h2 className="course__title width ellipse two-lines" title={title}><Link to={`/course/${id}`}>{title}</Link></h2>
        <div className="course__stars">
          <StarRatings className="course__stars-wrap"
            rating={averageRating} starDimension="15px" starSpacing="0" starRatedColor="#f16101"
          />
          <span className="course__count">{averageRating}</span>
          <span className="course__stars-count">{totalRatings}</span>
        </div>
        <div className="course__meta">
          <Link>{fee}</Link>
        </div>
      </div>
    </Link>
	);
}

export default CourseCard;