import React, { Component } from 'react';
import axios from 'axios';
// import PokemonList from './component/PokemonList.jsx';
import Jon from './component/Jon.jsx';
import data from './component/Data.js';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
          gifs: []
        };
      }

      componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
          .then(response => {
            this.setState({
              gifs: response.data.pokemon
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
      }

      render() {
        console.log(this.state.gifs);
    return (
      <div className="App">

            <div className='grid-container'>
                <div className="row">
                    {data.pokemonInfo.map((e, index)=> {
                        return(
                        <Jon img={e.img} type={e.type} name={e.name} key={index} />
                    )
                })}
            </div>
        </div>
      </div>
    );
  }
}
