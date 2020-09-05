

import React from 'react';

class SearchBar extends React.Component{
  
  // constructor(){
  //   super()
  // }
  

  render(){

    return (
        <input type="textbox" defaultValue="Search" onChange={this.props.handleSearch}></input>
    );
  }
}

export default SearchBar;