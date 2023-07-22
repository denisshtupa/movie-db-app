import { MovieService } from './../services/movie-service.service';
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
import { PaginatorComponent } from '../shared/general-components/paginator/paginator.component';
import { GenresComponent } from './genres/genres.component';
import { FormsModule } from '@angular/forms';

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
    PaginatorComponent,
    GenresComponent,
  ],
  imports: [CommonModule, FormsModule, MovieAppRoutingModule],
  providers: [MovieService],
})
export class MovieModule {}
