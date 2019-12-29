import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class Login extends React.Component {
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
                                <h3>Sign In</h3>
                            </div>
                            <div className="ps-form__content">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder=" Username or Email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Password" />
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
                                <button className="ps-btn ps-btn--fullwidth ps-btn--gradient">Login</button>
                                <p>Don't have an account?<Link to="/signupemployee"> Sign up now!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>

                <Utilities.AuthFooter />
            </section>
        )
    }
}
export default Login;