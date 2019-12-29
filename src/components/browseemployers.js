import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class BrowseEmployers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.GeneralHeader />

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

                <Utilities.Footer />
            </section>
        )
    }
}
export default BrowseEmployers;