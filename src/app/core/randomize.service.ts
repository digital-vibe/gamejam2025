import { Injectable } from '@angular/core';
import { THEMES } from './themes';
import { TOPICS } from './topics';

@Injectable({providedIn: 'root'})
export class RandomizeService {

  public randomize(): string[] {
    const theme: string = this.getRandom(THEMES);
    const topic: string = this.getRandom(TOPICS);

    return [theme, topic];
  }

  private getRandom(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)];
  }
}
