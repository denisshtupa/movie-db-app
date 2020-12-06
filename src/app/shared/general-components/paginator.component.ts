import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArrayPagination, IPagination, IPagingSize } from '../interfaces/paginator.interface';

@Component({
  selector: 'custom-paginator',
  templateUrl: './paginator.component.html'
})

export class PaginatorComponent implements OnInit, DoCheck {
    
    @Input() public paginationData: IPagination | any;
    @Input() public pagingSize: Array<IPagingSize> | any;
    @Input() public scrollToTop: boolean = true;
    
    public pageSizeSelected: IPagingSize = {
        text: '10',
        value: 10
    };

    public arrayPagination: IArrayPagination | any = [];
    private previousPagination: IPagination | any;

    @Output() PageNavigation: EventEmitter<any> = new EventEmitter();
    @Output() NextPage: EventEmitter<any> = new EventEmitter();
    @Output() PrevPage: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        if (this.paginationData && this.paginationData.pageSize != 0) {
            this.pageSizeSelected.value = this.paginationData.pageSize
            this.pageSizeSelected.text = this.paginationData.pageSize.toString();
        }
        this.previousPagination = this.paginationData;
        if (this.paginationData) {
            this.arrayPagination = this.createArrayPagination(this.paginationData.totalPages, this.paginationData.currentPage, this.paginationData.pageSize);
        }
    }

    ngDoCheck() {
        //After the paginationData input is defined
        if (!this.previousPagination && this.paginationData) {
            this.previousPagination = this.paginationData;
            this.arrayPagination = this.createArrayPagination(this.paginationData.totalPages, this.paginationData.currentPage, this.paginationData.pageSize);
        }
        //After the total number of pages changes
        else if (this.previousPagination && this.previousPagination.totalPages !== this.paginationData.totalPages) {
            this.previousPagination = this.paginationData;
            this.arrayPagination = this.createArrayPagination(this.paginationData.totalPages, this.paginationData.currentPage, this.paginationData.pageSize);
        }
    }

    //    //create number of pages available for navigation
    //    createPagination(totalPages: number): number[] {
    //     let pages: Array<number> = [];
    //     let currentPage = this.paginationData.currentPage, start, end, pagesCutOff = 9, ceiling = Math.ceil(pagesCutOff / 2), floor = Math.floor(pagesCutOff / 2);

    //     pages = Array(totalPages).fill(1).map((x, i) => i + 1);

    //     if (totalPages < pagesCutOff) {
    //         start = 0;
    //         end = totalPages;
    //     }
    //     else if (currentPage >= 1 && currentPage <= ceiling) {
    //         start = 0;
    //         end = pagesCutOff;
    //     }
    //     else if ((currentPage + floor) >= totalPages) {
    //         start = (totalPages - pagesCutOff + 1);
    //         end = totalPages;
    //     }
    //     else {
    //         start = (currentPage - ceiling + 1);
    //         end = (currentPage + floor);
    //     }

    //     pages = pages.filter(pg => pg >= start && pg <= end);

    //     return pages;
    // }


    //click on a page to navigate
    navigateToPage(pageNo: number): void {
        if (pageNo !== this.paginationData.currentPage) {
            this.paginationData.currentPage = pageNo;
            this.arrayPagination = this.createArrayPagination(this.paginationData.totalPages, this.paginationData.currentPage, this.paginationData.pageSize);
            this.PageNavigation.emit(pageNo);
            // if (this.scrollToTop) {
            //     HelperFunctions.scrollToTop();
            // }
        }
    }

    //go to next page
    navigateToNextPage() {
        this.paginationData.currentPage = ++this.paginationData.currentPage;
        this.arrayPagination = this.createArrayPagination(this.paginationData.totalPages, this.paginationData.currentPage, this.paginationData.pageSize);
        this.NextPage.emit(this.paginationData.currentPage);
        // if (this.scrollToTop) {
        //     HelperFunctions.scrollToTop();
        // }
    }

    //go te prev page
    navigateToPrevPage() {
        this.paginationData.currentPage = --this.paginationData.currentPage;
        this.arrayPagination = this.createArrayPagination(this.paginationData.totalPages, this.paginationData.currentPage, this.paginationData.pageSize);
        this.PrevPage.emit(this.paginationData.currentPage);
        // if (this.scrollToTop) {
        //     HelperFunctions.scrollToTop();
        // }
    }

    //check if next page is available
    showNextPageLink(): boolean {
        return this.paginationData.currentPage !== this.paginationData.totalPages && this.paginationData.totalPages !== 0;
    }

    //check if prev page is available
    showPrevPageLink(): boolean {
        return this.paginationData.currentPage !== 1;
    }

    // create array pagination
    createArrayPagination(totalItems: number, currentPage: number, pageSize: number): IArrayPagination {
        let totalPages: number = Math.ceil(totalItems / pageSize);
        let startPage: number; let endPage: number;
        // less than 5  pages
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
             //more than 5 pages ( chane start page nad end page)
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        let startIndex: number = (currentPage - 1) * pageSize;
        let endIndex: number = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let pages: Array<number> = Array.from(Array(endPage + 1 - startPage), (_, i) => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
