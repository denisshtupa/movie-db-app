import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service.service';
import { GenresEnum } from 'src/app/shared/enums/enumerations';
import { HelperFunctions } from 'src/app/shared/utils/helper-functions';
import {
  IMovieDetail,
  IMoviesResponsePaginated,
} from 'src/app/shared/interfaces/moviedb.interfaces';
import { IPagination } from 'src/app/shared/interfaces/paginator.interface';

@Component({
  selector: 'movie-genres',
  templateUrl: './genres.component.html',
})
export class GenresComponent implements OnChanges, OnInit {
  @Input() public movieGenre: GenresEnum | number = GenresEnum.Action;

  public movieObject: IMoviesResponsePaginated | any;
  public movieList: Array<IMovieDetail> = [];
  public pagination: IPagination | any;
  public isLoading: boolean = false;

  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.loadNewMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.movieGenre && !changes.movieGenre.firstChange) {
      // Check if movieGenre has changed and is not the initial change (firstChange)
      this.loadNewMovies();
    }
  }

  public loadNewMovies(page: number = 1) {
    if(this.movieGenre != 1) {
      this.isLoading = true;
      this._movieService.getMoviesByGenre(page, this.movieGenre)
      .subscribe((res: IMoviesResponsePaginated) => {
        this.movieObject = res;
        this.movieList = res.results;
        HelperFunctions.scrollToTop();
        this.initPagination(page, res.total_pages, res.total_results, 20);
        this.isLoading = false;
      });
    }
  }

  public loadNewMoviesPaginated() {
    this.loadNewMovies(this.pagination.currentPage);
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
      pageSize: pageSize
    };
  }
}
