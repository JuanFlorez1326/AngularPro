import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent { 
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({ name: 'description', content: 'This is the about page of our application.' });
    this.meta.updateTag({ name: 'og: title', content: 'About Page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola Mundo,Juan,Angular,Pokemon' });
  }
}
