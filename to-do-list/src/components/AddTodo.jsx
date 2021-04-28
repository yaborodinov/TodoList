import React from "react";
import { connect } from "react-redux";



class AddTodo extends React.Component {
    state = {
        input: "23",
    };

    newInput = (inp) => {
        this.setState({
          inp
        });
    }

    handleClickAddToDo = () => {
        this.setState()
    }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.newInput(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.handleClickAddToDo}>add +1 ToDo</button>
      </div>
    );
  }
}

export default AddTodo;
