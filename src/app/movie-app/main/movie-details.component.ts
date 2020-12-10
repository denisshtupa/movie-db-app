import { IMovieDetail, IGenres, ICredits, ICast } from './../../shared/interfaces/moviedb.interfaces';
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
    public movieCredits: ICredits | any;
    public movieCast: ICast | any;
    public backgroundImageUrl: string = "";
    public posterImageUrl: string = "";
    public reviewValue: any;
    public reviewAdded: boolean = false;

    constructor(private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _movieService: MovieService) {
        this._activatedRoute.url.subscribe(e => {
            this.type = this._activatedRoute.snapshot.paramMap.get("type");
            this.movieId = Number(this._activatedRoute.snapshot.paramMap.get("movieId"));
        });
    }

    ngOnInit() {
        this.getMovieDetailsById();
        this.getMovieCreditsById();
    }

    private getMovieDetailsById() {
        this._movieService.getMovieDetails(this.movieId).subscribe(res => {
            this.movieDetail = res;
            this.backgroundImageUrl = 'url("https://image.tmdb.org/t/p/original' + this.movieDetail.backdrop_path;
            this.posterImageUrl = 'https://image.tmdb.org/t/p/original' + this.movieDetail.poster_path;
        })
    }

    private getMovieCreditsById() {
        this._movieService.getMovieCredits(this.movieId).subscribe(res => {
            this.movieCredits = res;
            this.getTop20Cast(this.movieCredits);
        })
    }

    private getTop20Cast(movieCredits: ICredits) {
        this.movieCast = [];
        movieCredits.cast.sort((a, b) => a.popularity < b.popularity ? -1 : a.popularity > b.popularity ? 1 : 0);
        this.movieCast = movieCredits.cast.filter(mov => mov.profile_path != null).slice(0, 18);
    }

    public returnGenres(genresList: IGenres[]): string {
        let genresConcated: string[] = [];
        genresList.forEach(element => {
            genresConcated.push(element.name);
        });

        return genresConcated.join(' | ');
    }

    public goToPreviousPage() {
        this._router.navigateByUrl("movie-db/" + this.type);
    }

    public addRating() {
        this.reviewAdded = true;
    }

    public removeRating() {
        this.reviewAdded = false;
    }
}
