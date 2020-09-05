import React from 'react';

class Iteminfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            pokeID: this.props.chosen,
            pokemon: {},
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }

    componentDidMount(){        
        if(0 < this.props.chosen < 808){
            const url = "https://pokeapi.co/api/v2/pokemon/";
            fetch(url + this.props.chosen)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pokemon: data,
                    loading: false,
                })
            })
        }
    }

    componentDidUpdate(){        
        if(0 < this.props.chosen < 808){
            const url = "https://pokeapi.co/api/v2/pokemon/";
            fetch(url + this.props.chosen)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pokemon: data,
                    loading: false,
                })
            })
        }
    }

 
    render(){
        const name  = this.state.loading ? "loading" : this.state.pokemon.species.name;
        const type1 = !this.state.loading && this.state.pokemon.types[0].type.name;
        // const type2 = !this.state.loading && this.state.pokemon.types[1].type.name;
        const abil  = !this.state.loading && this.state.pokemon.abilities[0].ability.name;
        const imgurl = this.state.loading ? "imgload" : this.state.pokemon.sprites.front_default;
        return(
            <div className="pkmn-card"> 
                <img src={imgurl} alt="imgload" className="pkmn-sprite"/>

                <div className="pkmn-specs">
                    <h1>{name}</h1>
                    <p>{type1}</p>
                    <p>{abil}</p>
                </div> 
            </div>
        );
    }


}

export default Iteminfo;