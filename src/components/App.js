import React, { Component } from 'react';
import giftList from '../mockData';

class App extends Component {
  render() {
    console.log(giftList);
    var items = giftList.map((item) => {
      return(<li>{item.name} - <a href={item.link} target="_blank">Link</a></li>)
    });
    return (
      <div className="container">
        <h1>Names List</h1>
        <ol>
        {items}
        </ol>
      </div>
    );
  }
}

export default App;
