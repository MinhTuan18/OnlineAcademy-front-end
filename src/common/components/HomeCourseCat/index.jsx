import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './course-cat.css';

const CourseCat = ({ subcategoryList }) => {
    // console.log(subcategoryList);
    return (
        <section className="course-category-three">
            <img src="/images/circle-stripe.png" className="course-category-three__circle" alt="" />
                <div className="container">
                    
                    <div className="block-title">
                        <h2 className="block-title__title">Browse most registered online<br />
                             course categories in last 7 days</h2>
                    </div>
                    <div className="row">
                        {subcategoryList.map(subcategory => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12" key={subcategory.id}>
                                    <div className="course-category-three__single">
                                        <img src={subcategory.subCategory.thumnailImageUrl ? subcategory.subCategory.thumnailImageUrl : '/images/course-category-1-1.png'} alt="" />
                                        <div className="course-category-three__content">
                                            <h3 className="course-category-three__title"><Link>{subcategory.subCategory.name ? subcategory.subCategory.name : 'IT & Software'}</Link></h3>
                                            <p className="course-category-three__text">Over 752 Courses</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center">
                        <Link className="thm-btn course-category-three__more-link">View All Categories</Link>
                    </div>
                </div>
        </section>
    );
};

CourseCat.propTypes = {
    subcategoryList: PropTypes.array
}

export default CourseCat;
