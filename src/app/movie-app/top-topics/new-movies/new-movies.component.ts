import { IMoviesResponsePaginated, IMovieDetail } from './../../../shared/interfaces/moviedb.interfaces';
import { MovieService } from './../../../services/movie-service.service';
import { Component } from '@angular/core';
import { IPagination } from 'src/app/shared/interfaces/paginator.interface';

@Component({
    selector: 'new-movies',
    templateUrl: './new-movies.component.html'
})

export class NewMoviesComponent {

    public movieObject: IMoviesResponsePaginated | any;
    public movieList: Array<IMovieDetail> = [];


    public _pagination: IPagination | any;

    constructor(private _movieService: MovieService) {

    }

    ngOnInit() {
        this.loadNewMovies();
    }

    public loadNewMovies(page: number = 1) {
        this._pagination
        this._movieService.getNewMovies(page).subscribe(res => {
            this.movieObject = res;
            console.log("🚀 ~ file: new-movies.component.ts ~ line 29 ~ NewMoviesComponent ~ this._movieService.getNewMovies ~ res", res)

            this.movieList = res.results;
            
            this.initPagination(page, res.total_pages, res.total_results, 20);

        })
    }

    public loadNewMoviesPaginated() {
        this.loadNewMovies(this._pagination.currentPage);
    }



    private initPagination(pageNumber: number = 1, totalPages: number, totalElements: number, pageSize: number = 20) {
        this._pagination = { currentPage: pageNumber, totalCount: totalElements, totalPages: totalPages, pageSize: pageSize };
        console.log("🚀 ~ file: new-movies.component.ts ~ line 41 ~ NewMoviesComponent ~ initPagination ~ this._pagination", this._pagination)
    }


    //  // Load users/groups paginated
    //  getUserGroupsPaginated() {
    //   const pageNumber: number = this._pagination.currentPage;
    //   const pageSize: number = this._pagination.pageSize;
    //   if (this.userGroupFilter.toUpperCase() == 'USERS') {
    //     if (this.organisationUsers.some(usr => usr.pageNumber == pageNumber)) {
    //       this.organisationUsersPaginated = this.organisationUsers.find(usr => usr.pageNumber == pageNumber).data;
    //     } else {
    //       this.loadUsers(pageNumber, pageSize);
    //     }
    //   } else {
    //     // If the group on this page is loaded once than is no need to load from server
    //     if (this.allGroups.some(gr => gr.pageNumber == pageNumber)) {
    //       this.groupsPaginated = this.allGroups.find(gr => gr.pageNumber == pageNumber).data;
    //     } else {
    //       this.loadGroups(pageNumber, pageSize);
    //     }
    //   }
    //   this.selectedItems = [];
    //   this.allItemsSelected = false;
    // }


}
