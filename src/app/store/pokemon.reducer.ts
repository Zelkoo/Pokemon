import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.action';
import {Pokemon, PokemonDetails} from "../interfaces/interfaces";

export interface PokemonState {
  pokemons: Pokemon[];
  pokemonDetails: PokemonDetails | null,
  error: any;
}

export const initialState: PokemonState = {
  pokemons: [],
  pokemonDetails: null,
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemonsSuccess, (state, { pokemons }) => ({
    ...state,
    pokemons: [...state.pokemons, ...pokemons],
  })),
  on(PokemonActions.loadPokemonsFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PokemonActions.loadPokemonDetailsSuccess, (state, { pokemonDetails }) => ({
    ...state,
    pokemonDetails: pokemonDetails
  })),
  on(PokemonActions.loadPokemonDetailsFail, state => ({
    ...state,
    pokemonDetails: null
  }))
);
