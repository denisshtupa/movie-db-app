export interface IMoviesResponsePaginated {
    dates?: IDatesInterval
    results: IMovieDetail[]
    page: number
    total_pages: number
    total_results: number
}

export interface IDatesInterval {
    maximum: string
    minimum: string
}

export interface IMovieDetail {    
    id: number
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    original_language: string
    original_title: string
    overview: string
    popularity: string
    poster_path: string
    release_date: Date
    title: string
    video: boolean
    vote_average: string
    vote_count: number
}
