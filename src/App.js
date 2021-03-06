import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [
		  { id: 'ad123', name: 'Max', age: 28 },
		  { id: 'ad124',name: 'Manu', age: 29 },
		  { id: 'ad125',name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	 }
  
	 nameChangedHandler = (event, id) => {
		 const personIndex = this.state.persons.findIndex(pers => {
			return pers.id === id;
		 })
		 const person = {
			 ...this.state.persons[personIndex]
		 };

		 person.name = event.target.value;
		 const persons = [...this.state.persons];
		 persons[personIndex] = person;
		
		 this.setState( {persons: persons} )
	 }

	 deletePersonHandler = (personIndex) => {
		// Updating state immutably - by nie modyfikowac bezposrednio state nalezy zrobic kopie array (slice or spread operator)
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	 }

	 togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	 }
  
	 render () {
		const style = {
		  backgroundColor: 'green',
		  color: 'white',
		  font: 'inherit',
		  border: '1px solid blue',
		  padding: '8px',
		  cursor: 'pointer'
		};
		let persons = null;
		if(this.state.showPersons){
			persons = (
				<div>	
				{this.state.persons.map(person => {
					return <Person 
								click={() => this.deletePersonHandler(person.id)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}/>
				})}
				 </div>
			);
			style.backgroundColor= 'red';
			style[':hover'] = {
				backgroundColor: 'salm',
				color: 'black'
			}
		}

		const classes = [];
		if (this.state.persons.length <= 2){
			classes.push('red');
		}
		if (this.state.persons.length <= 1){
			classes.push('bold');
		}

    return (
      <div className="App">
			<h1>Hi,  I'm a react app</h1>
			<p className={classes.join(' ')}>This is really working!</p>
		{/*Alternative do bind (bind w przykładzie poniej:*/}
			<button 
				style={style}
				onClick={this.togglePersonsHandler}>Switch Name</button>	
			{persons}
      </div>
    );
  }
}

export default App;
