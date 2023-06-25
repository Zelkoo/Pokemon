import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.action';

export interface PokemonState {
  pokemons: any[];
  error: any;
}

export const initialState: PokemonState = {
  pokemons: [],
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemonsSuccess, (state, { pokemons }) => ({
    ...state,
    pokemons: [...state.pokemons, ...pokemons],
  })),
  on(PokemonActions.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
