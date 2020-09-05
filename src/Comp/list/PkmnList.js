import React from 'react';

import ListItem from './ListItem';

class PkmnList extends React.Component {
  constructor(){
    super();
    this.state = {
      pkmn: [],
      loading: false,
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=3")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        this.setState({
            pkmn: data.results,
            loading: true
        })
        console.log(this.state.pkmn);
    })
  }

  // need to be able to select a pokemon from the map
  // and return the ID number to load the info comp 

  render(){

    return (
        <div/>
    );
  }
}

export default PkmnList;



