import { PaginatorComponent } from './../shared/general-components/paginator.component';
import { MovieService } from './../services/movie-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionComponent, AdventureComponent, AnimationComponent, ComedyComponent, DocumentaryComponent, DramaComponent, FavoritesComponent, HorrorComponent, MainComponent, MovieAppComponent, MovieCardComponent, MovieDetailsComponent, NavbarComponent, NewMoviesComponent, PopularComponent, RomanceComponent, SidebarComponent } from '.';
import { MovieAppRoutingModule } from './movie-app-routing.module';

@NgModule({
    declarations: [
        MovieAppComponent,
        MainComponent,
        MovieDetailsComponent,
        NavbarComponent,
        SidebarComponent,
        MovieCardComponent,
        FavoritesComponent,
        NewMoviesComponent,
        PopularComponent,
        PaginatorComponent,
        ActionComponent,
        AdventureComponent,
        AnimationComponent,
        ComedyComponent,
        DocumentaryComponent,
        DramaComponent,
        HorrorComponent,
        RomanceComponent
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
