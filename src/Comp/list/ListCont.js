import React from 'react';

import ListItem from './ListItem';
import Listdata from './ListData';
import Infobar from './ItemInfo';
import SearchBar from './SearchBar';
import PkmnList from './PkmnList';

class ListCont extends React.Component {
  constructor(){
    super();
    this.state = {
      pkmn: Listdata,
      name: "PKMNselect",
      selected: 0,
      loading: true,
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hanldeSearch = this.hanldeSearch.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedpkmn = prevState.pkmn.map(newpkmn =>{
        if(newpkmn.id === id){ 
          newpkmn.completed = !newpkmn.completed;
        }
        return newpkmn;
      })
      return {pkmn: updatedpkmn}
    })
  }

  handleSelect(event){
    const {name, value} = event.target;
    this.setState({[name]: value})
    this.setState({selected: value})
  }

  hanldeSearch(event){
    const {name, value} = event.target;
    this.setState({[name]: value})

  }

  // need to be able to select a pokemon from the map
  // and return the ID number to load the info comp 

  render(){
    const Listitems = this.state.pkmn.map(item => 
      <ListItem 
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        handleSelect={this.handleSelect}
        selected={this.state.selected}
      />)

    return (
      <div>
        <PkmnList/>
        <SearchBar handleSearch={this.handleSearch}/>
        <div className= "pkmn-list"> {Listitems} </div>
        {this.state.selected !== 0 && 
        <Infobar chosen={this.state.selected}/> }
      </div>
    );
  }
}

export default ListCont;



