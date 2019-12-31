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
                                    <div className="row">

                                        <div className="col-sm-5 owname">
                                            <div className="ps-form__footer">
                                                <h3 className="widget-title">Stark Corps</h3>
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <div className="ps-form__footer">
                                                <button onClick={this.handleSubmit} className="ps-btn ps-btn--gradient">Post A Job</button>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="ps-form__footer">
                                                <button onClick={this.handleSubmit} className="ps-btn ps-btn--gradient">Hire a freelancer</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ps-freelancer border my-5 shadow">
                                        <div className="ps-freelancer__content p-0">
                                            <figure className="p-5 d-flex justify-content-between" style={{background: "whitesmoke"}}>
                                                <figcaption className="text-secondary">My Postings</figcaption>

                                                <figcaption className="" href="#">All Postings</figcaption>
                                            </figure>

                                            <div className="py-3 px-5">

                                                <p className=""><strong>Desktop Software development </strong></p>

                                                <p className="">Hourly</p>

                                                <div className="ps-post__footer d-flex justify-content-between">
                                                    <div className="ps-post__left">
                                                        <p><span className="text-info">Public - Created 2 Hours ago </span>
                                                        </p>
                                                    </div>

                                                    <div className="ps-post__right">
                                                        <ul className="ps-list--social simple">
                                                            <li className="px-3 text-muted">Pending</li>
                                                            <li className="px-3 text-primary">4 Views</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="ps-section__sidebar">
                                    <aside className="widget widget_profile widget_progress">
                                        <div className="ps-block--user">
                                            <div className="ps-block__thumbnail">
                                                <img src="assets/img/users/1.jpg" alt="" />
                                            </div>
                                            <div className="ps-block__content">
                                                <p><strong>Wellcome back</strong></p>
                                                <h4>Stark Corps</h4><Link to="#">View your profile<i
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

                <Utilities.InnerPagesFooter />

            </section>
        )
    }
}
export default EmployerDashboard;