import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMoviesResponsePaginated } from '../shared/interfaces/moviedb.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  public moviedbAPI: string = environment.moviedbAPI;
  constructor(
    private _http: HttpClient
  ) { }

  public getNewMovies(page: number = 1, api_key: string = "ed3ae19e285a1cfef392563106a3ff4c"): Observable<IMoviesResponsePaginated>{
    const url = `${this.moviedbAPI}/movie/upcoming?api_key=${api_key}&page=${page}`;
    return this._http.get<IMoviesResponsePaginated>(url);
  }

}
