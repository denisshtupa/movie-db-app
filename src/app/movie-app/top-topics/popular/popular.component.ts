import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service.service';
import { HelperFunctions } from 'src/app/shared/helper functions/helper-functions';
import { IMovieDetail, IMoviesResponsePaginated } from 'src/app/shared/interfaces/moviedb.interfaces';
import { IPagination } from 'src/app/shared/interfaces/paginator.interface';

@Component({
  selector: 'popular',
  templateUrl: './popular.component.html'
})

export class PopularComponent {
  public movieObject: IMoviesResponsePaginated | any;
  public movieList: Array<IMovieDetail> = [];
  public pagination: IPagination | any;

  constructor(private _movieService: MovieService) {

  }

  ngOnInit() {
    this.loadNewMovies();
  }

  public loadNewMovies(page: number = 1) {
    this._movieService.getPopularMovies(page).subscribe(res => {
      this.movieObject = res;
      this.movieList = res.results;
      HelperFunctions.scrollToTop();
      this.initPagination(page, res.total_pages, res.total_results, 20);
    })
  }

  public loadNewMoviesPaginated() {
    this.loadNewMovies(this.pagination.currentPage);
  }

  private initPagination(pageNumber: number = 1, totalPages: number, totalElements: number, pageSize: number = 20) {
    this.pagination = { currentPage: pageNumber, totalCount: totalElements, totalPages: totalPages, pageSize: pageSize };
  }

}
