import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent { 
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'description', content: 'This is the contact page of our application.' });
    this.meta.updateTag({ name: 'og: title', content: 'Contact Page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola Mundo,Juan,Angular,Pokemon' });
  }
}
