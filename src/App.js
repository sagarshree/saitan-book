import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [
        {
          name: "Ravan",
          id: "m1",
        },
        {
          name: "Tarkasur",
          id: "m2",
        },
        {
          name: "Jalandhar",
          id: "m3",
        },
        {
          name: "Kansha",
          id: "m4",
        },
        {
          name: "Putana",
          id: "m5",
        },
        {
          name: "Sukracharya",
          id: "m6",
        },
        {
          name: "Dillirajasur",
          id: "m7",
        },
        {
          name: "Khemrajasur",
          id: "m8",
        },
        {
          name: "Denisur",
          id: "m9",
        },
        {
          name: "Gyanebhursingh",
          id: "m10",
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Saitan Book</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
