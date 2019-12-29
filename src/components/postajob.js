import React from 'react';
import {Link} from "react-router-dom";

class PostJob extends React.Component {
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
                <div className="ps-page">
                    <div className="ps-section--sidebar ps-layout">
                        <div className="container">
                            <div className="ps-section__container">
                                <div className="ps-section__content">
                                    <form className="ps-form--post-Link-job">
                                        <h3>Post Link Job to Jobolt</h3>
                                        <div className="form-group">
                                            <label>Job Title</label>
                                            <input className="form-control" type="text"
                                                   placeholder="e.g Senior Product Designer" />
                                        </div>
                                        <div className="form-group">
                                            <label>Descrition</label>
                                            <textarea className="form-control" rows="6"
                                                      placeholder="Enter your description here"></textarea>
                                            <small><i>4700 characters remaining</i></small>
                                        </div>
                                        <div className="ps-form__rules">
                                            <div className="form-group">
                                                <label>Primary Role</label>
                                                <div className="ps-form__rule">
                                                    <select className="ps-select">
                                                        <option value="1">Select Primary Role</option>
                                                        <option value="1">Role 1</option>
                                                        <option value="1">Role 2</option>
                                                        <option value="1">Role 3</option>
                                                    </select>
                                                    <div className="ps-form__rule-action"><Link to="#"><i
                                                        className="ps-icon--plus"></i><span>  Add Other Roles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Skills Required</label>
                                            <select className="ps-select">
                                                <option value="1">Select your skills</option>
                                                <option value="1">Skill 1</option>
                                                <option value="1">Skill 2</option>
                                                <option value="1">Skill 3</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                                <div className="form-group">
                                                    <label>Type of working time</label>
                                                    <select className="ps-select">
                                                        <option value="1">Fulltime</option>
                                                        <option value="1">Partime</option>
                                                        <option value="1">Remote</option>
                                                        <option value="1">Onsite</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                                                <div className="form-group form-group--range">
                                                    <label>Salary Range</label>
                                                    <div className="form-group__content">
                                                        <div className="ps-form__range">
                                                            <figure>
                                                                <input className="form-control" type="text"
                                                                       placeholder="$" />
                                                            </figure>
                                                            <figure>
                                                                <input className="form-control" type="text"
                                                                       placeholder="$" />
                                                            </figure>
                                                        </div>
                                                        <div className="form-group__currency">
                                                            <select className="ps-select">
                                                                <option value="1">USD</option>
                                                                <option value="1">VND</option>
                                                                <option value="1">SGD</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Skills Required</label>
                                            <input className="form-control" type="text" placeholder="e.g Hanoi" />
                                        </div>
                                        <div className="ps-form__submit">
                                            <button className="ps-btn ps-btn--gradient" type="button">Post Job Now
                                            </button>
                                            <button className="ps-btn ps-btn--white ps-btn--shadow" type="reset">Post
                                                Job Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="ps-section__sidebar">
                                    <aside className="widget widget_profile widget_progress">
                                        <div className="ps-block--user">
                                            <div className="ps-block__thumbnail">
                                                <img src="assets/img/users/1.jpg" alt="" />
                                            </div>
                                            <div className="ps-block__content">
                                                <p><strong>Wellcome back</strong></p>
                                                <h4>John Herrry</h4><Link to="#">View your profile<i
                                                className="fa fa-caret-right"></i></Link>
                                            </div>
                                        </div>
                                        <h5>Setup your account</h5>
                                        <div className="ps-progress"><span>65%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <Link to="#">Add your address ( +5% )</Link>
                                    </aside>
                                    <aside className="widget widget_profile widget_connections">
                                        <h3 className="widget-title">Connections</h3>
                                        <div className="widget__content">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                                                    <p className="ps-connections">
                                                        <Link to="#"><img src="assets/img/pages/profile/connection-1.jpg" alt=""/></Link>
                                                        <Link to="#"><img src="assets/img/pages/profile/connection-2.jpg" alt="" /></Link>
                                                        <Link to="#"><img src="assets/img/pages/profile/connection-3.jpg" alt="" /></Link>
                                                        <Link to="#"><img src="assets/img/pages/profile/connection-4.jpg" alt="" /></Link>
                                                    </p>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                                                    <p>163 Connections <br/> 290 Followers <br/> 36 Following</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget__footer">
                                            <p>To see more people</p><Link className="ps-btn" to="#">Add connections</Link>
                                        </div>
                                    </aside>
                                    <aside className="widget widget_profile widget_people">
                                        <h3 className="widget-title">Who Viewed me
                                            <span className="ps-icon--dots"><i></i></span>
                                        </h3>
                                        <div className="widget-content">
                                            <Link to="#"><img src="assets/img/people/1.jpg" alt="" /></Link>
                                            <Link to="#"><img src="assets/img/people/2.jpg" alt="" /></Link>
                                            <Link to="#"><img src="assets/img/people/3.jpg" alt="" /></Link>
                                            <Link to="#"><img src="assets/img/people/4.jpg" alt="" /></Link>
                                            <Link to="#"><img src="assets/img/people/5.jpg" alt="" /></Link>
                                            <Link to="#"><img src="assets/img/people/6.jpg" alt="" /></Link>
                                            <Link to="#"><img src="assets/img/people/7.jpg" alt="" /></Link>
                                            <Link className="ps-more" to="#"><i>+12</i></Link></div>
                                    </aside>
                                </div>
                            </div>
                        </div>
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
                                        <p>Keep me up to date with content, updates, and offers from Jobolt</p>
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
                                <p>&copy; 2019 <Link to="#">Athena</Link> - All Rights Reserved.</p>
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
                <div className="ps-search" id="site-search">
                    <Link className="ps-btn--close" to="#"></Link>
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
export default PostJob;