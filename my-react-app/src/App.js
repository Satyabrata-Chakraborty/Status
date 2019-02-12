import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pp: [{ name: "Zero", happy: " 123 " }, { name: "ABC" }, { name: "GHI" }],
      qq: [{ name: "CDE" }],
      value: "LOCO",
      arr: [1, 2, 3, 4, 5]
    };
    this.handleChange = this.handleChange.bind(this);
    // this.state = { qq: [{name: "ABC"},{name:'PALA'}] }
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  fun1 = () => {
    this.setState({ name: "White" });
  };

  fun2 = () => {
    this.setState({ pp: [{ name: "ABC" }, { name: "DEF" }] });
    console.log(this.state);
  };

  fun3 = () => {
    console.log("KK");
  };
  fun4 = event => {
    // console.log(event.target.value);
    // this.state.arr.push(event.target.value)
    this.setState({ arr: [...this.state.arr, this.refs.idText.value] }); //Passing text value to array.
    // console.log(this.state.arr);                                      // Here ref is idText that is caught by refs 
    console.log(this.refs.idText.value);
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>YML</h1>
          <button onClick={this.fun2}>Click</button>
          <h2>{this.state.name}</h2>
          <h2>Here {this.state.pp[0].name}</h2>
          <h2>Here {this.state.qq[0].name}</h2>
          <h1>{this.state.pp[0].happy}</h1>
          <h1>{this.state.value}</h1>
          <table border="1px solid black" align="center">
            <tr>
              {this.state.arr.map(function(name, index) {
                return (
                  <tr>
                    <td key={index}>
                      {name}
                      {index}
                    </td>
                  </tr>
                );
              })}
            </tr>
          </table>
          <Person
            happy={this.state.pp[0].happy}
            name={this.state.pp[1].name}
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <div className="input-group">
          <input type="text" ref="idText"/> {/* ref as ID provided linked with onclick with add*/}
          <button onClick={this.fun4}>Add</button>
          
          </div>
          {/* <input type="text" value={this.state.value} onChange={this.handleChange}/> */}

          {/* <Person happy="Lotus" /> */}
        </div>
      </div>
    );
  }
}

export default App;
