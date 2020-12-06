export interface IPagingSize {
    text: string,
    value: number
}

export interface IPagination {
    currentPage: number;
    pageSize: number;
    totalCount?: number;
    totalPages?: number;
}

export interface IArrayPagination {
    totalItems: number,
    currentPage: number,
    pageSize: number,
    totalPages: number,
    startPage: number,
    endPage: number,
    startIndex: number,
    endIndex: number,
    pages: Array<number>
}


