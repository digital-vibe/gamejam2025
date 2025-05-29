import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section',
  templateUrl: 'section.component.html',
  styleUrl: 'section.component.scss',
  imports: [NgIf],
})
export class SectionComponent {
  @Input() public name?: string;
}
