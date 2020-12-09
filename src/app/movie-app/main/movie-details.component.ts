import { IMovieDetail, IGenres } from './../../shared/interfaces/moviedb.interfaces';
import { MovieService } from 'src/app/services/movie-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent {

    public type: string | null = "new-movies";
    public movieId: number = 0;
    public movieDetail: IMovieDetail | any;
    public backgroundImageUrl: string = "";
    public posterImageUrl: string = "";

    constructor(private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _movieService: MovieService) {
        this._activatedRoute.url.subscribe(e => {
            this.type = this._activatedRoute.snapshot.paramMap.get("type");
            console.log("🚀 ~ file: movie-details.component.ts ~ line 17 ~ MovieDetailsComponent ~ constructor ~  this.type", this.type)
            this.movieId = Number(this._activatedRoute.snapshot.paramMap.get("movieId"));
            console.log("🚀 ~ file: movie-details.component.ts ~ line 18 ~ MovieDetailsComponent ~ constructor ~ this.movieId", this.movieId)
        });
    }

    ngOnInit() {
        this.getMovieDetailsById();
    }

    private getMovieDetailsById() {
        this._movieService.getMovieDetails(this.movieId).subscribe(res => {
            this.movieDetail = res;

            this.backgroundImageUrl = 'url("https://image.tmdb.org/t/p/original' + this.movieDetail.backdrop_path;
            this.posterImageUrl = 'https://image.tmdb.org/t/p/original' + this.movieDetail.poster_path;

            console.log("🚀 ~ file: movie-details.component.ts ~ line 30 ~ MovieDetailsComponent ~ this._movieService.getMovieDetails ~ this.movieDetail", this.movieDetail)
        })
    }

    public returnGenres(genresList: IGenres[]): string{
        let genresConcated: string[] = [];
        genresList.forEach(element => {
            genresConcated.push(element.name);
        });

        return genresConcated.join(' | ');
    }

    public goToPreviousPage() {
        this._router.navigateByUrl("movie-db/" + this.type);
    }
}
