import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class SignUpEmployee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.AuthHeader />

                <div className="ps-page--signup" id="signup-freelancer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-page__left">
                                    <img src="assets/img/pages/account/signup-freelancer.png" alt="" />
                                    <p>Already user?<Link to="/login"> Sign in</Link></p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <form className="ps-form--signup-freelancer" >
                                    <div className="ps-form__header">
                                        <h3>Sign up for free.</h3>

                                    </div>
                                    <div className="ps-form__content">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Enter your first name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Enter your last name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Enter your email address" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Enter your password" />
                                        </div>

                                        <p><i className="fa fa-shield"></i> Your contact details on Jobolt are encrypted and
                                            secured
                                        </p>
                                        <div className="ps-checkbox ps-checkbox--circle">
                                            <input className="form-control" type="checkbox" id="newsletter"
                                                   name="newsletters"/>
                                            <label htmlFor="newsletter">I would like to receive weekly and monthly
                                                newsletters from Jobolt.
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ps-form__footer">
                                        <button className="ps-btn ps-btn--fullwidth ps-btn--gradient">Sign Up</button>
                                        <p>By registering you confirm that you accept the <br /><Link to="#"> Terms and
                                            Conditions</Link> and<Link to="#"> Privacy Policy</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Utilities.AuthFooter />
            </section>
        )
    }
}
export default SignUpEmployee;