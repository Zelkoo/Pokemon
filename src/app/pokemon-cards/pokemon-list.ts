import {Component, Input, OnInit} from "@angular/core";
import {DataService} from "../services/data.service";
import {Pokemon, PokemonDetails} from "../interfaces/interfaces";
import {loadPokemonDetails} from "../store/pokemon.action";
import {AppState} from "../store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonList {
  @Input() pokemons: Pokemon[] = [];
  public pokemonDetails!: PokemonDetails;
  public pokemonArtowrk!: string;
  constructor(private store: Store<AppState>) {
  }

  showPokemonDetails(pokemonName: Pokemon) {
    const { name, artwork } = pokemonName
    this.store.dispatch(loadPokemonDetails({ pokemonName: name }));
    this.pokemonArtowrk = artwork;
  }
}
