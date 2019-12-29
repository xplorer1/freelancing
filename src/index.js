import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/about";
import {Home} from "./components/home";
import Services from "./components/services";
import ContactUs from "./components/contactus";
import BrowseJobs from "./components/browsejobs";
import BrowseFreelancers from "./components/browsefreelancers";
import BrowseEmployers from "./components/browseemployers";
import LoginEmployee from "./components/loginemployee";
import SignUpSelection from "./components/signupselection";
import SignUpEmployee from "./components/signupemployee";
import PostJob from "./components/postajob";

function App() {
    return (
        <Router>
            <Switch>
	    		<Route exact path='/' component={Home} />
				<Route path="/about" component = {About} />
				<Route path="/services" component = {Services} />
				<Route path="/contactus" component = {ContactUs} />
				<Route path="/browsejobs" component = {BrowseJobs} />
				<Route path="/browsefreelancers" component = {BrowseFreelancers} />
				<Route path="/browseemployers" component = {BrowseEmployers} />
				<Route path="/loginemployee" component = {LoginEmployee} />
				<Route path="/signupselection" component = {SignUpSelection} />
				<Route path="/signupemployee" component = {SignUpEmployee} />
				<Route path="/postjob" component = {PostJob} />
			</Switch>
        </Router>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);