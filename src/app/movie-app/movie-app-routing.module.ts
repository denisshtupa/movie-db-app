import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieAppComponent } from '.';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movie-db'
  },
  {
    path: 'movie-db',
    component: MovieAppComponent
  },
  {
    path: '**',
    redirectTo: 'movie-db'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class MovieAppRoutingModule { }
