import React, { Component } from 'react';
import { Button } from 'antd';

class ListCard extends Component {
  render() {
    const { todo, todos, key, moveElement } = this.props;
    console.log('name', todo);
    return (
      <div className='list-sort-demo-list'>
        <div className='list-sort-demo-list-icon'></div>
        <div className='list-sort-demo-list-text'>
          <h2>Post {todo.id}</h2>
          <Button onClick={() => moveElement(todos, key, key - 1)}>UP</Button>
          <Button onClick={() => moveElement(todos, key, key + 1)}>DOWN</Button>
        </div>
      </div>
    );
  }
}

export default ListCard;
