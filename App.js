import React from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    let response = [];
    fetch("https://jsonplaceholder.typicode.com/users")
      // .then(response => console.log(response))
      .then(response => response.json())
      // .then(users => console.log(users))
      .then(users => this.setState({ employees: users }));
  }

  render() {
    return (
      <div className="App">
        <input 
          type="search" 
          placeholder="search employees" 
          onChange = {e => this.setState({ searchField: e.target.value})}    
        />
        <CardList employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
