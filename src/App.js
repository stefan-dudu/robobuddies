import React, {useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import {robots} from './robots';
import './app.css'



function App1(){
	const [robots, setRobots] = useState(robots);
	const [searchfield, setSearchfield ] = useState(searchfield);
}


return (
	const filteredRobots = {robots}.filter(robots =>{
		return robotos.name.toLowerCase().includes({searchfield}.toLowerCase())
	})
)

// class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			robots: robots,
// 			searchfield: ''
// 		}
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => response.json())
// 		.then(users => {this.setState({robots:users})});
// 	}
function App(){

	const [robots, setRobots] = useState(robots);
	const [searchfield, setSearchfield ] = useState('');


	const  onSearchChange = (event) => {
		setSearchfield(event.target.value)
	} 
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
		  <div className='tc'>
			<h1 className='f1'> RoboBuddies </h1>
			<SearchBox searchChange={onSearchChange}/>
			<CardList robots = {filteredRobots} />
		 </div>
		)
}


export default App;