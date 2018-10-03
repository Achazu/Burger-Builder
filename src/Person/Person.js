import React from 'react';
import './Person.css';

const Person = (props) => {
	return (
		<div className='Person'>
			<p onClick={props.click}>My name is {props.name} and I am {Math.floor(Math.random()*(10-1+1)+1)}. My fav number is {props.num}</p>	
			{/* props children to dane umieszczone pomiędzy tagami: <p> CHILDREN </p>*/}
			<p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />

		</div>
	)
}

export default Person