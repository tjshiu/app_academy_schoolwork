import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  render() {
    console.log(this.props);

    return(
      <div>
        <ul>
          {this.props.pokemon.map((attribute) => <li>{attribute}</li>)}
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
