import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenresEnum } from 'src/app/shared/enums/enumerations';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  public type: string | null = 'new-movies';
  public movieGenre: GenresEnum | number = 1;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.url.subscribe((e) => {
      this.type = this._activatedRoute.snapshot.paramMap.get('type');
      this.movieGenre = this.parseMovieGenre(this.type);
    });
  }

  parseMovieGenre = (movieType: string | null): GenresEnum | number => {
    switch (movieType) {
      case 'action':
        return GenresEnum.Action;
      case 'adventure':
        return GenresEnum.Adventure;
      case 'animation':
        return GenresEnum.Animation;
      case 'comedy':
        return GenresEnum.Comedy;
      case 'documentary':
        return GenresEnum.Documentary;
      case 'drama':
        return GenresEnum.Drama;
      case 'horror':
        return GenresEnum.Horror;
      case 'romance':
        return GenresEnum.Romance;
      default:
        return 1;
    }
  };
}
