import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';
import { Hero } from 'src/app/models/hero';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss'],
})
export class HeroAddComponent {
  hero?: Hero = {
    id: undefined,
    name: '',
  };

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private messageService: MessagesService,
    private location: Location
  ) {}

  onAdd(): void {
    try {
      this.heroService.addHero(this.hero).subscribe(() => {
        this.messageService.add(
          `HeroAddComponent: added ${this.hero?.name} - ${Date.now()}`
        );
      });
    } catch (error) {
      this.messageService.add(
        `HeroAddComponent: error adding ${this.hero?.name} - ${Date.now()}`
      );
    }
  }

  onBack(): void {
    this.location.back();
  }
}
