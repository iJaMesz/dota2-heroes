import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { Component } from "react";
import { FilterButton } from "./components/filter-button/filter-button.component";
import { agi, int, reset, str } from "./resources/constants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: require("./resources/heroes.json").heroes,
      searchField: "",
      filterType: "",
      activeBtn: undefined
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  setFilterTypeStr = () => {
    if (this.state.filterType === str) {
      this.resetFilterType();
    } else {
      this.setState({ filterType: str, activeBtn: str });
    }
  };

  setFilterTypeAgi = () => {
    if (this.state.filterType === agi) {
      this.resetFilterType();
    } else {
      this.setState({ filterType: agi, activeBtn: agi });
    }
  };

  setFilterTypeInt = () => {
    if (this.state.filterType === int) {
      this.resetFilterType();
    } else {
      this.setState({ filterType: int, activeBtn: int });
    }
  };

  resetFilterType = () => {
    this.setState({ filterType: undefined });
  };

  render() {
    const { heroes, searchField, filterType } = this.state;
    let filteredHeroes = searchField
      ? heroes.filter((h) =>
          h.name.toLowerCase().includes(searchField.toLowerCase())
        )
      : heroes;

    if (filterType) {
      filteredHeroes = filteredHeroes.filter((h) => h.type === filterType);
    }

    return (
      <div className="App">
        <h1>DotA2 Heroes</h1>
        <h2>{filteredHeroes.length}</h2>
        <SearchBox
          placeholder="Search for Heroes"
          handleChange={this.handleChange}
        ></SearchBox>
        <div id="filters">
          <FilterButton name={str} filterClick={this.setFilterTypeStr}></FilterButton>
          <FilterButton name={agi} filterClick={this.setFilterTypeAgi}></FilterButton>
          <FilterButton name={int} filterClick={this.setFilterTypeInt}></FilterButton>
        </div>
        <CardList heroes={filteredHeroes}></CardList>
      </div>
    );
  }
}

export default App;
