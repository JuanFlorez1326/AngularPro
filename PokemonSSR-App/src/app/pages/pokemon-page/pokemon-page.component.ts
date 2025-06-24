import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-page',
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent {

  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  public pokemon = signal<Pokemon | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.pokemonsService.loadPokemon(id)
    .pipe(
      tap(({ name, id }) => {
        const pageTitle = `#${ id } - ${ name }`;
        const pageDesc = `Pokemon page ${ pageTitle }`;
        const pageImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        this.title.setTitle(pageTitle);
        this.meta.updateTag({ name: 'description', content: pageDesc });
        this.meta.updateTag({ name: 'og:title', content: pageTitle });
        this.meta.updateTag({ name: 'og:description', content: pageDesc });
        this.meta.updateTag({ name: 'og:image', content: pageImg });
      })
    ).subscribe( pokemon => {
      this.pokemon.set(pokemon);
    });
  }
}
