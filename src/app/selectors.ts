import { createSelector } from '@ngrx/store';
import {AppState} from "./index";

export const selectPokemonState = (state: AppState) => state.pokemon;

export const selectPokemons = createSelector(
  selectPokemonState,
  (state) => state.pokemons
);
