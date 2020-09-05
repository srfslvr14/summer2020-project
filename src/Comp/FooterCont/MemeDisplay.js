import React from 'react';

class FooterMeme extends React.Component{

    render(){
        return(
            <div className="meme-display">
                <h1 className="top-text"> {this.props.topText} </h1>
                <img src={this.props.memeImg} alt="meme img"/>
                <h1 className="bot-text"> {this.props.botText} </h1>
            </div>
        );
    }
}


export default FooterMeme;