import React from 'react';
import PokemonIndexItem from "./pokemon_index_item";
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          <Route path="/pokemon/:id" component={PokemonDetailContainer} />
          {this.props.pokemon.map( (poke) => <PokemonIndexItem key={`poke-${poke.id}`} poke={poke} />)}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
