import values from 'lodash/values';

export const selectAllPokemon = (state) => {

  return values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, poke) => {
  let singlePoke = poke.match.params.id;
  console.log(state.entities.pokemon);
  return values(state.entities.pokemon[singlePoke]);
};
