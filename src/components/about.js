import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.GeneralHeader />

                <div className="ps-page">
                    <div className="ps-about-intro bg--cover" data-background="assets/img/bg/pages/about-intro.jpg">
                        <div className="container">
                            <div className="ps-section__header">
                                <p>THE BEST <br/> FREELANCER <br/>NETWORK</p>
                            </div>
                            <div className="ps-section__content">
                                <h3>Jobolt introduction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut accumsan quam in diam porta, quis hendrerit urna eleifend.
                                    Cras eget velit non leo malesuada ullamcorper.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ps-about-business">
                        <div className="container">
                            <figure>
                                <figcaption><small>ABOUT JOBOLT COMPANY</small>  Jobolt introduction</figcaption>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan quam in diam porta, quis hendrerit urna eleifend. Cras eget velit non leo malesuada ullamcorper. Phasellus facilisis et dui id maximus. Proin sit amet egestas lorem. Aenean vitae vestibulum nibh. Sed at vestibulum enim, Link gravida ligula. Suspendisse id nulla nec urna. Suspendisse id nulla nec urna semper cursus quis eu ligula. Etiam eget tristique purus, vel pulvinar enim. Vestibulum feugiat risus eu vehicula aliquam. Maecenas eu interdum risus. Pellentesque porttitor est in nisl Suspendisse id nulla nec urna semper cursus quis eu ligula.</p>
                            </figure>
                            <figure>
                                <figcaption><small>WHY CHOOSE JOBOLT</small>  Millions of bussinesses <br/> Worldwide choose Jobolt</figcaption>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="ps-block--icon">
                                            <div className="ps-block__icon"><i className="athena-recycle"></i></div>
                                            <div className="ps-block__content">
                                                <h5>It’s simpler connect</h5>
                                                <p>Pellentesque vestibulum orci, id eleifend ante cursus vitae.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="ps-block--icon">
                                            <div className="ps-block__icon"><i className="athena-rocket"></i></div>
                                            <div className="ps-block__content">
                                                <h5>It’s faster</h5>
                                                <p>Vestibulum orci, id eleifend ante cursus vitae. In eget enim</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="ps-block--icon">
                                            <div className="ps-block__icon"><i className="athena-vector"></i></div>
                                            <div className="ps-block__content">
                                                <h5>Bets freelancers</h5>
                                                <p>Vestibulum orci, id eleifend ante cursus vitae. In eget enim</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="ps-block--icon">
                                            <div className="ps-block__icon"><i className="athena-target"></i></div>
                                            <div className="ps-block__content">
                                                <h5>Quick & easy search</h5>
                                                <p>Vestibulum orci, id eleifend ante cursus vitae. In eget enim</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="ps-section ps-about--founder">
                        <div className="ps-section__left">
                            <div className="ps-section__content">
                                <div className="ps-section__header"><small>MATTOCK FREELANCER</small>
                                    <h3>Letter from founder</h3>
                                </div>
                                <p>Consectetur adipiscing elit. Ut accumsan quam in diam porta, quis hendrerit urna eleifend. Cras eget velit non leo malesuada ullamcorper. Phasellus facilisis et dui id maximus. Proin sit amet egestas lorem. Aenean vitae vestibulum nibh. Sed at vestibulum enim, Link gravida ligula. Suspendisse id nulla nec urna. Suspendisse id nulla nec urna semper cursus quis eu ligula. Etiam eget tristique purus, vel pulvinar enim. Vestibulum feugiat risus eu vehicula aliquam. Maecenas eu interdum risus. Pellentesque porttitor est in nisl Suspendisse id nulla nec urna semper cursus quis eu ligula.</p>
                                <figure className="ps-block--author-2">
                                    <div className="ps-block__thumbnail"><img src="assets/img/users/3.jpg" alt="" /></div>
                                    <div className="ps-block__content">
                                        <p>Chijioke Ugwuanyi</p>
                                        <p className="text-uppercase">CEO Jobolt</p>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="ps-section__right bg--cover" data-background="assets/img/bg/pages/about-founder.jpg"><Link className="ps-logo" to="#">
                            <img src="img/logo-small.png" alt="" /></Link></div>
                    </div>
                    <div className="ps-section--2 ps-our-team">
                        <div className="container">
                            <div className="ps-section__header">
                                <h5>Meet our team</h5>
                            </div>
                            <div className="ps-section__content">
                                <div className="ps-carousel--nav owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="50000" data-owl-gap="30" data-owl-nav="true" data-owl-dots="true" data-owl-item="3" data-owl-item-xs="2" data-owl-item-sm="2" data-owl-item-md="3" data-owl-item-lg="3" data-owl-duration="1000" data-owl-mousedrag="on">
                                    <div className="ps-block--team">
                                        <div className="ps-block__thumbnail">
                                            <img src="assets/img/users/1.jpg" alt="" />
                                            <ul className="ps-list--social simple">
                                                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="ps-block__content"><Link to="#">Fujitoshi</Link>
                                            <p>CEO JOBOLT</p>
                                        </div>
                                    </div>
                                    <div className="ps-block--team">
                                        <div className="ps-block__thumbnail">
                                            <img src="assets/img/users/2.jpg" alt="" />
                                            <ul className="ps-list--social simple">
                                                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="ps-block__content"><Link to="#">Hellen marry</Link>
                                            <p>MARKETING ONLINE</p>
                                        </div>
                                    </div>
                                    <div className="ps-block--team">
                                        <div className="ps-block__thumbnail">
                                            <img src="assets/img/users/3.jpg" alt="" />
                                            <ul className="ps-list--social simple">
                                                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="ps-block__content"><Link to="#">Jont Hennry</Link>
                                            <p>PRODUCT DESIGN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section--2 ps-section--line ps-client-feedback">
                        <div className="container">
                            <div className="ps-section__container">
                                <div className="ps-section__header">
                                    <h5>Client Feedback</h5>
                                </div>
                                <div className="ps-section__content">
                                    <div className="ps-block--testimonials">
                                        <div className="ps-block__left"><Link className="active" to="#">
                                            <img src="assets/img/users/testimonial-1.jpg" alt="" /></Link><Link to="#">
                                            <img src="assets/img/users/testimonial-2.jpg" alt="" />
                                        </Link><Link to="#"><img src="assets/img/users/testimonial-3.jpg" alt="" />
                                        </Link><Link to="#"><img src="assets/img/users/testimonial-4.jpg" alt="" /></Link></div>
                                        <div className="ps-block__right">
                                            <div className="owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed="10000" data-owl-gap="0" data-owl-nav="false" data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on">
                                                <div className="ps-block--testimonial">
                                                    <h4>Aliquam in dolor scelerisque molestie justo ac - sodales velit.</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan diam porta, quis hendrerit urna eleifend. Cras eget velit non leo malesuada corper. Phasellus facilisis et dui id maximus.</p>
                                                    <h5><span> Marry cook </span> - CEO Moontheme</h5>
                                                </div>
                                                <div className="ps-block--testimonial">
                                                    <h4>Scelerisque molestie justo ac</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan diam porta, quis hendrerit urna eleifend. Cras eget velit non leo malesuada corper. Phasellus facilisis et dui id maximus.</p>
                                                    <h5><span> John Clame</span> - CEO Moontheme</h5>
                                                </div>
                                                <div className="ps-block--testimonial">
                                                    <h4>Aolestie justo ac - sodales velit.</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan diam porta, quis hendrerit urna eleifend. Cras eget velit non leo malesuada corper. Phasellus facilisis et dui id maximus.</p>
                                                    <h5><span> Arena Colline </span> - CEO Moontheme</h5>
                                                </div>
                                                <div className="ps-block--testimonial">
                                                    <h4>consectetur adipiscing elit</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan diam porta, quis hendrerit urna eleifend. Cras eget velit non leo malesuada corper. Phasellus facilisis et dui id maximus.</p>
                                                    <h5><span> Steven Kappy </span> - CEO Moontheme</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section--2 ps-our-partner">
                        <div className="container">
                            <div className="ps-section__header">
                                <h5>OUR PARTNERS</h5>
                            </div>
                            <div className="ps-section__content">
                                <div className="owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="10000" data-owl-gap="20" data-owl-nav="false" data-owl-dots="false" data-owl-item="6" data-owl-item-xs="2" data-owl-item-sm="4" data-owl-item-md="5" data-owl-item-lg="6" data-owl-duration="1000" data-owl-mousedrag="off"><Link to="#">
                                    <img src="assets/img/pages/about-us/partner-1.png" alt="" />
                                </Link><Link to="#"><img src="assets/img/pages/about-us/partner-2.png" alt="" /></Link>
                                    <Link to="#"><img src="assets/img/pages/about-us/partner-3.png" alt="" /></Link>
                                    <Link to="#"><img src="assets/img/pages/about-us/partner-4.png" alt="" />
                                    </Link>
                                    <Link to="#"><img src="assets/img/pages/about-us/partner-5.png" alt="" /></Link>
                                    <Link to="#"><img src="assets/img/pages/about-us/partner-6.png" alt="" /></Link>
                                    <Link to="#"><img src="assets/img/pages/about-us/partner-3.png" alt="" /></Link>
                                    <Link to="#"><img src="assets/img/pages/about-us/partner-4.png" alt="" /></Link>
                                    <Link to="#"><img src="assets/img/pages/about-us/partner-5.png" alt="" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>

                <Utilities.Footer />

            </section>
    )
    }
    }
    export default About;