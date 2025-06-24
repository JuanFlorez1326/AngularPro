import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-page',
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent {

  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);

  public pokemon = signal<Pokemon | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.pokemonsService.loadPokemon(id).subscribe( pokemon => {
      this.pokemon.set(pokemon);
    });
  }
}
