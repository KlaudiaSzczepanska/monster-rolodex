 import { Component } from 'react';
 
import CardList from './components/card-list/card-list.components';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

 constructor(){
  super();
    this.state = {
      monsters: [],
      searchField: '',
    };

  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=>Response.json())
    .then((users)=>this.setState(() => {
      return {monsters: users}
    },
    ()=>{
      console.log(this.state);
    }
    ));
  }

  onSearchChange = (event)=>{
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return{searchField};
    });
    }

  render ()
  {
  const {monsters, searchField} = this.state;
  const {onSearchChange}= this;
  const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
<SearchBox 
className = 'monsters-search-box'
placeholder = 'search monsters'
onChange = {onSearchChange}
/>
<CardList monsters={filteredMonsters}/>
    </div>
  );
 }
}
export default App;
