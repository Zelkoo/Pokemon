import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { DataService } from './data.service';
import * as PokemonActions from './pokemon.action';
import {Pokemon} from "./helper/types";

@Injectable()
export class PokemonEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      mergeMap(({ limit, offset }) =>
        this.dataService.getPokemons(limit, offset).pipe(
          map((pokemons: Pokemon[]) => {
            console.log(pokemons)
              return PokemonActions.loadPokemonsSuccess({pokemons})
            }
          ),
          catchError((error) =>
            of(PokemonActions.loadPokemonsFailure({ error }))
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
