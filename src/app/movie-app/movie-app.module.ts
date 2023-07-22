import { MovieService } from '../services/movie-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FavoritesComponent,
  MainComponent,
  MovieAppComponent,
  MovieCardComponent,
  MovieDetailsComponent,
  NavbarComponent,
  NewMoviesComponent,
  PopularComponent,
  SearchResultsComponent,
  SidebarComponent,
} from '.';
import { MovieAppRoutingModule } from './movie-app-routing.module';
import { GenresComponent } from './genres/genres.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieAppComponent,
    MainComponent,
    MovieDetailsComponent,
    SearchResultsComponent,
    NavbarComponent,
    SidebarComponent,
    MovieCardComponent,
    FavoritesComponent,
    NewMoviesComponent,
    PopularComponent,
    GenresComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MovieAppRoutingModule
  ],
  providers: [MovieService],
})
export class MovieModule {}
