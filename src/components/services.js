import React from 'react';
import {Link} from "react-router-dom";

class Services extends React.Component {
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
                            <Link className="ps-btn" to="/signupselection">Sign Up</Link></div>
                    </div>
                </header>
                <header className="header header--mobile" data-sticky="false">
                    <div className="header__content">
                        <div className="header__left">
                            <Link className="ps-toggle--sidebar" href="#navigation-mobile"><i className="fa fa-bars"></i>
                            </Link>
                        </div>
                        <div className="
                        header__center">
                            <Link className="ps-logo" to="#">
                                <img src="assets/img/logo-dark.png" alt="" />
                            </Link>
                        </div>
                        
                        <div className="header__right">
                            <div className="header__actions"><Link className="ps-search-btn" to="#">
                                <i className="fa fa-search"></i></Link></div>
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
                {/*include search-sidebar*/}
                <div className="ps-page">
                    <div className="ps-services-introduction">
                        <div className="container">
                            <div className="ps-section__left">
                                <p>THE BEST <br/> SERVICES & <br/> SOLUTIONS</p>
                            </div>
                            <div className="ps-section__right">
                                <h5>SERVICES INTRODUCTION</h5>
                                <h3>Jobolt connecting startups</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan quam in diam
                                    porta, quis hendrerit urna eleifend. Cras eget velit non leo malesuada ullamcorper.
                                    Phasellus facilisis et dui id maximus. Proin sit amet egestas lorem. Aenean vitae
                                    vestibulum nibh. Sed at vestibulum enim, Link gravida ligula. Suspendisse id nulla nec
                                    urna. Suspendisse id nulla nec urna semper cursus quis eu ligula. Etiam eget
                                    tristique purus, vel pulvinar enim. Vestibulum feugiat risus eu vehicula aliquam.
                                    Maecenas eu interdum risus. Pellentesque porttitor est in nisl Suspendisse id nulla
                                    nec urna semper cursus quis eu ligula.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ps-services-success bg--cover" style={{backgroundImage: "url('assets/img/bg/pages/services-success.jpg')"}}>
                        <div className="container">
                            <div className="ps-section__content">
                                <h3>We are your<strong>Success</strong></h3><Link
                                className="ps-btn ps-btn--outline ps-btn--lg" to="brower-jobs.html">Get started for
                                free</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section--2 ps-brower-services">
                        <div className="container">
                            <div className="ps-section__header">
                                <h5>Brower Services</h5>
                                <p>Browse our directory of service providers, or <Link to="post-Link-job.html">post Link
                                    request </Link> and have provider respond to you directly. If you'd like to offer your
                                    own services, <Link to="signin-freelancer.html">sign up today.</Link></p>
                            </div>
                            <div className="ps-section__content">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--service-3">
                                            <div className="ps-block__thumbnail">
                                                <img src="assets/img/pages/services/service-1.jpg" alt="" /></div>
                                            <div className="ps-block__content"><Link to="#">Design</Link>
                                                <p>WEB DESIGN, UI/UX DESIGN, GRAPHIC DESIGN, MOBILE APP DESIGN
                                                    USER...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--service-3">
                                            <div className="ps-block__thumbnail">
                                                <img src="assets/img/pages/services/service-2.jpg" alt="" /></div>
                                            <div className="ps-block__content"><Link to="#">Software Development</Link>
                                                <p>WEB DEVELOPMENT, SOFTWARE, MOBILE APP, IOS DEVELOPMENT, ANDROID
                                                    DEVELOPMENT...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--service-3">
                                            <div className="ps-block__thumbnail">
                                                <img src="assets/img/pages/services/service-3.jpg" alt="" /></div>
                                            <div className="ps-block__content"><Link to="#">Legal</Link>
                                                <p>ATTORNEY, PARALEGAL, LEGAL ASSISTANT, BUSSINES, ARTICLE
                                                    WRITING...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--service-3">
                                            <div className="ps-block__thumbnail">
                                                <img src="assets/img/pages/services/service-4.jpg" alt="" /></div>
                                            <div className="ps-block__content"><Link to="#">Marketing</Link>
                                                <p>ADVERTISING, DIGITAL, MARKETING EMAIL MARKETING...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section--2 ps-brower-services benifits">
                        <div className="container">
                            <div className="ps-section__header">
                                <h5>BENEFITS</h5>
                                <p>Pellentesque lorem ante, dignissim eget sagittis vel, Phasellus interdum tempus
                                    fringilla. Vivamus vel tincidunt augue. Etiam vehicula metus</p>
                            </div>
                            <div className="ps-section__content">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--benifit">
                                            <h5>Finibus eu libero</h5>
                                            <p>Etiam vehicula metus in sem tristique tempus. Ut sit amet turpis at</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--benifit">
                                            <h5>Finibus eu libero</h5>
                                            <p>Quisque ac enim vitae arcu varius faucibus sit amet ac felis. Praesent
                                                pulvinar venenatis</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--benifit">
                                            <h5>Fermentum vitae justo</h5>
                                            <p>Vitae arcu varius faucibus sit amet ac felis. Praesent pulvinar
                                                venena</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                        <div className="ps-block--benifit">
                                            <h5>Mauris eget velit quis</h5>
                                            <p>Vitae arcu varius faucibus sit amet ac felis. Praesent pulvinar
                                                venena</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-services-estimate">
                        <div className="ps-section__left bg--cover"
                             data-background="assets/img/bg/pages/services-estimate.jpg" />
                        <div className="ps-section__right">
                            <form className="ps-form--estimate" action="http://nouthemes.net/html/athena/index.html"
                                  method="get">
                                <h4>ESTIMATION</h4>
                                <div className="form-group--inline">
                                    <label>Position</label>
                                    <div className="form-group__content">
                                        <select className="ps-select">
                                            <option value="1">Web Designer</option>
                                            <option value="2">Front-end Developer</option>
                                            <option value="3">Python Developer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group--inline">
                                    <label>Number</label>
                                    <div className="form-group__content">
                                        <input className="form-control" type="text" placeholder="e.g.2" />
                                    </div>
                                </div>
                                <div className="form-group--inline">
                                    <label>Salary</label>
                                    <div className="form-group__content">
                                        <input className="form-control" type="text" placeholder="e.g. 500 USD" />
                                    </div>
                                </div>
                                <div className="form-group--inline">
                                    <label>Subtotal</label>
                                    <div className="form-group__content">
                                        <input className="form-control" type="text" placeholder="e.g. 500 USD" />
                                    </div>
                                </div>
                                <div className="ps-form__footer">
                                    <h4>Total:<span>500 USD</span></h4>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ps-section--2 ps-services-send-request">
                        <div className="container">
                            <div className="ps-section__header">
                                <h5>Send Link request for consultant</h5>
                            </div>
                            <form className="ps-form--request-consultant"
                                  action="http://nouthemes.net/html/athena/index.html" method="get">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <div className="form-group--inline sm">
                                            <label>Name</label>
                                            <div className="form-group__content">
                                                <input className="form-control" type="text" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="form-group--inline sm">
                                            <label>Email</label>
                                            <div className="form-group__content">
                                                <input className="form-control" type="text" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="form-group--inline sm">
                                            <label>Company</label>
                                            <div className="form-group__content">
                                                <input className="form-control" type="text" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <div className="form-group--inline sm">
                                            <label>Tel</label>
                                            <div className="form-group__content">
                                                <input className="form-control" type="text" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="form-group--inline sm">
                                            <label>From month</label>
                                            <div className="form-group__content">
                                                <input className="form-control" type="text" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                                        <div className="form-group--inline sm">
                                            <label>To month</label>
                                            <div className="form-group__content">
                                                <input className="form-control" type="text" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="form-group--inline lg">
                                            <label>Project obijectives/purpose</label>
                                            <div className="form-group__content">
                                                <textarea className="form-control" rows="6"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="form-group--inline">
                                            <label>Posittions needed</label>
                                            <div className="form-group__content">
                                                <select className="ps-select">
                                                    <option value="1">UI/UX Design</option>
                                                    <option value="2">Web Design</option>
                                                    <option value="3">Mobile App Design</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                        <div className="form-group--inline">
                                            <label>Specific qualifications</label>
                                            <div className="form-group__content">
                                                <select className="ps-select">
                                                    <option value="1">Master</option>
                                                    <option value="2">Senior</option>
                                                    <option value="3">Junior</option>
                                                    <option value="4">Fresher</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                        <div className="form-group--inline">
                                            <label>Maximum budget</label>
                                            <div className="form-group__content">
                                                <select className="ps-select">
                                                    <option value="1">500 USD</option>
                                                    <option value="2">1000 USD</option>
                                                    <option value="3">Mobile App Design</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                        <div className="form-group--inline">
                                            <label>Payment method</label>
                                            <div className="form-group__content">
                                                <select className="ps-select">
                                                    <option value="1">Visa</option>
                                                    <option value="2">Paypal</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-form__footer">
                                    <button className="ps-btn">Send</button>
                                    <button className="ps-btn ps-btn--gray">Cancel</button>
                                </div>
                            </form>
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

export default Services;