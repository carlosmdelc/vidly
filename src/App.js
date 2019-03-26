import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';

class App extends Component {
	render() {
		return (
			<main className="container">
				<img src={logo} className="App-logo imageCenter" alt="logo" />

				<Movies />
			</main>
		);
	}
}

export default App;
