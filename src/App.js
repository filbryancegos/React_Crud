import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams, Redirect } from "react-router-dom";
import Nav from './components/Nav'
import Employee from './pages/Employee'
import About from './pages/About'
import Home from './pages/Home'
import AddEmployee from './components/Employee/AddEmployee'
import EditEmployee from './components/Employee/EditEmployee'
function App() {
  return (
    <div className="App">
		<Router>
			<Nav />
			<div className="container m-auto py-4">
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route exact path="/employee">
						<Employee />
					</Route>
					<Route path="/employee/:id">
						<EditEmployee />
					</Route>
					<Route path="/add-employee">
						<AddEmployee />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</div>
		</Router>
    </div>
  );
}

export default App;
