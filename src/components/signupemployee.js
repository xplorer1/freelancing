import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";
import alertify from "alertifyjs";

class SignUpEmployee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            newsletter: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleCheck = (e) => {

        this.setState({
            [e.target.name]: e.target.checked
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.firstname) {
            alertify.error("Hi, please enter first name.");
        }
        else if(!this.state.lastname) {
            alertify.error("Hi, please enter your last name.");
        }
        else if(!this.state.email) {
            alertify.error("Hi, please enter your email address.");
        }
        else if(!Utilities.validmail(this.state.email)) {
            alertify.error("It appears your email address is invalid. Please check and try again.");
        }
        else if(!this.state.password) {
            alertify.error("Your password is required.");
        }
        else if(this.state.password.toString().length < 8) {
            alertify.error("Your password must exceed 8 characters.");
        }
        else {
            this.setState({ ajaxloading: true });
            alertify.success("All is well now.");
        }
    };

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
                                            <input onChange={this.handleInput} value={this.state.firstname} name="firstname" className="form-control" type="text" placeholder="Enter your first name" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.handleInput} value={this.state.lastname} name="lastname" className="form-control" type="text" placeholder="Enter your last name" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.handleInput} value={this.state.email} name="email" className="form-control" type="text" placeholder="Enter your email address" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.handleInput} value={this.state.password} name="password" className="form-control" type="text" placeholder="Enter your password" />
                                        </div>

                                        <p><i className="fa fa-shield"></i> Your contact details on Jobolt are encrypted and
                                            secured
                                        </p>
                                        <div className="ps-checkbox ps-checkbox--circle">
                                            <input onChange={this.handleCheck} value={this.state.newsletter} className="form-control" type="checkbox" id="newsletter" name="newsletter" />
                                            <label htmlFor="newsletter">I would like to receive weekly and monthly newsletters from Jobolt.
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ps-form__footer">
                                        <button disabled={this.state.ajaxloading} onClick={this.handleSubmit} className="ps-btn ps-btn--fullwidth ps-btn--gradient">Sign Up</button>
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

    componentDidMount() {
        alertify.set('notifier','position', 'top-right');
    }
}
export default SignUpEmployee;