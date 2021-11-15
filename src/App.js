import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Employee from './pages/Employee'
import About from './pages/About'
import Home from './pages/Home'
import AddEmployee from './components/Employee/AddEmployee'
import EditEmployee from './components/Employee/EditEmployee'
import Tracker from './pages/Tracker'
import Country from './pages/Country'
import SingleCountry from './components/Country/SingleCountry'
import Book from './pages/Book'
import EditBook from './components/Books/EditBook'
import AddBook from './components/Books/AddBook'
import Pagination from './pages/Pagination'

function App() {
  return (
    <div className="App">
		<Router>
			<Nav />
			<div className="pb-8">
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/employee" exact>
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
					<Route path="/tracker">
						<Tracker />
					</Route>
					<Route path="/country" exact>
						<Country />
					</Route>
					<Route path="/country/:id">
						<SingleCountry />
					</Route>
					<Route path="/books" exact>
						<Book />
					</Route>
					<Route path="/books/:id">
						<EditBook />
					</Route>
					<Route path="/add-book">
						<AddBook />
					</Route>
					<Route path="/pagination">
						<Pagination />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
    </div>
  );
}

export default App;
