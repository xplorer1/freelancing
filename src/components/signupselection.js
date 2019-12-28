import React from 'react';
import {Link} from "react-router-dom";

class SignUpSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <div className="ps-page ps-page--account bg--cover" id="signup-selection"
                     style={{backgroundImage: "url('assets/img/bg/account-selection.jpg')"}}>
                    <div className="ps-page__header">
                        <Link className="ps-logo" to="/">
                            Home
                        </Link>

                        <div className="ps-page__actions">
                            <Link className="ps-btn ps-btn--outline ps-btn--white" to="/loginemployee">Login</Link>
                        </div>
                    </div>

                    <div className="ps-page__content">
                        <form className="ps-form--signup-selection bg--gradient">
                            <div className="ps-form__header">
                                <h3>Sign up for free.</h3>
                                <h5>Join the million of people <br /> using Jobolt.</h5>
                                <p>I want to</p>
                            </div>
                            <div className="ps-form__content">
                                <div className="ps-radio ps-radio--circle">
                                    <input className="form-control" type="radio" id="signup-selection-1" name="signup-selection" />
                                        <label htmlFor="signup-selection-1"><span
                                            className="title">Employers Account</span>
                                            <small>Consectetur adipiscing elit. Ut accumsan quam in diam porta, quis
                                                hendrerit urna eleifend.
                                            </small>
                                        </label>
                                </div>
                                <div className="ps-radio ps-radio--circle">
                                    <input className="form-control" type="radio" id="signup-selection-2"
                                           name="signup-selection" />
                                        <label htmlFor="signup-selection-2"><span
                                            className="title">Freelancer Account</span>
                                            <small>Auis hendrerit urna eleifend. Cras eget velit non leo malesuada
                                                ullamcorper. Phasellus facilisis et dui id maximus.
                                            </small>
                                        </label>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <button className="ps-btn ps-btn--black">Next</button>
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
                <div id="back2top"><i className="pe-7s-angle-up"></i></div>
                <div className="ps-site-overlay"></div>
                <div id="loader-wrapper">
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>
                <div className="ps-search" id="site-search">
                    <Link className="ps-btn--close" to="#"></Link>
                    <div className="ps-search__content">
                        <form className="ps-form--primary-search">
                            <input className="form-control" type="text" placeholder="Search for..." />
                                <button><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default SignUpSelection;