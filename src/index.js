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
import Login from "./components/login";
import SignUpSelection from "./components/signupselection";
import SignUpEmployee from "./components/signupemployee";
import SignUpEmployer from "./components/signupemployer";
import PostJob from "./components/postajob";
import EmployerDashboard from "./components/employerdashboard";
import EmployeeDashboard from "./components/employeedashboard";

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
				<Route path="/login" component = {Login} />
				<Route path="/signupselection" component = {SignUpSelection} />
				<Route path="/signupemployee" component = {SignUpEmployee} />
				<Route path="/signupemployer" component = {SignUpEmployer} />
				<Route path="/postajob" component = {PostJob} />
				<Route path="/employerdashboard" component = {EmployerDashboard} />
				<Route path="/employeedashboard" component = {EmployeeDashboard} />
			</Switch>
        </Router>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);