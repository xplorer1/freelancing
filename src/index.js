import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/about";
import {Home} from "./components/home";
import Services from "./components/services";
import ContactUs from "./components/contactus";
import BrowseJobs from "./components/browsejobs";
import BrowseFreelancers from "./components/browsefreelancers";

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
			</Switch>
        </Router>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);