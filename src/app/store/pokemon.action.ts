import { createAction, props } from '@ngrx/store';
import {Pokemon} from "../helper/types";

export const loadPokemons = createAction(
  '[Pokemon] Load Pokemons',
  props<{ limit: number, offset: number }>()
);
export const loadPokemonsSuccess = createAction(
  '[Pokemon] Load Pokemons Success',
  props<{ pokemons: Pokemon[] }>()
);
export const loadPokemonsFail = createAction(
  '[Pokemon] Load Pokemons Failure',
  props<{ error: any }>()
);
