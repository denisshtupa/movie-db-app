import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service.service';
import { GenresEnum } from 'src/app/shared/enums/enumerations';
import { HelperFunctions } from 'src/app/shared/utils/helper-functions';
import {
  IMovieDetail,
  IMoviesResponsePaginated,
} from 'src/app/shared/interfaces/moviedb.interfaces';
import { IPagination } from 'src/app/shared/interfaces/paginator.interface';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
  public movieObject: IMoviesResponsePaginated | any;
  public movieList: Array<IMovieDetail> = [];
  public pagination: IPagination | any;

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.searchMovie();
  }

  public loadNewMovies(page: number = 1) {
    this._movieService.getMoviesByGenre(page, GenresEnum.Action).subscribe((res: IMoviesResponsePaginated) => {
        this.movieObject = res;
        this.movieList = res.results;
        HelperFunctions.scrollToTop();
        this.initPagination(page, res.total_pages, res.total_results, 20);
      });
  }

  public checkSessionStorageSearchString(): string {
    const val = localStorage.getItem('searchString');
    if (val) {
      return val.trim();
    }
    return '';
  }

  public searchMovie(page: number = 1) {
    const val = localStorage.getItem('searchString');

    if (val) {
      this._movieService.searchGloballyForMovie(val, page).subscribe((res: IMoviesResponsePaginated) => {
        this.movieObject = res;
        this.movieList = res.results;
        this.initPagination(page, res.total_pages, res.total_results, 20);
      });
    }
  }

  public loadNewMoviesPaginated() {
    this.searchMovie(this.pagination.currentPage);
  }

  private initPagination(
    pageNumber: number = 1,
    totalPages: number,
    totalElements: number,
    pageSize: number = 20
  ) {
    this.pagination = {
      currentPage: pageNumber,
      totalCount: totalElements,
      totalPages: totalPages,
      pageSize: pageSize,
    };
  }
}
