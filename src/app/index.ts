import { ActionReducerMap } from '@ngrx/store';
import { pokemonReducer, PokemonState } from './pokemon.reducer';

export interface AppState {
  pokemon: PokemonState;
}

export const reducers: ActionReducerMap<AppState> = {
  pokemon: pokemonReducer,
};
