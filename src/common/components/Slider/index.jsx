import React, { useEffect } from 'react';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
import './slider.css';
import { Carousel } from 'react-bootstrap'
import { useState } from 'react';
//import { queryCoursesByAdvancedFilter, } from '../../../service';
import PropTypes from 'prop-types';



const Slider = ({ categoryList }) => {

    // const [swiper, setSwiper] = useState(null);

    // const goNext = () => {
    //     if (swiper !== null) {
    //       swiper.slideNext();
    //     }
    // };

    // const goPrev = () => {
    //     if (swiper !== null) {
    //       swiper.slidePrev();
    //     }
    // };
    // const { categoryList } = props;
    // console.log(categoryList);
    const [courseName, setCourseName] = useState('');
    const [selectedCat, setSelectedCat] = useState('');
    const [filter, setFilter] = useState({});
    const [emptySearchFormAlert, setEmptySearchFormAlert] = useState(false);
    

    const onSearchFilterSubmit = async event => {
        event.preventDefault();
        // console.log(selectedCat);

        const [typeOfCat, id] = selectedCat.split(':');
        // console.log(typeOfCat);
        // console.log(id);

        if (courseName !== '' && selectedCat === '') {
            setFilter({title: courseName});
            // const queryResults = await queryCoursesByAdvancedFilter(filter);
            // console.log(queryResults);
        } else if (courseName === '' && selectedCat !== '') {
            typeOfCat === 'category' ? setFilter({category: id}) : setFilter({subCategory: id});
        } else if (courseName !== '' && selectedCat !== '') {
            typeOfCat === 'category' ? setFilter({title: courseName, category: id}) : setFilter({title: courseName, subCategory: id});
            // setFilter({title: courseName, category: selectedCat});
        } else setEmptySearchFormAlert(true);
    }

    useEffect(() => {
        async function fetchQueryCourseResults() {
            console.log(filter);
            //const queryCourseResults = await queryCoursesByAdvancedFilter(filter);
            // console.log(queryCourseResults);
        }
        fetchQueryCourseResults();
    }, [filter])

    useEffect(() => {
        function alertEmptySearchFormSubmit() {
            if (emptySearchFormAlert) {
                alert('You need to fill in course name or choose a category!');
            }
        }
        alertEmptySearchFormSubmit();
    }, [emptySearchFormAlert])

    return (
        <Carousel>
            <Carousel.Item>
                <section className="slider-three" style={{backgroundImage: `url(/images/slider-1.jpg)`}}>
                    <img src="/images/slider-3-icon-1-1.png" className="slider-three__icon-1" alt="" />
                    <img src="/images/slider-3-icon-1-2.png" className="slider-three__icon-2" alt="" />
                    <img src="/images/slider-3-icon-1-3.png" className="slider-three__icon-3" alt="" />
                    <img src="/images/slider-3-icon-1-4.png" className="slider-three__icon-4" alt="" />
                    <img src="/images/slider-3-icon-1-5.png" className="slider-three__icon-5" alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-three__content">
                                    <p className="slider-three__tag-line">we can teach you
                                        anything</p>
                                    <h2 className="slider-three__title">Start learning
                                        with us now</h2>
                                    <p className="slider-three__text">You need to be sure there isn`&apos;`t
                                        anything hidden in the middle of text
                                        lorem ipsum on the Internet.</p>
                                    <form className="slider-three__search" onSubmit={onSearchFilterSubmit}>
                                        <input type="text" placeholder="Search courses" onChange={event => {setCourseName(event.target.value)}}/>
                                        <button type="submit">
                                            <i className="kipso-icon-magnifying-glass"></i>
                                        </button>
                                        <select className="form-select" onChange={event => setSelectedCat(event.target.value)}>
                                            <option value="" selected>All Categories</option>
                                            {categoryList.map(category => {
                                                return (
                                                    <>
                                                        <option value={`category:${category._id}`}>{category.name}</option>
                                                            {category.subCategories.map(subCategory => {
                                                                return (
                                                                    <>
                                                                        <option value={`subCategory:${subCategory._id}`}>&nbsp;&nbsp;{subCategory.name}</option>
                                                                    </>
                                                                )
                                                            })}
                                                            
                                                    </>
                                                    
                                                );
                                            })}        
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Carousel.Item>
            <Carousel.Item>
                <section className="slider-three" style={{backgroundImage: `url(/images/slider-2.jpg)`}}>
                    <img src="/images/slider-3-icon-1-1.png" className="slider-three__icon-1" alt="" />
                    <img src="/images/slider-3-icon-1-2.png" className="slider-three__icon-2" alt="" />
                    <img src="/images/slider-3-icon-1-3.png" className="slider-three__icon-3" alt="" />
                    <img src="/images/slider-3-icon-1-4.png" className="slider-three__icon-4" alt="" />
                    <img src="/images/slider-3-icon-1-5.png" className="slider-three__icon-5" alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider-three__content">
                                    <p className="slider-three__tag-line">we can teach you
                                        anything</p>
                                    <h2 className="slider-three__title">Start learning
                                        with us now</h2>
                                    <p className="slider-three__text">You need to be sure there isn`&apos;`t
                                        anything hidden in the middle of text
                                        lorem ipsum on the Internet.</p>
                                    <form className="slider-three__search" onSubmit={onSearchFilterSubmit}>
                                        <input type="text" placeholder="Search courses" onChange={event => {setCourseName(event.target.value)}}/>
                                        
                                        <button type="submit">
                                            <i className="kipso-icon-magnifying-glass"></i>
                                        </button>
                                        <select className="form-select" onChange={event => setSelectedCat(event.target.value)}>
                                            <option value="" selected>All Categories</option>

                                            {categoryList.map(category => {
                                                return (
                                                    <>
                                                        <option value={`category:${category._id}`}>{category.name}</option>
                                                            {category.subCategories.map(subCategory => {
                                                                return (
                                                                    <>
                                                                        <option value={`subCategory:${subCategory._id}`}>&nbsp;&nbsp;{subCategory.name}</option>
                                                                    </>
                                                                )
                                                            })}   
                                                    </>
                                                );
                                            })}        
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Carousel.Item>
        </Carousel>
    );
}

Slider.propTypes = {
    categoryList: PropTypes.array
}

export default Slider;