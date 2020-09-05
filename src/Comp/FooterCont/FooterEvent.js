import React from 'react';


class FooterEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    
    return (
     <div>
         <form>
            <input 
                type="radio"
                name={this.props.name}
                value={this.props.value}
                checked={this.props.value === this.props.selected}
                onChange={this.props.handleChange}
              />
         </form>
     </div>
    );
  }

}

export default FooterEvent;