import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: require('./resources/heroes.json').heroes,
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {heroes, searchField} = this.state;
    const filteredHeroes = searchField ? heroes.filter(h => h.name.toLowerCase().includes(searchField.toLowerCase())) : heroes;
    return (
      <div className="App">
        <SearchBox placeholder='Search for Heroes' handleChange={this.handleChange}></SearchBox>
        <CardList heroes={filteredHeroes}></CardList>
      </div>
    );
  }
}

export default App;
