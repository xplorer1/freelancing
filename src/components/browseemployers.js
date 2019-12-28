import React from 'react';
import {Link} from "react-router-dom";

class BrowseEmployers extends React.Component {
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
                {/*<!--include search-sidebar--> */}
                <div className="ps-page">
                    <div className="ps-section--top bg--cover"
                         style={{backgroundImage: "url('assets/img/bg/pages/brow-employers.jpg')"}} >
                        <div className="container">
                            <div className="ps-section__header">
                                <p>BROWSE <br/> EMPLOYERS</p>
                            </div>
                            <div className="ps-section__content">
                                <form className="ps-form--home-find-job ps-form--top">
                                    <h1>Find employers on Jobolt</h1>
                                    <h5>Where the world meets startups. Millions of small businesses
                                        use <br/> Freelancer to turn their ideas into reality</h5>
                                    <div className="form-group"><i className="fa fa fa-search"></i>
                                        <input className="form-control" type="text"
                                               placeholder="Enter job title, position, skills..." />
                                            <button className="ps-btn ps-btn--gradient">Find Jobs</button>
                                    </div>
                                    <p>Update the latest jobs and announcements from Athena.<Link to="#"> Join us
                                        today</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section--sidebar ps-listing">
                        <div className="container">
                            <div className="ps-section__container">
                                <div className="ps-section__content">
                                    <div className="ps-section__filter">
                                        <h4 className="ps-heading--2">Filter by</h4>
                                        <div className="row">
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div className="form-group">
                                                    <select className="ps-select">
                                                        <option value="1">Skills</option>
                                                        <option value="2">Front-end</option>
                                                        <option value="2">Back-end</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div className="form-group">
                                                    <select className="ps-select">
                                                        <option value="1">Job Type</option>
                                                        <option value="2">Full Time</option>
                                                        <option value="2">Partime</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div className="form-group">
                                                    <select className="ps-select">
                                                        <option value="1">Location</option>
                                                        <option value="2">USA</option>
                                                        <option value="2">Viet Nam</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div className="form-group">
                                                    <select className="ps-select">
                                                        <option value="1">Compesation</option>
                                                        <option value="2">Compesation 1</option>
                                                        <option value="2">Compesation 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div className="form-group">
                                                    <select className="ps-select">
                                                        <option value="1">Company</option>
                                                        <option value="2">Google</option>
                                                        <option value="2">Twitter</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
                                                <div className="form-group">
                                                    <select className="ps-select">
                                                        <option value="1">Keywords</option>
                                                        <option value="2">Front-end</option>
                                                        <option value="2">Back-end</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-section__items">
                                        <h4 className="ps-heading--2 mb-40">13, 327 results</h4>
                                        <div className="ps-employer">
                                            <div className="ps-employer__thumbnail">
                                                <img src="assets/img/employee/1.jpg" alt="" />
                                            </div>

