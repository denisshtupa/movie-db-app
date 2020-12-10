import { ICredits } from './../shared/interfaces/moviedb.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMovieDetail, IMoviesResponsePaginated } from '../shared/interfaces/moviedb.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  public moviedbAPI: string = environment.moviedbAPI;
  constructor(
    private _http: HttpClient
  ) { }

  public getNewMovies(page: number = 1, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<IMoviesResponsePaginated> {
    const url = `${this.moviedbAPI}/movie/upcoming?api_key=${api_key}&page=${page}`;
    return this._http.get<IMoviesResponsePaginated>(url);
  }

  public getPopularMovies(page: number = 1, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<IMoviesResponsePaginated> {
    const url = `${this.moviedbAPI}/movie/popular?api_key=${api_key}&page=${page}`;
    return this._http.get<IMoviesResponsePaginated>(url);
  }

  public getFavoritesMovies(page: number = 1, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<IMoviesResponsePaginated> {
    const url = `${this.moviedbAPI}/movie/top_rated?api_key=${api_key}&page=${page}`;
    return this._http.get<IMoviesResponsePaginated>(url);
  }

  public getMoviesByGenre(page: number = 1, genre: number = 28, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<IMoviesResponsePaginated> {
    const url = `${this.moviedbAPI}/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`;
    return this._http.get<IMoviesResponsePaginated>(url);
  }

  public getMovieDetails(movieId: number, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<IMovieDetail> {
    const url = `${this.moviedbAPI}/movie/${movieId}?api_key=${api_key}`;
    return this._http.get<IMovieDetail>(url);
  }

  public getMovieCredits(movieId: number, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<ICredits> {
    const url = `${this.moviedbAPI}/movie/${movieId}/credits?api_key=${api_key}`;
    return this._http.get<ICredits>(url);
  }

  public postRating(movieId: number, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<ICredits> {
    const url = `${this.moviedbAPI}/movie/${movieId}/rating?api_key=${api_key}`;
    return this._http.get<ICredits>(url);
  }

  public searchGloballyForMovie(searchString: string, page: number = 1, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<IMoviesResponsePaginated> {
    const url = `${this.moviedbAPI}/search/movie?api_key=${api_key}&query=${searchString}&page=${page}&include_adult=false`;
    return this._http.get<IMoviesResponsePaginated>(url);
  }

 // https://api.themoviedb.org/3/search/movie?api_key=ed3ae19e285a1cfef392563106a3ff4c&query=den&page=1&include_adult=false

}
