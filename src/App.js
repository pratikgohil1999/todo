import React, { Component } from 'react';
import ListItems from './ListItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  render() {
    return (
      <div className='App'>
        <header>
          <h1>Todo list here</h1>
          <form id="todolist" onSubmit={this.addItem}>
            <input type="text" placeholder="enter task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}>
            </input>
            <button type="submit">add</button>
          </form>
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}></ListItems>
      </header>
      </div>
    );
  }
}

export default App;
