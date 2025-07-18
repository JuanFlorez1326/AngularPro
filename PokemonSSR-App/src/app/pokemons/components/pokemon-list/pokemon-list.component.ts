import { Component, input } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent {
  public pokemons = input.required<SimplePokemon[]>();
}
