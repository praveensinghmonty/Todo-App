import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({ 
        list: list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];  
    const updated_list = list.filter(item => item.id !== id); 
    this.setState({
      list: updated_list
    })
  }

  
  updateInput(input) {
    this.setState({ newItem: input });
  }

 
  render() {
    return (
      <div>
        
        <h1 className="app-title">Praveen Singh's Todo App</h1>
        <div className="container">
          <h1> Add an Item...</h1>
          <br></br>

          <input type="text"
            className="input-text"
            placeholder="Write a todo"
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} />

          <button className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}>Add Todo</button>

          <div className="list">

            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input type="checkbox"
                      checked={item.isDone}
                      onChange={() => { }} />
                    {item.value}
                    <button className="btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default App;