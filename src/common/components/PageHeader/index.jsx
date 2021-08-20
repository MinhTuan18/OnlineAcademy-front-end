import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './page-header.css';

const PageHeader = ({ title }) => {
    return (
        <section className="inner-banner">
            <div className="container">
                <ul className="list-unstyled thm-breadcrumb">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li className="active"><a href="#">{ title }</a></li>
                </ul>
                <h2 className="inner-banner__title">{ title }</h2>
            </div>
        </section>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string,
}

export default PageHeader;
