import { INavItem } from "../interfaces/general.interfaces";

export const genresList: INavItem[] = [
  {
    id: 1,
    name: "Action",
    url: "/movie-db/action",
    iconClass: "fa-bullseye fa-lg"
  },
  {
    id: 2,
    name: "Adventure",
    url: "/movie-db/adventure",
    iconClass: "fa-helicopter fa-lg"
  },
  {
    id: 3,
    name: "Animation",
    url: "/movie-db/animation",
    iconClass: "fa-dog fa-lg"
  },
  {
    id: 4,
    name: "Comedy",
    url: "/movie-db/comedy",
    iconClass: "fa-masks-theater fa-lg"
  },
  {
    id: 5,
    name: "Documentary",
    url: "/movie-db/documentary",
    iconClass: "fa-book fa-lg"
  },
  {
    id: 6,
    name: "Drama",
    url: "/movie-db/drama",
    iconClass: "fa-heart-pulse fa-lg"
  },
  {
    id: 7,
    name: "Horror",
    url: "/movie-db/horror",
    iconClass: "fa-ghost fa-lg"
  },
  {
    id: 8,
    name: "Romance",
    url: "/movie-db/romance",
    iconClass: "fa-face-grin-hearts fa-lg"
  }
]

export const topGenresList: INavItem[] = [
  {
    id: 1,
    name: "NEW",
    url: "/movie-db/new-movies",
    iconClass: "fa-film fa-lg"
  },
  {
    id: 2,
    name: "POPULAR",
    url: "/movie-db/popular",
    iconClass: "fa-fire fa-lg"
  },
  {
    id: 3,
    name: "FAVORITES",
    url: "/movie-db/favorites",
    iconClass: "fa-star fa-lg"
  }
]
