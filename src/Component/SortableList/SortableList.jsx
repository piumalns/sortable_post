import React, { Component } from 'react';
import { Button } from 'antd';
class SortableList extends Component {
  render() {
    const { change, moveElement } = this.props;
    return (
      <div className='list-sort-demo-list'>
        <div className='list-sort-demo-list-icon'></div>
        <div className='list-sort-demo-list-text'>
          <h4>
            Moved Post {change.id} from index {change.initialIndex} to index{' '}
            {change.finalIndex}
          </h4>
          <Button
            onClick={() =>
              moveElement(change.finalIndex, change.initialIndex, change.id)
            }
          >
            Time Travel
          </Button>
        </div>
      </div>
    );
  }
}

export default SortableList;
