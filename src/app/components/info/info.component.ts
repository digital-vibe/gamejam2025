import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: 'info.component.html',
  styleUrl: 'info.component.scss',
})
export class InfoComponent {
  @Input({required: true}) public name!: string;
  @Input({required: true}) public description!: string;
}
