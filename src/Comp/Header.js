import React from 'react';


class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      loggedin: false,
    }
    this.logbutton = this.logbutton.bind(this)
  }

  logbutton(){
    this.setState(prevState => {return{loggedin: !prevState.loggedin}})
  }

  render(){
    let buttonText = this.state.loggedin ? "Log Out" : "Log In"
    
    return(
      <div>
        {this.state.loggedin ? <h1>You are logged in</h1> : <h1>You are logged out</h1>}
        
        <button onClick={this.logbutton}>{buttonText}</button>
      </div>
    );
  }
} 


export default Header;
