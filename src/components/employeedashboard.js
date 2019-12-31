import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class EmployeeDashboard extends React.Component {
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
                                                <h3 className="widget-title">James Ighenegbu</h3>
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <div className="ps-form__footer">
                                                <Link to="/postajob" className="ps-btn ps-btn--gradient">Post A Job</Link>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="ps-form__footer">
                                                <Link to="/suggested" className="ps-btn ps-btn--gradient">Hire a freelancer</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ps-freelancer border my-5 shadow">
                                        <div className="ps-freelancer__content p-0">
                                            <figure className="border-bottom p-5 d-flex justify-content-between" style={{background: "whitesmoke"}}>
                                                <figcaption className="text-secondary"><strong>My Postings</strong></figcaption>

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

                                    <div className="ps-freelancer border my-5 shadow">
                                        <div className="ps-freelancer__content p-0">
                                            <figure className="p-5 border-bottom" style={{background: "whitesmoke"}}>
                                                <figcaption className="text-secondary"><strong>How it works.</strong></figcaption>
                                            </figure>

                                            <div className="py-3 px-5">

                                                <div className="py-4 border-bottom cp" data-toggle="collapse" data-target="#postjob">1. Post a job to get free quotes</div>
                                                
                                                <div id="postjob" className="collapse">

                                                    <p class="m-0 px-4 pt-4 pb-0">
                                                        Write a clear, detailed description of your job to share with qualified freelancers.
                                                        Start receiving proposals in less than 24 hours.
                                                    </p>
                                                </div>

                                                <div className="py-4 border-bottom cp" data-toggle="collapse" data-target="#eval">2. Evaluate freelancers and hire</div>
                                                
                                                <div id="eval" className="collapse">

                                                    <p class="m-0 px-4 pt-4 pb-0">
                                                        Review proposals or invite qualified freelancers to your project.
                        Quickly chat live or video call with favorites, and offer a contract to the best match.
                                                    </p>
                                                </div>

                                                <div className="py-4 border-bottom cp" data-toggle="collapse" data-target="#work">3. Work together</div>
                                                
                                                <div id="work" className="collapse">

                                                    <p class="m-0 px-4 pt-4 pb-0">
                                                        Use Jobolt chat to securely chat, share files, and collaborate on projects. View progress against project goals with the Work Diary tool.
                                                    </p>
                                                </div>

                                                <div className="py-4 border-bottom cp" data-toggle="collapse" data-target="#pay">4. Pay and invoice through Jobolt</div>
                                                
                                                <div id="pay" className="collapse">

                                                    <p class="m-0 px-4 pt-4 pb-0">
                                                        Get invoices and make payments after reviewing time billed or approving milestones.
                        With Jobolt Payment Protection, only pay for work you authorize.
                                                    </p>
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
export default EmployeeDashboard;