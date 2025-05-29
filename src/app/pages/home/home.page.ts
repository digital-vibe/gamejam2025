import { Component } from '@angular/core';
import { BarComponent, ButtonComponent, InfoComponent, SectionComponent } from '../../components';
import { RandomizeService } from '../../core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  templateUrl: 'home.page.html',
  imports: [SectionComponent, ButtonComponent, BarComponent, InfoComponent, NgIf],
})
export class HomePage {
  public randomResults: string[] = [];

  constructor(private randomizeService: RandomizeService) {
  }

  public onRandomize(): void {
    this.randomResults = this.randomizeService.randomize();
  }
}
