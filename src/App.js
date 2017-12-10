import React, { Component } from 'react';
import Book from './components/Book';
import Advantages from './components/Advantages';
import Author from './components/Author';


export default class App extends Component {
  render() {
    return(
      <div className="">
        <Book />
        <Advantages />
        <Author />
      </div>
    );
  }
}
