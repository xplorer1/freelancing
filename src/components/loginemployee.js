import React from 'react';
import {Link} from "react-router-dom";

class LoginEmployee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <header className="header header--2 dark page" data-sticky="true">
                    <div className="header__left">
                        <Link className="ps-logo hm" to="/">
                            Home
                        </Link>

                        <Link className="header__link" to="/browsejobs">
                            <i className="athena-archive"></i> Browse Jobs
                        </Link>
                    </div>

                    <div className="header__right">
                        <ul className="menu">

                            <li><Link to="/browsefreelancers">Freelancers</Link></li>
                            <li><Link to="/browseemployers">Employers</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>

                        <div className="header__actions">
                            <Link className="ps-btn ps-btn--outline" to="/loginemployee">Login</Link>
                            <Link className="ps-btn" to="/signupselection">Sign Up</Link>
                        </div>
                    </div>
                </header>
                <header className="header header--mobile" data-sticky="false">
                    <div className="header__content">
                        <div className="header__left">
                            <Link className="ps-toggle--sidebar" href="#navigation-mobile">
                                <i className="fa fa-bars"></i>
                            </Link>
                        </div>
                        <div className="header__center">
                            <Link className="ps-logo" to="#">
                                <img src="assets/img/logo-dark.png" alt="" />
                            </Link>
                        </div>
                        <div className="header__right">
                            <div className="header__actions">
                                <Link className="ps-search-btn" to="#"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="ps-panel--sidebar" id="navigation-mobile">
                    <div className="ps-panel__header">
                        <h3>Menu</h3>
                    </div>
                    <div className="ps-panel__content">
                        <ul className="menu--mobile">
                            <li><Link to="/browsefreelancers">Freelancers</Link></li>
                            <li><Link to="/browseemployers">Employers</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="ps-page--signin">
                    <div className="container">
                        <form className="ps-form--signin">
                            <div className="ps-form__header">
                                <h3>Sign In</h3>
                            </div>
                            <div className="ps-form__content">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder=" Username or Email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Password" />
                                </div>
                            </div>
                            <div className="ps-form__actions">
                                <div className="ps-checkbox ps-checkbox--circle">
                                    <input className="form-control" type="checkbox" id="newsletter" name="newsletters" />
                                    <label htmlFor="newsletter">Remember me</label>
                                </div>
                                <Link to="#">Forgot password</Link>
                            </div>
                            <div className="ps-form__footer">
                                <button className="ps-btn ps-btn--fullwidth ps-btn--gradient">Login</button>
                                <p>Don't have an account?<Link to="/signupemployee"> Sign up now!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="ps-footer">
                    <div className="container">
                        <div className="ps-footer__top">
                            <div className="ps-footer__numbers">
                                <p>
                                    <span><strong>2,342,233</strong> COMMUNITY MEMBERS</span><span><strong>15,342,216</strong> TOTAL JOBS POSTED</span>
                                </p>
                            </div>
                        </div>
                        <div className="ps-footer__center">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                    <aside className="widget widget_footer">
                                        <h3 className="widget-title">Meet Jobolt</h3>
                                        <ul>
                                            <li><Link to="#">About us</Link></li>
                                            <li><Link to="#">How it Works</Link></li>
                                            <li><Link to="#">Our services</Link></li>
                                            <li><Link to="#">Blog</Link></li>
                                            <li><Link to="#">Contact us</Link></li>
                                        </ul>
                                    </aside>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                    <aside className="widget widget_footer">
                                        <h3 className="widget-title">Jobolt Tools</h3>
                                        <ul>
                                            <li><Link to="#">My Account</Link></li>
                                            <li><Link to="#">My Resumes</Link></li>
                                            <li><Link to="#">My Jobs</Link></li>
                                            <li><Link to="#">Employers’ Messages</Link></li>
                                        </ul>
                                    </aside>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                    <form className="ps-form--newsletters">
                                        <h3>Email Newsletters</h3>
                                        <p>Keep me up to date with content, updates, and offers from Athena</p>
                                        <div className="form-group--nest">
                                            <input className="form-control" type="email" placeholder="Email address" />
                                                <button>Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="ps-footer__bottom">
                            <figure>
                                <ul className="ps-footer__nav">
                                    <li><Link to="#"> Privacy Policy</Link></li>
                                    <li><Link to="#"> Terms and Conditions</Link></li>
                                    <li><Link to="#"> Help</Link></li>
                                    <li><Link to="#"> Jobolt Licenses</Link></li>
                                    <li><Link to="#"> Partners</Link></li>
                                </ul>
                                <p>&copy; 2019 <Link to="#">Athena</Link> - All Rights Reserved. </p>
                            </figure>
                            <figure>
                                <div className="ps-footer__language"><span>Language:</span>
                                    <select className="ps-select">
                                        <option value="1">English</option>
                                        <option value="1">Vietnamese</option>
                                    </select>
                                </div>
                                <ul className="ps-list--social">
                                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                                </ul>
                            </figure>
                        </div>
                    </div>
                </footer>
                <div id="back2top"><i className="pe-7s-angle-up"></i></div>
                <div className="ps-site-overlay"></div>
                <div id="loader-wrapper">
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>
                <div className="ps-search" id="site-search"><Link className="ps-btn--close" to="#"></Link>
                    <div className="ps-search__content">
                        <form className="ps-form--primary-search" action="http://nouthemes.net/html/athena/do_action"
                              method="post">
                            <input className="form-control" type="text" placeholder="Search for..." />
                                <button><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default LoginEmployee;