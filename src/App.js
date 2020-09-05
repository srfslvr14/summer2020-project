import React from 'react';
import './App.css';

import Header from './Comp/Header.js';
import Body from './Comp/Body.js';
import Footer from './Comp/Footer.js';

class App extends React.Component {
  // constructor(){
  //   super();
  // }

  render(){
    return (
      <div className="App">
        <Header />
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App;
