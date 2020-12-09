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
        this.getMovieCreditsById();
    }

    private getMovieDetailsById() {
        this._movieService.getMovieDetails(this.movieId).subscribe(res => {
            this.movieDetail = res;

            this.backgroundImageUrl = 'url("https://image.tmdb.org/t/p/original' + this.movieDetail.backdrop_path;
            this.posterImageUrl = 'https://image.tmdb.org/t/p/original' + this.movieDetail.poster_path;

            console.log("🚀 ~ file: movie-details.component.ts ~ line 30 ~ MovieDetailsComponent ~ this._movieService.getMovieDetails ~ this.movieDetail", this.movieDetail)
        })
    }

    private getMovieCreditsById() {
        this._movieService.getMovieCredits(this.movieId).subscribe(res => {
            this.movieCredits = res;
            console.log("🚀 ~ file: movie-details.component.ts ~ line 49 ~ MovieDetailsComponent ~ this._movieService.getMovieCredits ~ this.movieCredits", this.movieCredits)

            this.getTop20Cast(this.movieCredits);
            // this.backgroundImageUrl = 'url("https://image.tmdb.org/t/p/original' + this.movieDetail.backdrop_path;
            // this.posterImageUrl = 'https://image.tmdb.org/t/p/original' + this.movieDetail.poster_path;

            // console.log("🚀 ~ file: movie-details.component.ts ~ line 30 ~ MovieDetailsComponent ~ this._movieService.getMovieDetails ~ this.movieDetail", this.movieDetail)
        })
    }

    private getTop20Cast(movieCredits: ICredits) {
        this.movieCast = [];
        // x.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)

        movieCredits.cast.sort((a, b) => a.popularity < b.popularity ? -1 : a.popularity > b.popularity ? 1 : 0);

        this.movieCast = movieCredits.cast.slice(0, 18);
        console.log("🚀 ~ file: movie-details.component.ts ~ line 68 ~ MovieDetailsComponent ~ getTop20Cast ~ this.movieCast", this.movieCast)

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
