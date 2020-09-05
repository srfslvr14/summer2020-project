import React from 'react';

class ListItem extends React.Component{
  
  // constructor(){
  //   super()
  // }
  
  componentDidMount(){

  }

  checkedFlair(){
    const flair = {
      fontStyle: "italic",
      textDecoration: "line-through",
      color: "cdcdcd",
    }
    return(flair)
  }

  makeflair(){
    const flair = {
      color: this.props.item.color,
    }
    return(flair)
  }

  render(){
    
    let flair = this.props.item.completed ? this.checkedFlair() : this.makeflair()
    return (
      <div className="pkmn-item">
          <img src={this.props.item.image} alt="pic" />
          
          <input 
            type="radio"
            name="PKMNselect"
            value={this.props.item.id}
            checked={this.props.item.id === this.props.selected}
            onChange={this.props.handleSelect}
          />

          <h2 style={flair}>{this.props.item.name}</h2>
          <p>{this.props.item.ptype}</p>
          <p>{this.props.item.region}</p>
      </div>
    );
  }

}

export default ListItem;