import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPagination } from '../../interfaces/paginator.interface';

@Component({
  selector: 'custom-paginator',
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent implements OnInit {
  @Input() public paginationData: IPagination | any;
  @Input() public scrollToTop: boolean = true;

  @Output() PageNavigation: EventEmitter<any> = new EventEmitter();
  @Output() NextPage: EventEmitter<any> = new EventEmitter();
  @Output() PrevPage: EventEmitter<any> = new EventEmitter();

  public totalItems: number = 0;
  public currentPage: number = 1;
  public pageSize: number = 20;
  public totalPages: number = 0;
  public pages: number[] = [];

  public startIndex: number | any;
  public endIndex: number | any;

  ngOnInit() {
    if (this.paginationData) {
      this.initPaginationData();
    }
  }

  private initPaginationData() {
    this.totalItems = this.paginationData.totalItems;
    this.currentPage = this.paginationData.currentPage;
    this.pageSize = this.paginationData.pageSize;
    this.totalPages = this.paginationData.totalPages;
    this.calculatePagesToShow();
  }

  private calculatePagesToShow() {
    let startPage: number;
    let endPage: number;
    if (this.paginationData.totalPages <= 5) {
      startPage = 1;
      endPage = this.paginationData.totalItems;
    } else {
      if(this.paginationData.totalPages > 500) {
        this.paginationData.totalPages = 500;
      }
      if (this.paginationData.currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (
        this.paginationData.currentPage + 1 >=
        this.paginationData.totalPages
      ) {
        startPage = this.paginationData.totalPages - 4;
        endPage = this.paginationData.totalPages;
      } else {
        startPage = this.paginationData.currentPage - 2;
        endPage = this.paginationData.currentPage + 2;
      }
    }
    this.pages = Array.from(
      Array(endPage + 1 - startPage),
      (_, i) => startPage + i
    );
  }

  public navigateToPage(pageNo: number): void {
    if (pageNo !== this.paginationData.currentPage) {
      this.paginationData.currentPage = pageNo;
      this.calculatePagesToShow();
      this.PageNavigation.emit(this.paginationData);
    }
  }

  public navigateToNextPage() {
    this.paginationData.currentPage = ++this.paginationData.currentPage;
    this.calculatePagesToShow();
    this.NextPage.emit(this.paginationData);
  }

  public navigateToPrevPage() {
    this.paginationData.currentPage = --this.paginationData.currentPage;
    this.calculatePagesToShow();
    this.PrevPage.emit(this.paginationData);
  }

  public showNextPageLink(): boolean {
    return (
      this.paginationData.currentPage !== this.paginationData.totalPages &&
      this.paginationData.totalPages !== 0
    );
  }

  public showPrevPageLink(): boolean {
    return this.paginationData.currentPage !== 1;
  }
}
