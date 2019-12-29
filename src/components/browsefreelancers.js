import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class BrowseFreelancers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.GeneralHeader />

                <div className="ps-page">
                    <div className="ps-section--top bg--cover" style={{backgroundImage: "url('assets/img/bg/pages/brow-employers.jpg')"}}>
                        <div className="container">
                            <div className="ps-section__header">
                                <p>BROWSE <br/> FREELANCER</p>
                            </div>
                            <div className="ps-section__content">
                                <form className="ps-form--home-find-job ps-form--top"
                                      >
                                    <h1>Find freelancer on Jobolt</h1>
                                    <h5>Where the world meets startups. Millions of small businesses
                                        use <br/> Freelancer to turn their ideas into reality</h5>
                                    <div className="form-group"><i className="fa fa fa-search"></i>
                                        <input className="form-control" type="text"
                                               placeholder="Enter job title, position, skills..." />
                                            <button className="ps-btn ps-btn--gradient">Find Job</button>
                                    </div>
                                    <p>Update the latest jobs and announcements from Jobolt.<Link to="#"> Join us
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
                                        <h4 className="ps-heading--2 mb-40">172 results</h4>
                                        <div className="ps-freelancer">
                                            <div className="ps-freelancer__thumbnail">
                                                <img src="assets/img/users/1.jpg" alt="" />
                                            </div>
                                            <div className="ps-freelancer__content">
                                                <figure>
                                                    <figcaption>Steve Munich</figcaption>
                                                    <p>Hanoi, Vietnam · Worked at @Dell</p><Link
                                                    className="ps-btn ps-btn--outline" href="#">Hire me</Link>
                                                </figure>
                                                <p><strong>Product Design ( Web, Mobile App) . 7 Years of Experience .
                                                    48 Number of hours per week</strong></p>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                            </div>
                                        </div>
                                        <div className="ps-freelancer">
                                            <div className="ps-freelancer__thumbnail">
                                                <img src="assets/img/users/2.jpg" alt="" />
                                            </div>
                                            <div className="ps-freelancer__content">
                                                <figure>
                                                    <figcaption>Roger Lim</figcaption>
                                                    <p>Hanoi, Vietnam · Worked at @Dell</p><Link
                                                    className="ps-btn ps-btn--outline" href="#">Hire me</Link>
                                                </figure>
                                                <p><strong>Product Design ( Web, Mobile App) . 7 Years of Experience .
                                                    48 Number of hours per week</strong></p>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                            </div>
                                        </div>
                                        <div className="ps-freelancer">
                                            <div className="ps-freelancer__thumbnail">
                                                <img src="assets/img/users/3.jpg" alt="" />
                                            </div>
                                            <div className="ps-freelancer__content">
                                                <figure>
                                                    <figcaption>Steve Munich</figcaption>
                                                    <p>Hanoi, Vietnam · Worked at @Dell</p><Link
                                                    className="ps-btn ps-btn--outline" href="#">Hire me</Link>
                                                </figure>
                                                <p><strong>Product Design ( Web, Mobile App) . 7 Years of Experience .
                                                    48 Number of hours per week</strong></p>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                            </div>
                                        </div>
                                        <div className="ps-freelancer">
                                            <div className="ps-freelancer__thumbnail">
                                                <img src="assets/img/users/4.jpg" alt="" />
                                            </div>
                                            <div className="ps-freelancer__content">
                                                <figure>
                                                    <figcaption>Adam Milgrom</figcaption>
                                                    <p>Hanoi, Vietnam · Worked at @Dell</p><Link
                                                    className="ps-btn ps-btn--outline" href="#">Hire me</Link>
                                                </figure>
                                                <p><strong>Product Design ( Web, Mobile App) . 7 Years of Experience .
                                                    48 Number of hours per week</strong></p>
                                                <p>MIT graduate with extensive experience in finance and technology.
                                                    Passionate about exciting consumer electronics and internet startups
                                                    around the globe</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-section__footer text-center"><Link className="ps-link--viewmore"
                                                                                       href="#"><span
                                        className="ps-icon--dots"><i></i></span> View more</Link></div>
                                </div>
                                <div className="ps-section__sidebar">
                                    <div className="widget widget_profile widget_find-employers">
                                        <h3 className="widget-title">Find Link Employers</h3>
                                        <ul className="ps-list">
                                            <li><Link href="#">Browse all</Link></li>
                                            <li><Link href="#">Browse with My skills</Link></li>
                                            <li><Link href="#">Browse with top</Link></li>
                                            <li><Link href="#">Browse Local jobs</Link></li>
                                            <li><Link href="#">Browse Categories</Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_profile widget_feature-members">
                                        <h3 className="widget-title">Featured Members</h3>

                                        <figure>
                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" href="#">
                                                    <img src="assets/img/homepage/home-2/brand/1.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" href="#"> Zebra</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" href="#">
                                                    <img src="assets/img/homepage/home-2/brand/2.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" href="#"> Moontheme Studio</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" href="#">
                                                    <img src="assets/img/homepage/home-2/brand/3.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" href="#"> La Carolina</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" href="#">
                                                    <img src="assets/img/homepage/home-2/brand/4.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" href="#"> Mberak Designs</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" href="#">
                                                    <img src="assets/img/homepage/home-2/brand/5.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" href="#"> Logo text</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" href="#">
                                                    <img src="assets/img/homepage/home-2/brand/6.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" href="#"> Invectra</Link>
                                            </div>

                                            <div className="ps-block--company-tiny">
                                                <Link className="ps-block__thumbnail" href="#">
                                                    <img src="assets/img/homepage/home-2/brand/7.jpg" alt="" />
                                                </Link>

                                                <Link className="ps-block__title" href="#"> Open Suse</Link>
                                            </div>
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

export default BrowseFreelancers;