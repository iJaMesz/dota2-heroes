import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: require('./resources/heroes.json').heroes,
      searchField: ''
    }
  }
  render() {
    const {heroes, searchField} = this.state;
    const filteredHeroes = searchField ? heroes.filter(h => h.name.toLowerCase().includes(searchField.toLowerCase())) : heroes;
    return (
      <div className="App">
        <input type="search" placeholder="Search for a Hero" onChange={e => this.setState({searchField: e.target.value}, () => console.log(e.target.value))}></input>
        <CardList heroes={filteredHeroes}></CardList>
      </div>
    );
  }
}

export default App;
