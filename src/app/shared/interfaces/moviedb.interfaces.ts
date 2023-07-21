export interface IMoviesResponsePaginated {
  dates?: IDatesInterval;
  results: IMovieDetail[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IDatesInterval {
  maximum: string;
  minimum: string;
}

export interface IMovieDetail {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genres: IGenres[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: number;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface ICredits {
  id: number;
  cast: ICast[];
  crew: ICrew[];
}

export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface ICrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
