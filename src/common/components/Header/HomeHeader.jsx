import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Drawer, Dropdown, Icon, Nav, Navbar, Sidenav } from 'rsuite';
// import { useViewport } from '../../../context/ViewportContext';
// import logo from '../../../resources/Logo-dark.svg';
// import logo_testnet from '../../../resources/logo-testnet.svg';
import './header.css';
// import { useSetRecoilState } from 'recoil';
// import walletState from '../../../atom/wallet.atom';
// import { isLoggedIn, logoutWallet } from '../../../service';


export const HomeHeader = () => {
    const [sticky, setSticky] = useState(false);
    
    // const componentDidMount = () => {
    //     window.addEventListener('scroll', handleScroll);

    //     //Mobile Menu
    //     mobileMenu();
    // }

    // const componentWillUnmount = () => {
    //     window.removeEventListener('scroll', handleScroll);
    // }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        mobileMenu();
    });

    const handleScroll = () => {

        if (window.scrollY > 70) {
            setSticky(true);
        } else if (window.scrollY < 70) {
            setSticky(false);
        }

    }

    const mobileMenu = () => {
        //Mobile Menu Toggle
        const mainNavToggler = document.querySelector(".menu-toggler");
        const mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", () => {
            mainNav.style.display = ( (mainNav.style.display !== "block" ? "block" : "none" ) );
        });
    }
    return (
        <header className="site-header site-header__home-three ">
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <Link>needhelp@kipso.com</Link>
                        <Link>444 888 0000</Link>
                    </div>
                    <div className="topbar-one__right">
                        <Link>Login</Link>
                        <Link>Register</Link>
                    </div>
                </div>
            </div>
            <nav className={`navbar navbar-expand-lg navbar-light home-page header-navigation stricky ${sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container clearfix">
                    <div className="logo-box clearfix">
                        <Link to="/" className="navbar-brand"> 
                            <img src="/images/icons/favicon.png" className="main-logo" width="120"  alt="Awesome Logo" />
                        </Link>
                        <button className="menu-toggler" data-target=".main-navigation">
                            <span className="kipso-icon-menu"></span>
                        </button>
                    </div>
                    <div className="main-navigation">
                        <ul className=" navigation-box">
                            <li className="current">
                                <Link href="/">Home</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/">Home 01</Link></li>
                                    <li><Link>Home 02</Link></li>
                                    <li><Link>Home 03</Link></li>
                                    <li><Link>Header Versions</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/">Header 01</Link></li>
                                            <li><Link>Header 02</Link></li>
                                            <li><Link>Header 03</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link>Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link>About Page</Link></li>
                                    <li><Link>Gallery</Link></li>
                                    <li><Link>Pricing Plans</Link></li>
                                    <li><Link>FAQ'S</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="courses.html">Courses</a>
                                <ul className="sub-menu">
                                    <li><Link to="/courses">Courses</Link></li>
                                    <li><Link>Courses Details</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link>Teachers</Link>
                                <ul className="sub-menu">
                                    <li><Link>Teachers</Link></li>
                                    <li><Link>Teachers Details</Link></li>
                                    <li><Link>Become Teacher</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link>News</Link>
                                <ul className="sub-menu">
                                    <li><Link>News Page</Link></li>
                                    <li><Link>News Details</Link></li>
                                </ul>
                            </li>
                            <li>
                            <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side-box">
                        <div className="header__social">
                            <Link><i className="fab fa-twitter"></i></Link>
                            <Link><i className="fab fa-facebook-square"></i></Link>
                            <Link><i className="fab fa-pinterest-p"></i></Link>
                            <Link><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        

    );
}



