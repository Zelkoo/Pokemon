import {Component, Input, OnInit } from "@angular/core";
import {Pokemon} from "../../interfaces/interfaces";
import {getButtonTypeClass} from "../../helper/helpers";


@Component({
  selector: 'pokemon-single',
  templateUrl: './pokemon-single.component.html',
  styleUrls: ['./pokemon-single.component.css'],
})
export class PokemonSignle implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Input() selectedPokemonArtwork: string = ''
  @Input() showPokemonDetail!: any;
  protected readonly getButtonTypeClass = getButtonTypeClass;

  constructor() {}

  ngOnInit(){
  }
}
