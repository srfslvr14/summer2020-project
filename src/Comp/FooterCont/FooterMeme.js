import React from 'react';
import MemeDisplay from "./MemeDisplay"

class FooterMeme extends React.Component{
    constructor(){
        super();
        this.state = {
            topText: "",
            botText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: {},
            memeUrl: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("http://api.imgflip.com/get_memes")
            .then(repsonse => repsonse.json())
            .then(repsonse => {
                const {memes} = repsonse.data;
                this.setState({allMemeImgs: memes})                
            })
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value})   
    }
    
    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random()*100 );
        console.log(randNum);
        const randMeme = this.state.allMemeImgs[randNum].url
        this.setState({randomImg: randMeme})
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="textbox"
                        value={this.state.topText}
                        name="topText"
                        placeholder="Enter top text"
                        onChange={this.handleChange}
                    />
                    <input
                        type="textbox"
                        value={this.state.botText} 
                        name="botText"
                        placeholder="Enter bottom text"
                        onChange={this.handleChange}
                    />
                    <button> Gen </button>
                </form> 
                <MemeDisplay 
                    memeImg={this.state.randomImg}
                    topText={this.state.topText}
                    botText={this.state.botText}
                />
            </div>
        );
    }
}


export default FooterMeme;