import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class BrowseJobs extends React.Component {
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
                                <p>BROWSE <br/> Jobs</p>
                            </div>
                            <div className="ps-section__content">
                                <form className="ps-form--home-find-job ps-form--top"
                                      action="http://nouthemes.net/html/athena/index.html" method="get">
                                    <h1>Browse jobs on Jobolt</h1>
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
                                        <div className="ps-job">
                                            <div className="ps-job__thumbnail"><Link to="#"><img
                                                src="assets/img/job/trending-job/1.jpg" alt="" /></Link></div>
                                            <div className="ps-job__content"><Link className="ps-job__title" to="#"> AI
                                                Technology That Takes Notes During Your Conversations</Link>
                                                <p>David churst</p>
                                                <p><strong>Frontend Software Engineer,Graphic Design</strong> $85k -
                                                    $140k · Full Time</p>
                                                <p><i className="fa fa-map-marker"></i> Hanoi, VietNam</p>
                                                <div className="ps-job__desc table-responsive">
                                                    <table className="table ps-table--job-desc">
                                                        <tbody>
                                                        <tr>
                                                            <td>Jobs</td>
                                                            <td>
                                                                <p className="ps-highlight">UX/UI Designer</p>
                                                                <p>Full Time · UI/UX Designer · Website Design</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td>
                                                                <p><strong>Rapidly moving ahead, we leveraged our
                                                                    technology to enable other publishers to distribute
                                                                    their content digitally, with our mobile app as Link
                                                                    service platform, TruNext for iOS, Androind and
                                                                    Windows. We then started Link life, leadership and
                                                                    cultural destination website, with carefully curated
                                                                    and original content. An overnight hit, it attracted
                                                                    6 million hits in less than 1.5 months. All done
                                                                    faster than any other major internet company, with
                                                                    zero marketing spends. Plash Digital Labs is now
                                                                    home to newly re-branded entities like our creative
                                                                    content site called Limitless, our mobile technology
                                                                    division called Trunext and our news aggregation app
                                                                    called Daily Cup.</strong></p><Link
                                                                className="ps-btn ps-btn--sm" to="#">Apply Now</Link><Link
                                                                className="cancel" to="#">No, Skip</Link>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-job">
                                            <div className="ps-job__thumbnail">
                                                <Link to="#">
                                                    <img src="assets/img/job/trending-job/1.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="ps-job__content"><Link className="ps-job__title" to="#"> AI
                                                Technology That Takes Notes During Your Conversations</Link>
                                                <p>David churst</p>
                                                <p><strong>Frontend Software Engineer,Graphic Design</strong> $85k -
                                                    $140k · Full Time</p>
                                                <p><i className="fa fa-map-marker"></i> Hanoi, VietNam</p>
                                                <div className="ps-job__desc table-responsive">
                                                    <table className="table ps-table--job-desc">
                                                        <tbody>
                                                        <tr>
                                                            <td>Jobs</td>
                                                            <td>
                                                                <p className="ps-highlight">UX/UI Designer</p>
                                                                <p>Full Time · UI/UX Designer · Website Design</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td>
                                                                <p><strong>Rapidly moving ahead, we leveraged our
                                                                    technology to enable other publishers to distribute
                                                                    their content digitally, with our mobile app as Link
                                                                    service platform, TruNext for iOS, Androind and
                                                                    Windows. We then started Link life, leadership and
                                                                    cultural destination website, with carefully curated
                                                                    and original content. An overnight hit, it attracted
                                                                    6 million hits in less than 1.5 months. All done
                                                                    faster than any other major internet company, with
                                                                    zero marketing spends. Plash Digital Labs is now
                                                                    home to newly re-branded entities like our creative
                                                                    content site called Limitless, our mobile technology
                                                                    division called Trunext and our news aggregation app
                                                                    called Daily Cup.</strong></p><Link
                                                                className="ps-btn ps-btn--sm" to="#">Apply Now</Link><Link
                                                                className="cancel" to="#">No, Skip</Link>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-job">
                                            <div className="ps-job__thumbnail">
                                                <Link to="#">
                                                    <img src="assets/img/job/trending-job/2.jpg" alt="" />
                                                </Link>
                                            </div>

                                            <div className="ps-job__content">
                                                <Link className="ps-job__title" to="#"> Design identity for Townsville
                                                    Affordable Bathroom Revovations
                                                </Link>
                                                <p>In Vectra company</p>
                                                <p><strong>Graphic Design, Illustrator, Logo Design</strong> $85k -
                                                    $140k · Full Time</p>
                                                <p><i className="fa fa-map-marker"></i> Hanoi, VietNam</p>
                                                <div className="ps-job__desc table-responsive">
                                                    <table className="table ps-table--job-desc">
                                                        <tbody>
                                                        <tr>
                                                            <td>Jobs</td>
                                                            <td>
                                                                <p className="ps-highlight">UX/UI Designer</p>
                                                                <p>Full Time · UI/UX Designer · Website Design</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td>
                                                                <p><strong>Rapidly moving ahead, we leveraged our
                                                                    technology to enable other publishers to distribute
                                                                    their content digitally, with our mobile app as Link
                                                                    service platform, TruNext for iOS, Androind and
                                                                    Windows. We then started Link life, leadership and
                                                                    cultural destination website, with carefully curated
                                                                    and original content. An overnight hit, it attracted
                                                                    6 million hits in less than 1.5 months. All done
                                                                    faster than any other major internet company, with
                                                                    zero marketing spends. Plash Digital Labs is now
                                                                    home to newly re-branded entities like our creative
                                                                    content site called Limitless, our mobile technology
                                                                    division called Trunext and our news aggregation app
                                                                    called Daily Cup.</strong></p><Link
                                                                className="ps-btn ps-btn--sm" to="#">Apply Now</Link><Link
                                                                className="cancel" to="#">No, Skip</Link>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-job">
                                            <div className="ps-job__thumbnail">
                                                <Link to="#">
                                                    <img src="assets/img/job/trending-job/3.jpg" alt="" />
                                                </Link>
                                            </div>

                                            <div className="ps-job__content">
                                                <Link className="ps-job__title" to="#">
                                                    Design Link professional magazine
                                                </Link>
                                                <p>La Carolia</p>
                                                <p><strong>Graphic Design, Illustrator, Logo Design</strong> $85k -
                                                    $140k · Full Time</p>
                                                <p><i className="fa fa-map-marker"></i> Hanoi, VietNam</p>
                                                <div className="ps-job__desc table-responsive">
                                                    <table className="table ps-table--job-desc">
                                                        <tbody>
                                                        <tr>
                                                            <td>Jobs</td>
                                                            <td>
                                                                <p className="ps-highlight">UX/UI Designer</p>
                                                                <p>Full Time · UI/UX Designer · Website Design</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td>
                                                                <p><strong>Rapidly moving ahead, we leveraged our
                                                                    technology to enable other publishers to distribute
                                                                    their content digitally, with our mobile app as Link
                                                                    service platform, TruNext for iOS, Androind and
                                                                    Windows. We then started Link life, leadership and
                                                                    cultural destination website, with carefully curated
                                                                    and original content. An overnight hit, it attracted
                                                                    6 million hits in less than 1.5 months. All done
                                                                    faster than any other major internet company, with
                                                                    zero marketing spends. Plash Digital Labs is now
                                                                    home to newly re-branded entities like our creative
                                                                    content site called Limitless, our mobile technology
                                                                    division called Trunext and our news aggregation app
                                                                    called Daily Cup.</strong></p><Link
                                                                className="ps-btn ps-btn--sm" to="#">Apply Now</Link><Link
                                                                className="cancel" to="#">No, Skip</Link>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-job">
                                            <div className="ps-job__thumbnail">
                                                <Link to="#">
                                                    <img src="assets/img/job/trending-job/4.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="ps-job__content"><Link className="ps-job__title"
                                                                                to="#"> We’re building Link knowledge
                                                universe through social sharing and collaborative learning</Link>
                                                <p>Open Suse company</p>
                                                <p><strong>UX/UI Designer</strong> $85k - $140k · Full Time</p>
                                                <p><i className="fa fa-map-marker"></i> Hanoi, VietNam</p>
                                                <div className="ps-job__desc table-responsive">
                                                    <table className="table ps-table--job-desc">
                                                        <tbody>
                                                        <tr>
                                                            <td>Jobs</td>
                                                            <td>
                                                                <p className="ps-highlight">UX/UI Designer</p>
                                                                <p>Full Time · UI/UX Designer · Website Design</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td>
                                                                <p><strong>Rapidly moving ahead, we leveraged our
                                                                    technology to enable other publishers to distribute
                                                                    their content digitally, with our mobile app as Link
                                                                    service platform, TruNext for iOS, Androind and
                                                                    Windows. We then started Link life, leadership and
                                                                    cultural destination website, with carefully curated
                                                                    and original content. An overnight hit, it attracted
                                                                    6 million hits in less than 1.5 months. All done
                                                                    faster than any other major internet company, with
                                                                    zero marketing spends. Plash Digital Labs is now
                                                                    home to newly re-branded entities like our creative
                                                                    content site called Limitless, our mobile technology
                                                                    division called Trunext and our news aggregation app
                                                                    called Daily Cup.</strong></p><Link
                                                                className="ps-btn ps-btn--sm" to="#">Apply Now</Link><Link
                                                                className="cancel" to="#">No, Skip</Link>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-job">
                                            <div className="ps-job__thumbnail">
                                                <Link to="#">
                                                    <img src="assets/img/job/trending-job/5.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="ps-job__content"><Link className="ps-job__title"
                                                                                to="#"> SimpleReach is the standard in
                                                content measurement and distribution.</Link>
                                                <p>David churst</p>
                                                <p><strong>Senior Product Designer</strong> $85k - $140k · Full Time</p>
                                                <p><i className="fa fa-map-marker"></i> Hanoi, VietNam</p>
                                                <div className="ps-job__desc table-responsive">
                                                    <table className="table ps-table--job-desc">
                                                        <tbody>
                                                        <tr>
                                                            <td>Jobs</td>
                                                            <td>
                                                                <p className="ps-highlight">UX/UI Designer</p>
                                                                <p>Full Time · UI/UX Designer · Website Design</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td>
                                                                <p><strong>Rapidly moving ahead, we leveraged our
                                                                    technology to enable other publishers to distribute
                                                                    their content digitally, with our mobile app as Link
                                                                    service platform, TruNext for iOS, Androind and
                                                                    Windows. We then started Link life, leadership and
                                                                    cultural destination website, with carefully curated
                                                                    and original content. An overnight hit, it attracted
                                                                    6 million hits in less than 1.5 months. All done
                                                                    faster than any other major internet company, with
                                                                    zero marketing spends. Plash Digital Labs is now
                                                                    home to newly re-branded entities like our creative
                                                                    content site called Limitless, our mobile technology
                                                                    division called Trunext and our news aggregation app
                                                                    called Daily Cup.</strong></p><Link
                                                                className="ps-btn ps-btn--sm" to="#">Apply Now</Link><Link
                                                                className="cancel" to="#">No, Skip</Link>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-job">
                                            <div className="ps-job__thumbnail"><Link to="#"><img
                                                src="assets/img/job/trending-job/6.jpg" alt="" /></Link></div>
                                            <div className="ps-job__content"><Link className="ps-job__title" to="#">AI
                                                Technology That Takes Notes During Your Conversations</Link>
                                                <p>Jont kook</p>
                                                <p><strong>Frontend Software Engineer,Graphic Design</strong> $85k -
                                                    $140k · Full Time</p>
                                                <p><i className="fa fa-map-marker"></i> Hanoi, VietNam</p>
                                                <div className="ps-job__desc table-responsive">
                                                    <table className="table ps-table--job-desc">
                                                        <tbody>
                                                        <tr>
                                                            <td>Jobs</td>
                                                            <td>
                                                                <p className="ps-highlight">UX/UI Designer</p>
                                                                <p>Full Time · UI/UX Designer · Website Design</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Description</td>
                                                            <td>
                                                                <p><strong>Rapidly moving ahead, we leveraged our
                                                                    technology to enable other publishers to distribute
                                                                    their content digitally, with our mobile app as Link
                                                                    service platform, TruNext for iOS, Androind and
                                                                    Windows. We then started Link life, leadership and
                                                                    cultural destination website, with carefully curated
                                                                    and original content. An overnight hit, it attracted
                                                                    6 million hits in less than 1.5 months. All done
                                                                    faster than any other major internet company, with
                                                                    zero marketing spends. Plash Digital Labs is now
                                                                    home to newly re-branded entities like our creative
                                                                    content site called Limitless, our mobile technology
                                                                    division called Trunext and our news aggregation app
                                                                    called Daily Cup.</strong></p><Link
                                                                className="ps-btn ps-btn--sm" to="#">Apply Now</Link><Link
                                                                className="cancel" to="#">No, Skip</Link>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-section__footer text-center"><Link className="ps-link--viewmore"
                                                                                       to="#"><span
                                        className="ps-icon--dots"><i></i></span> View more</Link></div>
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
                                                    <img
                                                src="assets/img/homepage/home-2/brand/1.jpg" alt="" /></Link><Link
                                                className="ps-block__title" to="#"> Zebra</Link></div>
                                            <div className="ps-block--company-tiny"><Link className="ps-block__thumbnail"
                                                                                       to="#"><img
                                                src="assets/img/homepage/home-2/brand/2.jpg" alt="" /></Link><Link
                                                className="ps-block__title" to="#"> Moontheme Studio</Link></div>
                                            <div className="ps-block--company-tiny"><Link className="ps-block__thumbnail"
                                                                                       to="#"><img
                                                src="assets/img/homepage/home-2/brand/3.jpg" alt="" /></Link><Link
                                                className="ps-block__title" to="#"> La Carolina</Link></div>
                                            <div className="ps-block--company-tiny"><Link className="ps-block__thumbnail"
                                                                                       to="#"><img
                                                src="assets/img/homepage/home-2/brand/4.jpg" alt="" /></Link><Link
                                                className="ps-block__title" to="#"> Mberak Designs</Link></div>
                                            <div className="ps-block--company-tiny"><Link className="ps-block__thumbnail"
                                                                                       to="#"><img
                                                src="assets/img/homepage/home-2/brand/5.jpg" alt="" /></Link><Link
                                                className="ps-block__title" to="#"> Logo text</Link></div>
                                            <div className="ps-block--company-tiny"><Link className="ps-block__thumbnail"
                                                                                       to="#"><img
                                                src="assets/img/homepage/home-2/brand/6.jpg" alt="" /></Link><Link
                                                className="ps-block__title" to="#"> Invectra</Link></div>
                                            <div className="ps-block--company-tiny"><Link className="ps-block__thumbnail"
                                                                                       to="#"><img
                                                src="assets/img/homepage/home-2/brand/7.jpg" alt="" /></Link><Link
                                                className="ps-block__title" to="#"> Open Suse</Link></div>
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

export default BrowseJobs;