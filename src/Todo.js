import React, { Component, Fragment } from "react";
import swal from 'sweetalert';
import Clock from 'react-live-clock';
import "./App.css";

class App extends Component {
  state = {
    Todo: "",
    Todos: [],
    bgColor: ""
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
        <Clock id='Clock' format={'HH:mm'} ticking={true} timezone={'pkt'} />
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
                  <span role='img'>❌</span>
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>

        <p id='quote'>“If the book is true, it will find an audience that is meant to read it.”</p>
        <p id='writer'>-Wally Lamb</p>
        <div id='heart'>
          <input type="checkbox" class="checkbox" id="checkbox" />
          <label for="checkbox">
            <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
              <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2" />
                <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                <g id="grp7" opacity="0" transform="translate(7 6)">
                  <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                  <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                </g>

                <g id="grp6" opacity="0" transform="translate(0 28)">
                  <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                  <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                </g>

                <g id="grp3" opacity="0" transform="translate(52 28)">
                  <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                  <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                </g>

                <g id="grp2" opacity="0" transform="translate(44 6)">
                  <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                  <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                </g>

                <g id="grp5" opacity="0" transform="translate(14 50)">
                  <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                  <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                </g>

                <g id="grp4" opacity="0" transform="translate(35 50)">
                  <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                  <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                </g>

                <g id="grp1" opacity="0" transform="translate(24)">
                  <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                  <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                </g>
              </g>
            </svg>
          </label>
        </div>
      </Fragment>
    );
  }
}

export default App;