                                            <div className="ps-employer__content">
                                                <figure>
                                                    <figcaption>La Carolia</figcaption>
                                                    <p>Hanoi, Vietnam · <strong>CEO of addlight Inc. / Director of some
                                                        tech start-ups</strong></p>
                                                </figure>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                                <h5><i className="fa fa-briefcase"></i> <strong>15 employees</strong> ·
                                                    $50K to $100K</h5>
                                            </div>
                                        </div>
                                        <div className="ps-employer">
                                            <div className="ps-employer__thumbnail">
                                                <img src="assets/img/employee/2.jpg" alt="" />
                                            </div>
                                            <div className="ps-employer__content">
                                                <figure>
                                                    <figcaption>Ci Vectra</figcaption>
                                                    <p>Hanoi, Vietnam · <strong>Founder Ci Vectra Inc. </strong></p>
                                                </figure>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                                <h5><i className="fa fa-briefcase"></i> <strong>15 employees</strong> ·
                                                    $50K to $100K</h5>
                                            </div>
                                        </div>
                                        <div className="ps-employer">
                                            <div className="ps-employer__thumbnail">
                                                <img src="assets/img/employee/3.jpg" alt="" />
                                            </div>
                                            <div className="ps-employer__content">
                                                <figure>
                                                    <figcaption>Jont kook</figcaption>
                                                    <p>Hanoi, Vietnam · <strong>CEO of moontheme </strong></p>
                                                </figure>
                                                <p>Pellentesque in dui eros. Nulla justo tortor, sodales sed auctor at,
                                                    tempus eget ante. Maecenas lacinia dui ut ornare tincidunt</p>
                                                <h5><i className="fa fa-briefcase"></i> <strong>15 employees</strong> ·
                                                    $50K to $100K</h5>
                                            </div>
                                        </div>
                                        <div className="ps-employer">
                                            <div className="ps-employer__thumbnail">
                                                <img src="assets/img/employee/4.jpg" alt="" />
                                            </div>
                                            <div className="ps-employer__content">
                                                <figure>
                                                    <figcaption>La Carolia</figcaption>
                                                    <p>Hanoi, Vietnam · <strong>CEO of addlight Inc. / Director of some
                                                        tech start-ups </strong></p>
                                                </figure>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                                <h5><i className="fa fa-briefcase"></i> <strong>15 employees</strong> ·
                                                    $50K to $100K</h5>
                                            </div>
                                        </div>
                                        <div className="ps-employer">
                                            <div className="ps-employer__thumbnail">
                                                <img src="assets/img/employee/5.jpg" alt="" />
                                            </div>
                                            <div className="ps-employer__content">
                                                <figure>
                                                    <figcaption>Tadaaki Kimura</figcaption>
                                                    <p>Hanoi, Vietnam · <strong>Founder addlight Inc.</strong></p>
                                                </figure>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                                <h5><i className="fa fa-briefcase"></i> <strong>15 employees</strong> ·
                                                    $50K to $100K</h5>
                                            </div>
                                        </div>
                                        <div className="ps-employer">
                                            <div className="ps-employer__thumbnail">
                                                <img src="assets/img/employee/6.jpg" alt="" />
                                            </div>
                                            <div className="ps-employer__content">
                                                <figure>
                                                    <figcaption>Open Suse</figcaption>
                                                    <p>Hanoi, Vietnam · <strong>CEO of addlight Inc. / Director of some
                                                        tech start-ups </strong></p>
                                                </figure>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                                <h5><i className="fa fa-briefcase"></i> <strong>15 employees</strong> ·
                                                    $50K to $100K</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-section__footer text-center">
                                        <Link className="ps-link--viewmore" to="/browseemployers">
                                            <span className="ps-icon--dots"><i></i></span> View more
                                        </Link>
                                    </div>
                                </div>
                                <div className="ps-section__sidebar">
                                    <div className="widget widget_profile widget_find-employers">
                                        <h3 className="widget-title">Find Link Employers</h3>
                                        <ul className="ps-list">
                                            <li><Link to="#">Browse all</Link></li>
                                            <li><Link to="#">Browse with My skills</Link></li>
                                            <li><Link to="#">Browse with top</Link></li>
                                            <li><Link to="#">Browse Local jobs</Link></li>
                                            <li><Link to="#">Browse Categories</Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_profile widget_feature-members">
                                        <h3 className="widget-title">Featured Members</h3>
                                        <figure>
                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" to="#">
                                                    <img src="assets/img/homepage/home-2/brand/1.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" to="#"> Zebra</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" to="#">
                                                    <img src="assets/img/homepage/home-2/brand/2.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" to="#"> Moontheme Studio</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" to="#">
                                                    <img src="assets/img/homepage/home-2/brand/3.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" to="#"> La Carolina</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" to="#">
                                                    <img src="assets/img/homepage/home-2/brand/4.jpg" alt="" />
                                                </Link>
                                                <Link className="ps-block__title" to="#"> Mberak Designs</Link>
                                            </div>
                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" to="#">
                                                    <img src="assets/img/homepage/home-2/brand/5.jpg" alt="" />
                                                </Link>
                                                <Link className="ps-block__title" to="#"> Logo text</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" to="#">
                                                    <img src="assets/img/homepage/home-2/brand/6.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" to="#"> Invectra</Link>
                                            </div>
                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" to="#">
                                                    <img src="assets/img/homepage/home-2/brand/7.jpg" alt="" />
                                                </Link>
                                                <Link className="ps-block__title" to="#"> Open Suse</Link></div>
                                        </figure>
                                    </div>
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
                                    <form className="ps-form--newsletters"
                                          action="http://nouthemes.net/html/athena/index.html" method="get">
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
                                <p>&copy; 2019 <Link to="#">Jobolt</Link> - All Rights Reserved. </p>
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
                        <form className="ps-form--primary-search">
                            <input className="form-control" type="text" placeholder="Search for..." />
                                <button><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default BrowseEmployers;