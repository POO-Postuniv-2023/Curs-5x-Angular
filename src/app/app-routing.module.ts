import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes-list/heroes-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/heroes/hero-detail/hero-detail.component';
import { HeroAddComponent } from './components/heroes/hero-add/hero-add.component';
import { HeroDeleteComponent } from './components/heroes/hero-delete/hero-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/detail/:id', component: HeroDetailComponent },
  { path: 'heroes/delete/:id', component: HeroDeleteComponent },
  { path: 'heroes/add', component: HeroAddComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
