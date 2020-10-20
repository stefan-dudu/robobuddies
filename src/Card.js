import React from 'react';

const Card = ({id, name, email}) => {
	
	return(
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img  alt = 'alt text' src= {`https://robohash.org/${id}?200x200`} />
			<div> 
				<h2> Name: {name} </h2>
				<p> {email} </p>
				<p> ID nr.{id} </p>
			</div>		
		</div>
		)
	}

 
export default Card;
