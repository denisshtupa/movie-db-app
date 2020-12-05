
import { MovieService } from './../services/movie-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieAppComponent, NavbarComponent, SidebarComponent } from '.';

@NgModule({
    declarations: [
        MovieAppComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MovieService
    ],
    bootstrap: []
})
export class MovieModule { }
