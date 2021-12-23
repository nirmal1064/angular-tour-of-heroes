import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Spiderman' },
      { id: 4, name: 'Ironman' },
      { id: 5, name: 'Hulk' },
      { id: 6, name: 'Thor' },
      { id: 7, name: 'Captain America' },
      { id: 8, name: 'Black Widow' },
      { id: 9, name: 'Hawkeye' },
      { id: 10, name: 'Wolverine' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
  constructor() {}
}
