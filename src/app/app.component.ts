import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {AppState} from "./store";
import {select, Store} from "@ngrx/store";
import {selectPokemons} from "./store/selectors";
import {loadPokemons} from "./store/pokemon.action";
import {Pokemon} from "./interfaces/interfaces";


@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public pokemons!: Pokemon[];
  public limit = 14;
  public offset = 0;
  public currentPage: number = 0
  public totalItems = 1000;
  public chosenPokemonMoves: any
  public allPokemons: any
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadPokemons({ limit: this.limit, offset: this.offset }));
    this.store.pipe(select(selectPokemons)).subscribe((pokemons: Pokemon[]) => {
        this.allPokemons = pokemons
        const startIndex = this.offset;
        const endIndex = this.offset + this.limit;
        this.pokemons = this.allPokemons.slice(startIndex, endIndex);
      });
  }

  onPageChange(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.store.dispatch(loadPokemons({ limit: this.limit, offset: this.offset }));

    this.chosenPokemonMoves = '';
    this.currentPage = event.pageIndex + 1;

    const startIndex = this.offset;
    const endIndex = this.offset + this.limit;
    this.pokemons = this.allPokemons.slice(startIndex, endIndex);
  }

}
