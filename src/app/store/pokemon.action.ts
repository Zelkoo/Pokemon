import { createAction, props } from '@ngrx/store';
import {Pokemon, PokemonDetails} from "../interfaces/interfaces";

// Loads Pokemons
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

// Loads Pokemon Detail
export const loadPokemonDetails = createAction(
  '[Pokemon] Load Pokemon Details',
  props<{ pokemonName: string }>()
);

export const loadPokemonDetailsSuccess = createAction(
  '[Pokemon] Load Pokemon Details Success',
  props<{ pokemonDetails: PokemonDetails }>()
);

export const loadPokemonDetailsFail = createAction(
  '[Pokemon] Load Pokemon Details Fail',
  props<{ error: any }>()
);
