import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    // const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    let keys = Object.keys(savedData())
    return keys.length + 1;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createNewRecordByEnter = event => {
    if (event.key == 'Enter')
    this.createNewRecord(event)
  };

  toggleRecordComplete = event => {};

  createNewRecord = event => {
    event.preventDefault();
    const id = this.getId()
    this.props.save(id, this.state.inputValue)
    this.setState({ inputValue: '' })
  };

  renderEmptyRecord() {
    return;
  }

  renderRecord = record => {
    return;
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <form onSubmit={this.createNewRecord}>
          <input
            className="..todo-input"
            type="text"
            name="inputValue"
            value={inputValue}
            onChange={this.handleChange}
            onKeyPress={this.createNewRecordByEnter}
          />
          <input className="..todo-input" type="submit" value="Submit" />
        </form>
        <Card savedData={this.props.savedData}/>
      </div>
    );
  }
}

Todo = withLocalstorage(Todo)

export default Todo;
