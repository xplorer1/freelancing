import React from 'react';
import {Link} from "react-router-dom";

class StatikComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <article>
                <header className="header header--1" data-sticky="true">
                    <div className="header__left">
                        <ul className="menu text-justify">

                            <li><Link to="/postjob">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>

                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="header__right">
                        <ul className="menu">
                            <li><Link to="/browsejobs">Browse Jobs</Link></li>
                            <li><Link to="/browsefreelancers">Freelancers</Link></li>
                            <li><Link to="/browseemployers">Employers</Link></li>
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
                            <a className="ps-toggle--sidebar" href="#navigation-mobile">
                                <i className="fa fa-bars"></i></a>
                        </div>
                        <div className="header__center">
                            <Link className="ps-logo" to="/">
                                Home
                            </Link>
                        </div>
                        <div className="header__right">
                            <div className="header__actions">
                                <a className="ps-search-btn" href="#"><i className="fa fa-search"></i></a></div>
                        </div>
                    </div>
                </header>

                <div className="ps-panel--sidebar" id="navigation-mobile">
                    <div className="ps-panel__header">
                        <h3>Menu</h3>
                    </div>
                    <div className="ps-panel__content">
                        <ul className="menu--mobile">
                            <li className="menu-item-has-children"><Link to="/">
                                Home</Link>
                            </li>
                            <li><Link to="/browsefreelancers">Freelancers</Link></li>
                            <li><Link to="/browseemployers">Employers</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>

                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div id="homepage-1">
                    <div className="ps-home-banner">
                        <div className="ps-carousel--dots owl-slider" data-owl-auto="true"
                             data-owl-loop="true" data-owl-speed="5000" data-owl-gap="0" data-owl-nav="false"
                             data-owl-dots="true" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" d
                             ata-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000"
                             data-owl-mousedrag="off" data-owl-animate-in="fadeIn" data-owl-animate-out="fadeOut">

                            <img src="assets/img/homepage/home-1/home-banner/1.jpg" alt="" />
                            <img src="assets/img/homepage/home-1/home-banner/2.jpg" alt="" />
                            <img src="assets/img/homepage/home-1/home-banner/1.jpg" alt="" />
                            <img src="assets/img/homepage/home-1/home-banner/2.jpg" alt="" /></div>
                        <form className="ps-form--home-find-job" method="get" data-wow-delay="0.25s" data-wow-duration="1s">
                            <h1>Jobolt <br/> Freelancers</h1>
                            <h5>Where the world meets startups. Millions of small businesses use <br/> Freelancer to turn their ideas into reality</h5>
                            <div className="form-group"><i className="fa fa fa-search"></i>
                                <input className="form-control" type="text" placeholder="Enter job title, position, skills..." />
                                <button className="ps-btn ps-btn--gradient">Find Job</button>
                            </div>
                            <p>Update the latest jobs and announcements from Jobolt.<a href="#"> Join us today</a></p>
                        </form>
                    </div>
                    <div className="ps-section ps-home-get-job">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>Get it to your job</h3>
                            </div>
                            <div className="ps-section__content">
                                <p>Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna condimentum a vehicula</p>
                                <div className="ps-section__actions"><a className="ps-btn ps-btn--gradient" href="post-a-job.html"><i className="athena-tools"></i> Post a Job</a><a className="ps-btn ps-btn--shadow ps-btn--white" href="brower-jobs.html"><i className="athena-archive"></i> Job List</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-home-services">
                        <div className="container ps-tab-root">
                            <div className="ps-tabs">
                                <div className="ps-tab active" id="tab-1"><img src="assets/img/homepage/home-1/services/1.png" alt="" /></div>
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
                                <p>Pellentesque vehicula fermentum turpis eu cursus. Cras convallis tellus et elit aliquet, vitae dignissim ligula sodales.</p>
                                <ul className="ps-list--dot">
                                    <li>Cras convallis tellus et elit aliquet 20%</li>
                                    <li>Suspendisse tincidunt vulputate leo in sollicitudin</li>
                                    <li>Morbi sodales risus quis orci hendrerit semper</li>
                                </ul><a className="ps-btn" href="services.html">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="ps-home-features">
                        <div className="ps-section__left">
                            <div className="ps-block--feature"><img src="assets/img/homepage/home-1/feature-1.png" alt="" />
                                <h4>Smarter. Faster. Better</h4>
                                <p>Pellentesque vehicula fermentum turpis eu cursus. Cras convallis tellus et elit aliquet, vitae dignissim ligula sodales.</p>
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <div className="ps-block--feature"><img src="assets/img/homepage/home-1/feature-2.png" alt="" />
                                <h4>Full - time, freelance, or consulting</h4>
                                <p>Pellentesque vehicula fermentum turpis eu cursus. Cras convallis tellus et elit aliquet, vitae dignissim ligula sodales.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section ps-home-top-jobs">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>Brower top jobs</h3>
                            </div>
                            <div className="ps-section__content">
                                <figure>
                                    <figcaption>Browse top jobs by member</figcaption>
                                    <div className="owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="0" data-owl-nav="false" data-owl-dots="false" data-owl-item="6" data-owl-item-xs="2" data-owl-item-sm="3" data-owl-item-md="4" data-owl-item-lg="6" data-owl-duration="1000" data-owl-mousedrag="on">
                                        <div className="ps-job--vertical">
                                            <div className="ps-job__thumbnail"><img src="assets/img/homepage/home-1/job-1.png" alt="" /><span className="ps-job__badge"><i>Hot</i></span>
                                            </div>
                                            <div className="ps-job__content"><a href="#">Moontheme studio</a>
                                                <p>Member Jobolt</p>
                                            </div>
                                        </div>
                                        <div className="ps-job--vertical">
                                            <div className="ps-job__thumbnail"><img src="assets/img/homepage/home-1/job-2.png" alt="" />
                                            </div>
                                            <div className="ps-job__content"><a href="#">Zebra</a>
                                                <p>Member Jobolt</p>
                                            </div>
                                        </div>
                                        <div className="ps-job--vertical">
                                            <div className="ps-job__thumbnail"><img src="assets/img/homepage/home-1/job-3.png" alt="" />
                                            </div>
                                            <div className="ps-job__content"><a href="#">La Carolina</a>
                                                <p>Member Jobolt</p>
                                            </div>
                                        </div>
                                        <div className="ps-job--vertical">
                                            <div className="ps-job__thumbnail"><img src="assets/img/homepage/home-1/job-4.png" alt="" />
                                            </div>
                                            <div className="ps-job__content"><a href="#">Mberak</a>
                                                <p>Member Jobolt</p>
                                            </div>
                                        </div>
                                        <div className="ps-job--vertical">
                                            <div className="ps-job__thumbnail"><img src="assets/img/homepage/home-1/job-5.png" alt="" />
                                            </div>
                                            <div className="ps-job__content"><a href="#">Logotext</a>
                                                <p>Member Jobolt</p>
                                            </div>
                                        </div>
                                        <div className="ps-job--vertical">
                                            <div className="ps-job__thumbnail"><img src="assets/img/homepage/home-1/job-6.png" alt="" />
                                            </div>
                                            <div className="ps-job__content"><a href="#">Invectra</a>
                                                <p>Member Jobolt</p>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <figure>
                                    <figcaption>Browse top jobs in category</figcaption>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><a href="brower-jobs.html">Graphic design</a></li>
                                                <li><a href="brower-jobs.html">Designer jobs</a></li>
                                                <li><a href="brower-jobs.html">Frontend Developer jobs</a></li>
                                                <li><a href="brower-jobs.html">Developer jobs</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><a href="brower-jobs.html">Resources jobs</a></li>
                                                <li><a href="brower-jobs.html">Marketing online jobs</a></li>
                                                <li><a href="brower-jobs.html">Mobile Developer jobs</a></li>
                                                <li><a href="brower-jobs.html">App Developer jobs</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><a href="brower-jobs.html">Resources jobs</a></li>
                                                <li><a href="brower-jobs.html">Sales jobs</a></li>
                                                <li><a href="brower-jobs.html">Logo Design jobs</a></li>
                                                <li><a href="brower-jobs.html">Seo jobs</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                            <ul className="ps-list">
                                                <li><a href="brower-jobs.html">Articles jobs</a></li>
                                                <li><a href="brower-jobs.html">Android jobs</a></li>
                                                <li><a href="brower-jobs.html">Logo Design jobs</a></li>
                                                <li><a href="brower-jobs.html">Seo jobs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="ps-home-join-us">
                        <div className="container">
                            <p>Millions of small businesses use <br/> Freelancer to turn their ideas into reality</p><a className="ps-btn ps-btn--gradient ps-btn--lg" href="#">Join Jobolt today</a>
                        </div>
                    </div>
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
                </div>
                <div id="back2top"><i className="pe-7s-angle-up"></i></div>
                <div className="ps-site-overlay"></div>
                <div id="loader-wrapper">
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>
                <div className="ps-search" id="site-search"><a className="ps-btn--close" href="#"></a>
                    <div className="ps-search__content">
                        <form className="ps-form--primary-search">
                            <input className="form-control" type="text" placeholder="Search for..." />
                            <button><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </article>
        )
    }
}

class Home extends React.Component {

    render() {
        return (
            <StatikComponent />
        )
    }
}

export {Home, StatikComponent};