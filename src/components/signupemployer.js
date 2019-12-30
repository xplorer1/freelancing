import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";
import alertify from "alertifyjs";

class SignUpEmployer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            companyname: "",
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

        if(!this.state.companyname) {
            alertify.error("Hi, please enter the name of your company.");
        }

        else if(!this.state.email) {
            alertify.error("Please enter your email address.");
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

                <div className="ps-page--signin">
                    <div className="container">
                        <form className="ps-form--signin">
                            <div className="ps-form__header">
                                <h3>Sign Up</h3>
                            </div>

                            <div className="ps-form__content">
                                <div className="form-group">
                                    <input onChange={this.handleInput} value={this.state.companyname} name="companyname" className="form-control" type="text" placeholder="Company Name" />
                                </div>

                                <div className="form-group">
                                    <input onChange={this.handleInput} value={this.state.email} name="email" className="form-control" type="text" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <input onChange={this.handleInput} value={this.state.password} name="password" className="form-control" type="text" placeholder="Password" />
                                </div>

                                <p><i className="fa fa-shield"></i> Your contact details on Jobolt are encrypted and
                                    secured
                                </p>
                                <div className="ps-checkbox ps-checkbox--circle">
                                    <input onChange={this.handleCheck} value={this.state.newsletter} className="form-control" type="checkbox" id="newsletter"
                                           name="newsletter"/>
                                    <label htmlFor="newsletter">I would like to receive weekly and monthly
                                        newsletters from Jobolt.
                                    </label>
                                </div>

                            </div>

                            <div className="ps-form__footer pt-3">
                                <button disabled={this.state.ajaxloading} onClick={this.handleSubmit} className="ps-btn ps-btn--fullwidth ps-btn--gradient">Sign Up</button>
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

    componentDidMount() {
        this.setState({ ajaxloading: true });
        alertify.set('notifier','position', 'top-right');
    }
}
export default SignUpEmployer;