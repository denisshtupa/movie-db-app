import { PaginatorComponent } from './../shared/general-components/paginator.component';
import { MovieService } from './../services/movie-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent, MainComponent, MovieAppComponent, MovieCardComponent, NavbarComponent, NewMoviesComponent, PopularComponent, SidebarComponent } from '.';
import { MovieAppRoutingModule } from './movie-app-routing.module';

@NgModule({
    declarations: [
        MovieAppComponent,
        MainComponent,
        NavbarComponent,
        SidebarComponent,
        MovieCardComponent,
        FavoritesComponent,
        NewMoviesComponent,
        PopularComponent,
        PaginatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MovieAppRoutingModule
    ],
    providers: [
        MovieService
    ],
    bootstrap: []
})
export class MovieModule { }
