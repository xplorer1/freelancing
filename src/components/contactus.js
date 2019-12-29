import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <section>
                <Utilities.GeneralHeader/>

                <div className="ps-page">
                    <div className="ps-contact-intro bg--cover" style={{backgroundImage: "url('assets/img/bg/pages/contact.jpg')"}} >
                        <div className="container">
                            <div className="ps-section__header">
                                <p>THE BEST <br/> FREELANCER & <br/> NETWORK</p>
                            </div>
                            <div className="ps-section__content">
                                <h3>Contact Jobolt</h3>
                                <p>Where the world meets startups. Millions of small businesses use Freelancer to turn
                                    their ideas into reality</p>
                            </div>
                        </div>
                    </div>
                    <div className="ps-about-business ps-contact-us">
                        <div className="container">
                            <figure>
                                <figcaption>
                                    <small>CONTACT US</small>
                                    Jobolt introduction
                                </figcaption>
                                <div className="ps-contact__info">
                                    <p>Browse our directory of service providers, or <Link to="#">post a request </Link> and
                                        have providers respond to you directly. If you'd like to offer your own
                                        services, <Link to="#">sign up today.</Link></p>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                            <div className="ps-block--icon-2"><i className="athena-phone"></i>
                                                <h5>Phone</h5>
                                                <p>(+032) 3456 7890 <br/> (+032) 3427 7670</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                            <div className="ps-block--icon-2"><i className="athena-pin"></i>
                                                <h5>Address</h5>
                                                <p>Spring Store London Oxford Street, 012 United Kingdom</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                                            <div className="ps-block--icon-2"><i className="athena-mail"></i>
                                                <h5>Address</h5>
                                                <p>Spring Store London Oxford Street, 012 United Kingdom</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <figure>
                                <figcaption>
                                    <small>SEND US A MESSAGE</small>
                                    Get in touch with us
                                </figcaption>
                                <form className="ps-form--contact" >
                                    <p>Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit.</p>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                                            <div className="form-group">
                                                <input className="form-control underline" type="text" placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                                            <div className="form-group">
                                                <input className="form-control underline" type="text" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 " >
                                            <div className="form-group">
                                                <input className="form-control underline" type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 " >
                                            <div className="form-group">
                                                <textarea className="form-control underline" rows="6" placeholder="Your message here"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-form__submit">
                                        <button className="ps-btn">Send</button>
                                    </div>
                                </form>
                            </figure>
                        </div>
                    </div>
                </div>

                <Utilities.Footer/>
            </section>
        )
    }
}

export default ContactUs;