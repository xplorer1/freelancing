import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";
import alertify from "alertifyjs";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            ajaxloading: false
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.email) {
            alertify.error("Hi, please enter your email address.");
        }
        else if(!this.state.password) {
            alertify.error("Your password is required.");
        }
        else {
            this.setState({ ajaxloading: true });
            this.props.history.push('/employerdashboard');
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
                                <h3>Sign In</h3>
                            </div>
                            <div className="ps-form__content">
                                <div className="form-group">
                                    <input name="email" onChange={this.handleInput} value={this.state.email} className="form-control" type="text" placeholder=" Email address" />
                                </div>
                                <div className="form-group">
                                    <input name="password" onChange={this.handleInput} value={this.state.password} className="form-control" type="text" placeholder="Password" />
                                </div>
                            </div>
                            <div className="ps-form__actions">
                                <div className="ps-checkbox ps-checkbox--circle">
                                    <input className="form-control" type="checkbox" id="newsletter" name="newsletters" />
                                    <label htmlFor="newsletter">Remember me</label>
                                </div>
                                <Link to="#">Forgot password</Link>
                            </div>
                            <div className="ps-form__footer">
                                <button disabled={this.state.ajaxloading} onClick={this.handleSubmit} className="ps-btn ps-btn--fullwidth ps-btn--gradient">Login</button>
                                {
                                    !this.state.ajaxloading ? Utilities.ajaxloader() : <div></div>
                                }
                                <p>Don't have an account?<Link to="/signupselection"> Sign up now!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>

                <Utilities.AuthFooter />
            </section>
        )
    }

    componentDidMount() {
        console.log("state: ", this.state);
        alertify.set('notifier','position', 'top-right');
    }
}
export default Login;