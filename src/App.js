import React, { Component } from 'react';
import './App.css';

const ListItem = (props) => {

  const deleteItem = () => {
    props.todo.splice(this, 1);
    console.log(props.todo);
  }
    return (
      <ul>
            {props.todo.map(function(item, index) {
                return <li key={index}>{item}<button onClick={deleteItem}>Delete</button></li>

            })}
      </ul>
    );  
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      todo: []
    }
  }

clickHandler = (event) => {
  event.preventDefault();
  this.setState({
    todo: [...this.state.todo, this.state.text],
    text: '',
  });
}

inputUpdate = (event) => {
  this.setState({text: event.target.value})
  console.log(event.target.value)
}

handleDelete = () => {
  this.setState({
    todo: this.props.todo
  });
  console.log(this.state.todo);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" value={this.state.text} onChange={this.inputUpdate}></input>
          <button onClick={this.clickHandler}>Add Item</button>
          <ListItem todo={this.state.todo} onClick={this.handleDelete}/>
        </header>
      </div>
    );
  }
}


export default App;