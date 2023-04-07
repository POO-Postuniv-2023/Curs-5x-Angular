import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-delete',
  templateUrl: './hero-delete.component.html',
  styleUrls: ['./hero-delete.component.scss'],
})
export class HeroDeleteComponent {
  id?: number;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  onConfirm(): void {
    if (this.id) {
      this.heroService.deleteHero(this.id).subscribe(() => {
        console.log('HeroDeleteComponent: deleted hero with id ' + this.id);
        this.location.back();
      });
    }
  }

  onCancel(): void {
    this.location.back();
  }
}
