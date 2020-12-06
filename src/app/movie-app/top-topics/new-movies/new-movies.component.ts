import { IMoviesResponsePaginated, IMovieDetail } from './../../../shared/interfaces/moviedb.interfaces';
import { MovieService } from './../../../services/movie-service.service';
import { Component } from '@angular/core';

@Component({
    selector: 'new-movies',
    templateUrl: './new-movies.component.html'
})

export class NewMoviesComponent {

    public movieObject: IMoviesResponsePaginated | any;
    public movieList: Array<IMovieDetail> = [];

    constructor(private _movieService: MovieService) {

    }

    ngOnInit() {
        this.loadNewMovies();
    }

    public loadNewMovies() {
        this._movieService.getNewMovies().subscribe(res => {
            this.movieObject = res;
            console.log("🚀 ~ file: new-movies.component.ts ~ line 29 ~ NewMoviesComponent ~ this._movieService.getNewMovies ~ res", res)

            this.movieList = res.results;
        })
    }
}
