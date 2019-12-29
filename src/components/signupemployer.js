import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class SignUpEmployer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.AuthHeader />

                <div className="ps-page--signin">
                    <div className="container">
                        <form className="ps-form--signin">
                            <div className="ps-form__header">
                                <h3>Sign Up</h3>
                            </div>

                            <div className="ps-form__content">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Company Name" />
                                </div>

                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Password" />
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

                            <div className="ps-form__footer pt-3">
                                <button className="ps-btn ps-btn--fullwidth ps-btn--gradient">Sign Up</button>
                                <p>By registering you confirm that you accept the <br /><Link to="#"> Terms and
                                    Conditions</Link> and<Link to="#"> Privacy Policy</Link></p>
                            </div>
                            <p className="text-center">Already have an account?<Link to="/login"> Sign In now!</Link></p>

                        </form>
                    </div>
                </div>

                <Utilities.AuthFooter />
            </section>
        )
    }
}
export default SignUpEmployer;