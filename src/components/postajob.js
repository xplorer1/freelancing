import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class PostJob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.AuthHeader />

                <div className="ps-page">
                    <div className="ps-section--sidebar ps-layout">
                        <div className="container">
                            <div className="ps-section__container">
                                <div className="ps-section__content">
                                    <form className="ps-form--post-Link-job">
                                        <h3>Post a Job to Jobolt</h3>
                                        <div className="form-group">
                                            <label>Job Title</label>
                                            <input className="form-control rounded" type="text"
                                                   placeholder="e.g Senior Product Designer" />
                                        </div>
                                        <div className="form-group">
                                            <label>Descrition</label>
                                            <textarea className="form-control rounded" rows="6"
                                                      placeholder="Enter your description here"></textarea>
                                            <small><i>4700 characters remaining</i></small>
                                        </div>
                                        <div className="ps-form__rules">
                                            <div className="form-group">
                                                <label>Primary Role</label>



                                                <div className="ps-form__rule row">
                                                    <div className="col-sm">
                                                        <select className="ps-select">
                                                            <option value="1">Select Primary Role</option>
                                                            <option value="1">Role 1</option>
                                                            <option value="1">Role 2</option>
                                                            <option value="1">Role 3</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-sm ps-form__rule-action"><Link to="#"><i
                                                        className="ps-icon--plus"></i><span style={{lineHeight: "2.2"}}>  Add Other Roles</span></Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Skills Required</label>
                                            <select className="ps-select">
                                                <option value="1">Select your skills</option>
                                                <option value="1">Skill 1</option>
                                                <option value="1">Skill 2</option>
                                                <option value="1">Skill 3</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                                <div className="form-group">
                                                    <label>Type of working time</label>
                                                    <select className="ps-select">
                                                        <option value="1">Fulltime</option>
                                                        <option value="1">Partime</option>
                                                        <option value="1">Remote</option>
                                                        <option value="1">Onsite</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                                                <div className="form-group form-group--range">
                                                    <label>Salary Range</label>
                                                    <div className="form-group__content row">

                                                        <div className="col-sm-9 row ps-form__range">
                                                            <figure className="col-sm">
                                                                <input className="form-control rounded h-100" type="text"
                                                                       placeholder="$" />
                                                            </figure>

                                                            <span style={{fontSize: "19pt"}}> - </span>

                                                            <figure className="col-sm">
                                                                <input className="form-control rounded h-100" type="text"
                                                                       placeholder="$" />
                                                            </figure>

                                                        </div>

                                                        <div className="col-sm-3 form-group__currency h-100">
                                                            <select className="ps-select">
                                                                <option value="1">USD</option>
                                                                <option value="1">VND</option>
                                                                <option value="1">SGD</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Skills Required</label>
                                            <input className="form-control rounded" type="text" placeholder="e.g Hanoi" />
                                        </div>
                                        <div className="ps-form__submit">
                                            <button className="ps-btn ps-btn--gradient" type="button">Post Job Now
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="ps-section__sidebar">
                                    <aside className="widget widget_profile widget_progress">
                                        <div className="ps-block--user">
                                            <div className="ps-block__thumbnail">
                                                <img src="assets/img/users/1.jpg" alt="" />
                                            </div>
                                            <div className="ps-block__content mt-4">
                                                <h4>Starks Corps</h4><Link to="#">View your profile<i
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
export default PostJob;