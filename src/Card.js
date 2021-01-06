import React from 'react';

const Card = ({id, name, email}) => {
	
	return(
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 size=200x200'>
      <img alt='robots' src={`https://robohash.org/${id}?set=set2` }width="200" height="200" />
			<div> 
				<h2> {name} </h2>
				<p> {email} </p>
				<p> ID: {id} </p>
			</div>		
		</div>
		)
	}

 
export default Card;
