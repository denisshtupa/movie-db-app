import { MovieService } from 'src/app/services/movie-service.service';
import { Component } from '@angular/core';
import { IMovieDetail, IMoviesResponsePaginated } from 'src/app/shared/interfaces/moviedb.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  public movieObject: IMoviesResponsePaginated | any;
  public movieList: Array<IMovieDetail> = [];
  public searchString: string = "";
  
  constructor(private _movieService: MovieService,
    private _router: Router) {

  }

  ngOnInit() {

  }

  public searchMovie() {
    localStorage.setItem("searchString", this.searchString);
    this._router.navigateByUrl("movie-db/search");
  }
}
