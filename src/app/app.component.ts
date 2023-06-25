import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { DataService } from './services/data.service';
import { first, tap } from 'rxjs/operators';
import {Pokemon} from "./helper/types";
import {PageEvent} from "@angular/material/paginator";
import { ImagePreloadService } from './services/image-preload.service';
import {AppState} from "./store";
import {select, Store} from "@ngrx/store";
import {selectPokemons} from "./store/selectors";
import {loadPokemons} from "./store/pokemon.action";
import {Observable} from "rxjs";


@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  limit = 14;
  offset = 0;
  offsetPreload = 1;
  pokemons!: Pokemon[];
  currentPage: number = 0
  chosenPokemonMoves: any
  totalItems!: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.totalItems = 1000;
    this.store.dispatch(loadPokemons({ limit: this.limit, offset: this.offset }));
    this.store.pipe(select(selectPokemons)).subscribe((pokemons) => {
        this.pokemons = pokemons
      });


  }
ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
}

  onPageChange(event: PageEvent) {
    this.offset = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.store.dispatch(loadPokemons({ limit: this.limit, offset: this.offset }));
    this.chosenPokemonMoves = '';
    this.currentPage = event.pageIndex + 1;
  }

}
