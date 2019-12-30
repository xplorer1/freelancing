import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class EmployerDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.InnerPagesHeader />

                <div className="ps-page">
                    <div className="ps-section--sidebar ps-layout">
                        <div className="container">
                            <div className="ps-section__container">
                                <div className="ps-section__content">


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

                <Utilities.AuthFooter />

            </section>
        )
    }
}
export default EmployerDashboard;