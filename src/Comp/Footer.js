import React from 'react';
import './FooterCont/Footer.css';
// import FooterEvent from './FooterCont/FooterEvent'
import FooterMeme from './FooterCont/FooterMeme'


class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "dogs",
      selected: "0",
      showfooter: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.ShowFooter = this.ShowFooter.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({[name]: value})
    this.setState({selected: value}) 
  }

  ShowFooter(){
    this.setState({showfooter: !this.state.showfooter})
  }

  render(){
    return (
     <div>
       <br/>
       <button onClick={this.ShowFooter}> Click me to Meme</button>
        <br/>
        {this.state.showfooter && 
          <div>
            {/* <FooterEvent name={this.state.name} handleChange={this.handleChange} value="1" selected={this.state.selected}/>
            <FooterEvent name={this.state.name} handleChange={this.handleChange} value="2" selected={this.state.selected}/>
            <FooterEvent name={this.state.name} handleChange={this.handleChange} value="3" selected={this.state.selected}/> */}
            <br/>
            <FooterMeme/>
          </div>
        }
     </div>
    );
  }

}

export default Footer;