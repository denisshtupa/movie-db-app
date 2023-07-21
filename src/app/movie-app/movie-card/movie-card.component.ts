import { IMovieDetail } from './../../shared/interfaces/moviedb.interfaces';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input() movie: IMovieDetail | any = null;
  @Input() type: string = '';

  constructor(private _router: Router) {}

  ngOnInit() {}

  public navigateToDetailsPage() {
    this._router.navigateByUrl('movie-db/' + this.type + '/movie/' + this.movie.id);
  }
}
