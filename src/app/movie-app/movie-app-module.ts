import { MovieService } from './../services/movie-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent, MovieAppComponent, NavbarComponent, SidebarComponent } from '.';
import { MovieAppRoutingModule } from './movie-app-routing.module';

@NgModule({
    declarations: [
        MovieAppComponent,
        MainComponent,
        NavbarComponent,
        SidebarComponent,
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
