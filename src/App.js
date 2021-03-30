import React, { Component, useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import {robots} from './robots';
import './app.css'



function App(){
	const [robots, setRobots] = useState(robots);
	const [searchfield, setSearchfield ] = setState(searchfield);
}


return (
	const filteredRobots = {robots}.filter(robots =>{
		return robotos.name.toLowerCase().includes({searchfield}.toLowerCase())
	})
)

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots:users})});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
		  <div className='tc'>
			<h1 className='f1'> RoboBuddies </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots = {filteredRobots} />
		 </div>
		)
	}
}

export default App;