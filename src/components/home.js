import React from 'react';
import {Link} from "react-router-dom";

const Utilities = {
    GeneralHeader: function() {
        return (
            <div>
                <header className="header header--2 dark page" data-sticky="true">
                    <div className="header__left">
                        <Link className="ps-logo hm" to="/">Home</Link>
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
                            <Link className="ps-btn ps-btn--outline" to="/login">Login</Link>
                            <Link className="ps-btn" to="/signupselection">Sign Up</Link>
                        </div>
                    </div>
                </header>

                <header className="header header--mobile" data-sticky="false">
                    <div className="header__content">
                        <div className="header__left">
                            <a className="ps-toggle--sidebar" href="#navigation-mobile">
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>
                        <div className="header__center">
                            <Link className="ps-logo" to="/">
                                Home
                            </Link>
                        </div>
                        <div className="header__right">
                            <div className="header__actions">
                                <Link className="ps-search-btn" to="#">
                                    <i className="fa fa-search"></i>
                                </Link>
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
            </div>
        )
    },

    Footer: function () {
        return (
            <footer className="ps-footer">
                <div className="container">
                    <div className="ps-footer__top">
                        <div className="ps-footer__numbers">
                            <p><span><strong>2,342,233</strong> COMMUNITY MEMBERS</span><span><strong>15,342,216</strong> TOTAL JOBS POSTED</span></p>
                        </div>
                    </div>
                    <div className="ps-footer__center">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <aside className="widget widget_footer">
                                    <h3 className="widget-title">Meet Jobolt</h3>
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">How it Works</a></li>
                                        <li><a href="#">Our services</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <aside className="widget widget_footer">
                                    <h3 className="widget-title">Jobolt Tools</h3>
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">My Resumes</a></li>
                                        <li><a href="#">My Jobs</a></li>
                                        <li><a href="#">Employers’ Messages</a></li>
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
                                <li><a href="#"> Privacy Policy</a></li>
                                <li><a href="#"> Terms and Conditions</a></li>
                                <li><a href="#"> Help</a></li>
                                <li><a href="#"> Jobolt Licenses</a></li>
                                <li><a href="#"> Partners</a></li>
                            </ul>
                            <p>&copy; 2019 <a href="#">Jobolt</a> - All Rights Reserved.</p>
                        </figure>
                        <figure>
                            <div className="ps-footer__language"><span>Language:</span>
                                <select className="ps-select">
                                    <option value="1">English</option>
                                    <option value="1">Vietnamese</option>
                                </select>
                            </div>
                            <ul className="ps-list--social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </figure>
                    </div>
                </div>
            </footer>
        )
    },

    AuthHeader: function () {
        return (
            <div>
                <header className="header header--2 dark page authh" data-sticky="true">
                    <div className="container header-auth">
                        <Link className="ps-logo hm" to="/">Home</Link>
                    </div>
                </header>

                <header className="header header--mobile" data-sticky="false">
                    <div className="header__content">
                        <div className="header__left">
                            <a className="ps-toggle--sidebar" href="#navigation-mobile">
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>
                        <div className="header__center">
                            <Link className="ps-logo" to="/">
                                Home
                            </Link>
                        </div>

                        <div className="header__right">
                            <div className="header__actions">
                                <Link className="ps-search-btn" to="#">
                                    <i className="fa fa-search"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="ps-panel--sidebar" id="navigation-mobile">
                    <div className="ps-panel__header">
                        <h3>Menu</h3>
                    </div>
                </div>
            </div>
        )
    },

    InnerPagesHeader: function () {
        return (
            <div>
                <header className="header header--2 dark page authh" data-sticky="true">
                    <div className="container header-auth">
                        <Link className="ps-logo hm" to="/">Home</Link>
                    </div>
                </header>

                <header className="header header--mobile" data-sticky="false">
                    <div className="header__content">
                        <div className="header__left">
                            <a className="ps-toggle--sidebar" href="#navigation-mobile">
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>
                        <div className="header__center">
                            <Link className="ps-logo" to="/">
                                Home
                            </Link>
                        </div>

                        <div className="header__right">
                            <ul className="menu">
                                <li><Link to="/browsefreelancers">Freelancers</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contactus">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>

                <div className="ps-panel--sidebar" id="navigation-mobile">
                    <div className="ps-panel__header">
                        <h3>Menu</h3>
                    </div>
                </div>
            </div>
        )
    },

    InnerPagesFooter: function () {
        return (
            <footer className="ps-footer">
                <div className="container">
                    <Link className="ps-logo hm" to="/">Jobolt</Link>

                    <div className="ps-footer__bottom">
                        <figure>
                            <p>&copy; 2019 <Link to="/">Jobolt</Link> - All Rights Reserved.</p>
                        </figure>
                        <figure>
                            <div className="ps-footer__language"><span>Language:</span>
                                <select className="ps-select">
                                    <option value="1">English</option>
                                    <option value="1">Vietnamese</option>
                                </select>
                            </div>
                            <ul className="ps-list--social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </figure>
                    </div>
                </div>
            </footer>
        )
    },

    AuthFooter: function () {
        return (
            <footer className="ps-footer">
                <div className="container">
                    <Link className="ps-logo hm" to="/">Jobolt</Link>

                    <div className="ps-footer__center">
                        <div className="row">
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
                            <p>&copy; 2019 <Link to="/">Jobolt</Link> - All Rights Reserved.</p>
                        </figure>
                        <figure>
                            <div className="ps-footer__language"><span>Language:</span>
                                <select className="ps-select">
                                    <option value="1">English</option>
                                    <option value="1">Vietnamese</option>
                                </select>
                            </div>
                            <ul className="ps-list--social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </figure>
                    </div>
                </div>
            </footer>
        )
    },

    baseurl: "http://localhost:8050/api/",

    ajaxloader: function() {
        return (
            <div className='spinner-grow' role='status'>
                <span className='sr-only'>Loading...</span>
            </div>
        )
    },

    validmail: function (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
};

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <article>
                <Utilities.GeneralHeader />

                <div id="homepage-1">
                    <div className="ps-home-banner">
                        <img src="assets/img/homepage/home-1/home-banner/1.jpg" alt="" />
                        <form className="ps-form--home-find-job" data-wow-delay="0.25s" data-wow-duration="1s">
                            <h1>Jobolt <br/> Freelancers</h1>
                            <h5>Where the world meets startups. Millions of small businesses use <br/> Freelancer to turn their ideas into reality</h5>
                            <div className="form-group"><i className="fa fa fa-search"></i>
                                <input className="form-control" type="text" placeholder="Enter job title, position, skills..." />
                                <button className="ps-btn ps-btn--gradient">Find Job</button>
                            </div>
                            <p>Update the latest jobs and announcements from Jobolt.<Link to="/signupselection"> Join us today</Link></p>
                        </form>
                    </div>
                    <div className="ps-section ps-home-get-job">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>Get your job done</h3>
                            </div>
                            <div className="ps-section__content">
                                <p>Jobolt expertly matches professionals and agencies to businesses
                                    seeking specialized talent.</p>
                                <div className="ps-section__actions">
                                    <Link className="ps-btn ps-btn--gradient" to="/login">
                                        <i className="athena-tools"></i> Post a Job</Link>
                                    <Link className="ps-btn ps-btn--shadow ps-btn--white" to="/browsejobs">
                                        <i className="athena-archive"></i> Job List
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-home-services">
                        <div className="container ps-tab-root">
                            <div className="ps-tabs">
                                <div className="ps-tab active" id="tab-1" style={{height: "350px"}}></div>
                                <div className="ps-tab" id="tab-2"><img src="assets/img/homepage/home-1/services/2.png" alt="" /></div>
                                <div className="ps-tab" id="tab-3"><img src="assets/img/homepage/home-1/services/3.png" alt="" /></div>
                                <div className="ps-tab" id="tab-4"><img src="assets/img/homepage/home-1/services/5.png" alt="" /></div>
                            </div>
                            <ul className="ps-tab-list">
                                <li className="active"><a href="#tab-1">
                                    <span className="tab-icon"><i className="athena-browser-code"></i></span><span className="tab-title">Website Development</span><span className="tab-desc">Pellentesque vestibulum orci, id eleifend ante cursus vitae.</span></a></li>
                                <li><a href="#tab-2"><span className="tab-icon"><i className="athena-laptop-pencil"></i></span><span className="tab-title">Graphic Design</span><span className="tab-desc">Pellentesque vestibulum orci, id eleifend ante cursus vitae.</span></a></li>
                                <li><a href="#tab-3"><span className="tab-icon"><i className="athena-target-up"></i></span><span className="tab-title">Internet Marketing</span><span className="tab-desc">Pellentesque vestibulum orci, id eleifend ante cursus vitae.</span></a></li>
                                <li><a href="#tab-4"><span className="tab-icon"><i className="athena-tablet"></i></span><span className="tab-title">Mobile App</span><span className="tab-desc">Pellentesque vestibulum orci, id eleifend ante cursus vitae.</span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="ps-section ps-home-process bg--cover" data-background="assets/img/bg/home-1/process.jpg">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>How it works</h3>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                    <div className="ps-block--process">
                                        <div className="ps-block__thumbnail"><img src="assets/img/icons/home-1/process-1.png" alt="" /></div>
                                        <div className="ps-block__content">
                                            <p><span><i>1</i></span>Sign up for a account</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                    <div className="ps-block--process">
                                        <div className="ps-block__thumbnail"><img src="assets/img/icons/home-1/process-2.png" alt="" /></div>
                                        <div className="ps-block__content">
                                            <p><span><i>2</i></span>Confirm your email address and add profile</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                    <div className="ps-block--process">
                                        <div className="ps-block__thumbnail"><img src="assets/img/icons/home-1/process-3.png" alt="" /></div>
                                        <div className="ps-block__content">
                                            <p><span><i>3</i></span>Choice of solutions and post jobs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-home-benifits bg--top" data-background="assets/img/bg/home-1/home-benifits.jpg">
                        <div className="container">
                            <div className="ps-section__content">
                                <h3>Benefits for freelancer</h3>
                                <p>With Jobolt, you leverage on the flexibility that comes with working from anywhere around the globe and at your free time!</p>
                                <ul className="ps-list--dot">
                                    <li>Pay is very fair.</li>
                                    <li>There is no 9-5 :)</li>
                                    <li>You own yourself, your time and money. Self development has never seemed more attractive.</li>
                                </ul><Link className="ps-btn" to="/services">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ps-home-features">
                        <div className="ps-section__left">
                            <div className="ps-block--feature">
                                <img src="assets/img/homepage/home-1/feature-1.png" alt="" />
                                <h4>Smarter. Faster. Better</h4>
                                <p>Jobolt makes it fast, simple, and cost-effective to find, hire, work with, and pay the best professionals anywhere, any time.</p>
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <div className="ps-block--feature"><img src="assets/img/homepage/home-1/feature-2.png" alt="" />
                                <h4>Full - time, freelance, or consulting</h4>
                                <p>You want to be employed full time? Well, you are the lord! You want to hit it on and off? Who are we to say no!</p>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section ps-home-top-jobs">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>Browse top jobs</h3>
                            </div>
                            <div className="ps-section__content">
                                <figure>
                                    <figcaption>Browse top jobs by category</figcaption>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><Link to="/browsejobs">Graphic design</Link></li>
                                                <li><Link to="/browsejobs">Designer jobs</Link></li>
                                                <li><Link to="/browsejobs">Frontend Developer jobs</Link></li>
                                                <li><Link to="/browsejobs">Developer jobs</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><Link to="/browsejobs">Resources jobs</Link></li>
                                                <li><Link to="/browsejobs">Marketing online jobs</Link></li>
                                                <li><Link to="/browsejobs">Mobile Developer jobs</Link></li>
                                                <li><Link to="/browsejobs">App Developer jobs</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><Link to="/browsejobs">Resources jobs</Link></li>
                                                <li><Link to="/browsejobs">Sales jobs</Link></li>
                                                <li><Link to="/browsejobs">Logo Design jobs</Link></li>
                                                <li><Link to="/browsejobs">Seo jobs</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><Link to="/browsejobs">Articles jobs</Link></li>
                                                <li><Link to="/browsejobs">Android jobs</Link></li>
                                                <li><Link to="/browsejobs">Logo Design jobs</Link></li>
                                                <li><Link to="/browsejobs">Seo jobs</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="ps-home-join-us">
                        <div className="container">
                            <p>Millions of small businesses use <br/> Freelancer to turn their ideas into reality</p><Link className="ps-btn ps-btn--gradient ps-btn--lg" to="/signupselection">Join Jobolt today</Link>
                        </div>
                    </div>

                    <Utilities.Footer />
                </div>
            </article>
        )
    }
}

export {Home, Utilities};