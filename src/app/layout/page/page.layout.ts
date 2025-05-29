import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent, PageComponent } from '../../components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-layout',
  templateUrl: 'page.layout.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    PageComponent,
  ],
})
export class PageLayout {
}
