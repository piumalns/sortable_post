import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Button, message, Popconfirm, Col, Row, Card } from 'antd';
import ListCard from './Component/ListCard/ListCard';
import Sortable from './Component/SortableList/SortableList';

class App extends Component {
  state = {
    todos: [],
    change: [],
  };

  async componentDidMount() {
    let result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({ todos: result.data });
  }

  moveElement = (array, initialIndex, finalIndex) => {
    console.log(initialIndex, finalIndex);
    array.splice(finalIndex, 0, array.splice(initialIndex, 1)[0]);
    console.log(array);
    this.setState({ todos: array });
  };

  render() {
    var user = {
      name: 'ann',
    };

    return (
      <div className='container'>
        <div className='row'>
          <Row>
            <Col span={10}>
              <div style={{ margin: '10px' }} className='col-sm-6'>
                <div classname='card-header'>
                  <h2>Sortable Port List</h2>
                </div>
                {this.state.todos.length > 0 ? (
                  <div>
                    {this.state.todos.slice(0, 5).map((todo, index) => (
                      <Card style={{ margin: '10px' }}>
                        <ListCard
                          todos={this.state.todos.slice(0, 5)}
                          moveElement={this.moveElement}
                          key={index}
                          todo={todo}
                        />
                      </Card>
                    ))}
                  </div>
                ) : (
                  <home name={'Max'} user={user} />
                )}
              </div>
            </Col>
            <Col span={10}>
              <div style={{ margin: '10px' }} className='col-sm-6'>
                <div className='card-header'>
                  <h2>List of actions committed</h2>
                </div>
                <Card style={{ margin: '10px' }}>
                  <Sortable />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
