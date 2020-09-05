import React from 'react';
import './Body.css';

import ListCont from './list/ListCont';


class Body extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoading: true,
      buttonVis: true
    }

    this.pressButton = this.pressButton.bind(this)
  }

  pressButton(){
    this.setState( prevState => { return{isLoading: !prevState.isLoading} });
    this.setState( prevState => { return{buttonVis: !prevState.buttonVis} });
  }

  render(){
    return (
      <div className="Body">
        <br/>
        {this.state.isLoading ? <h1> Ready to choose your first pokemon? </h1> : <ListCont/>}
        {this.state.buttonVis && <button onClick={this.pressButton}> YES! </button> }
      </div>
    );
  }
}

export default Body;