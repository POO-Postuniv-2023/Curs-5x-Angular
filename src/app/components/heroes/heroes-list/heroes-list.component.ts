import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from '../../../services/hero.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.messagesService.add(
        'HeroesComponent: finished fetching heroes - ' + Date.now()
      );
    });
  }
}
