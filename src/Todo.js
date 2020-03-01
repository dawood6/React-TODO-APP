import React, { Component, Fragment } from "react";
import swal from 'sweetalert';
import "./App.css";

class App extends Component {
  state = {
    Todo: "",
    Todos: [],
  };

  handleChange = event => {
    this.setState({ Todo: event.target.value });
  };


  

  delete = (removedTodo) => {
      const { Todos } = this.state
      const filteredTodos = Todos.filter(item => item !== removedTodo)
      this.setState({ Todos: filteredTodos })
      swal("Good job!", "You Have Completed!", "success");
  };
  addTodo = (event) => {
      const { Todo, Todos } = this.state;
      if (Todo === "") return swal("Error!", "Please Input Something", "error");
      const merged = [...Todos, Todo];
      this.setState({ Todos: merged, Todo: "" });


  }

  render() {
    return (
      <Fragment>
        <h1>REACT TODO APP</h1>
        <div id='main'>

        <input
          id='input'
          type="text"
          value={this.state.Todo}
          onChange={this.handleChange}
        />
        <button id='btn' onClick={this.addTodo} >ADD WORK TODO</button>


          <p id='p1'>Work To Done</p>
        <ul id="ul1">
          {this.state.Todos.map(item => (
            <li>
              {item}{" "}
              <button id="button2" onClick={() => this.delete(item)}>
               <span >❌</span> 
              </button>{" "}
            </li>
          ))}
        </ul>
        </div>
        </Fragment>
    );
  }
}

export default App;
