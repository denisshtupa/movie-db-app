import { IMovieDetail } from './../../shared/interfaces/moviedb.interfaces';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'movie-card',
    templateUrl: './movie-card.component.html'
})

export class MovieCardComponent {

    @Input() movie: IMovieDetail | any = null;

    constructor() {

    }

    ngOnInit() {

    }

}
