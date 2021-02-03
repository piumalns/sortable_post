import React, { Component } from 'react';
import { Button } from 'antd';

class ListCard extends Component {
  render() {
    const { todo, todos, index, moveElement } = this.props;
    return (
      <div className='list-sort-demo-list'>
        <div className='list-sort-demo-list-icon'></div>
        <div className='list-sort-demo-list-text'>
          <h2>Post {todo.id}</h2>
          {index != 0 ? (
            <Button onClick={() => moveElement(index, index - 1, todo.id)}>
              UP
            </Button>
          ) : null}
          {index != 4 ? (
            <Button onClick={() => moveElement(index, index + 1, todo.id)}>
              DOWN
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ListCard;
