import React from 'react';
import {Link} from "react-router-dom";
import alertify from "alertifyjs";

class SignUpSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedvalue: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            selectedvalue: e.target.value
        });
    };

    handleSignUpSelection = (e) => {
        e.preventDefault();
        let destination = this.state.selectedvalue;

        if(destination) {
            switch (destination) {
                case "signupemployer":
                    this.props.history.push('/signupemployer');
                    break;
                case "signupemployee":
                    this.props.history.push('/signupemployee');
                    break;
                default:
                    this.props.history.push('/signupemployee');
                    break;
            }
        }

        else {
            alertify.error("Please select an account type to proceed.")
        }
    };

    render() {
        return (
            <section>
                <div className="ps-page ps-page--account bg--cover" id="signup-selection"
                     style={{backgroundImage: "url('assets/img/bg/account-selection.jpg')"}}>
                    <div className="ps-page__header">
                        <Link className="ps-logo hm" to="/">
                            Home
                        </Link>

                        <div className="ps-page__actions">
                            <Link className="ps-btn ps-btn--outline ps-btn--white" to="/login">Login</Link>
                        </div>
                    </div>

                    <div className="ps-page__content">
                        <form className="ps-form--signup-selection bg--gradient">
                            <div className="ps-form__header">
                                <h3>Sign up for free.</h3>
                                <h5>Join the millions of people <br /> using Jobolt.</h5>
                                <p>I want to</p>
                            </div>

                            <div className="ps-form__content">
                                <div className="ps-radio ps-radio--circle">
                                    <input className="form-control" type="radio"
                                           value="signupemployer"
                                           onChange={this.handleInput}
                                           checked={this.state.selectedvalue === "signupemployer"}
                                           id="signup-selection-1"
                                           name="signupemployer" />
                                    <label htmlFor="signup-selection-1"><span
                                        className="title">Employers Account</span>
                                    </label>
                                </div>

                                <div className="ps-radio ps-radio--circle">
                                    <input className="form-control" type="radio"
                                           value="signupemployee"
                                           onChange={this.handleInput}
                                           checked={this.state.selectedvalue === "signupemployee"}
                                           id="signup-selection-2"
                                           name="signupemployee" />
                                    <label htmlFor="signup-selection-2"><span
                                        className="title">Freelancer Account</span>
                                    </label>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <button className="ps-btn ps-btn--black" onClick={this.handleSignUpSelection}>Next</button>
                            </div>
                        </form>
                    </div>
                    <div className="ps-page__footer">
                        <ul className="ps-page__links">
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms and Conditions</Link></li>
                            <li><Link to="#">Help</Link></li>
                            <li><Link to="#">Jobolt Licenses</Link></li>
                            <li><Link to="#">Partners</Link></li>
                        </ul>
                        <p>Jobolt © 2017 Copyright by Jobolt Co, JP. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        )
    }

    componentDidMount() {
        this.setState({ ajaxloading: true });
        alertify.set('notifier','position', 'top-right');
    }
}
export default SignUpSelection;