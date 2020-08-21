import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Wake up at 6",
        completed: false,
      },
      {
        id: 2,
        title: "Do yoga",
        completed: false,
      },
      {
        id: 3,
        title: "Take a shower at 9",
        completed: false,
      },
    ],
  };

  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //add todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                  <AddTodo addTodo={this.addTodo} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
