import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#558dca",
      padding: "15px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      textAlign: "center",
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            style={{ float: "left" }}
          />
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  backgroundColor: "#f27d42",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "5px",
  float: "right",
  cursor: "pointer",
};

export default Todoitem;
