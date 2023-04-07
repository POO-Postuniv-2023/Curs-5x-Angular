import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messagesService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add(
      'HeroService: started fetching heroes - ' + Date.now()
    );
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id) as Hero;
    this.messagesService.add(
      `HeroService: fetched hero id=${id} - ${Date.now()}`
    );
    return of(hero);
  }

  addHero(hero?: Hero): Observable<Hero> {
    if (!hero || !hero.id) {
      this.messagesService.add(
        `HeroService: hero is undefined - ${Date.now()}`
      );
      throw new Error('Hero is undefined');
    }
    hero.id = +hero.id;
    console.log(HEROES);
    if (HEROES.find((h) => h.id === hero.id)) {
      this.messagesService.add(
        `HeroService: hero with id=${hero.id} already exists - ${Date.now()}`
      );
      throw new Error('Hero with this id already exists');
    }
    HEROES.push(hero);
    this.messagesService.add(
      `HeroService: added hero id=${hero.id} - ${Date.now()}`
    );
    return of(hero);
  }

  deleteHero(heroId: number): Observable<void> {
    const heroIndex = HEROES.findIndex((h) => h.id === heroId);
    if (heroIndex === -1) {
      this.messagesService.add(
        `HeroService: hero with id=${heroId} does not exist - ${Date.now()}`
      );
      throw new Error('Hero with this id does not exist');
    }
    HEROES.splice(heroIndex, 1);
    this.messagesService.add(
      `HeroService: deleted hero id=${heroId} - ${Date.now()}`
    );

    return of(undefined);
  }
}
