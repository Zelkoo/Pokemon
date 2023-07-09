import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import * as PokemonActions from './pokemon.action';
import {Pokemon, PokemonDetails} from "../interfaces/interfaces";

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      mergeMap(({ limit, offset }) =>
        this.dataService.getPokemons(limit, offset).pipe(
          map((pokemons: Pokemon[]) => {
              return PokemonActions.loadPokemonsSuccess({pokemons})
            }
          ),
          catchError((error) =>
            of(PokemonActions.loadPokemonsFail({ error }))
          )
        )
      )
    )
  );
  loadPokemonDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemonDetails),
      mergeMap(({ pokemonName }) =>
        this.dataService.readDetails(pokemonName).pipe(
          map((pokemonDetails: PokemonDetails) =>
            PokemonActions.loadPokemonDetailsSuccess({ pokemonDetails })
          ),
          catchError((error) =>
            of(PokemonActions.loadPokemonDetailsFail({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
