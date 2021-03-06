import { Movie } from './services/movies.service';

export const ADD_HOME_PAGE_MOVIES = 'ADD_HOME_PAGE_MOVIES';
export const CHANGE_SELECTED_MOVIE = 'CHANGE_SELECTED_MOVIE';
export const IS_MOVIE_PAGE_OPENED = 'IS_MOVIE_PAGE_OPENED';
export const SEARCHED_MOVIE = 'SEARCHED_MOVIE';
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const FAVOURITE_MOVIE = 'FAVOURITE_MOVIE';
export const IS_FAV_ICON_CLICKED = 'IS_FAV_ICON_CLICKED';

export function showMoviesAtHomePage(additionalMovies: Movie[]): {
  type: string;
  homePageMovies: Movie[];
} {
  return {
    type: 'ADD_HOME_PAGE_MOVIES',
    homePageMovies: additionalMovies,
  };
}

export function changeSelectedMovie(id: number): {
  type: string;
  selectedMovie: number;
} {
  return {
    type: 'CHANGE_SELECTED_MOVIE',
    selectedMovie: id,
  };
}

export function changeSearchedMovie(phrase: string): {
  type: string;
  searchedMovie: string;
} {
  return {
    type: SEARCHED_MOVIE,
    searchedMovie: phrase,
  };
}

export function changeCurrentPage(currentPage: number): {
  type: string;
  currentPage: number;
} {
  return {
    type: CURRENT_PAGE,
    currentPage: currentPage,
  };
}

export function isMoviePageOpened(isMovieOpened: boolean): {
  type: string;
  isMoviePageOpened: boolean;
} {
  return {
    type: IS_MOVIE_PAGE_OPENED,
    isMoviePageOpened: isMovieOpened,
  };
}

export function addFavouriteMovie(movieId: number): {
  type: string;
  favouriteMovie: number;
} {
  return {
    type: FAVOURITE_MOVIE,
    favouriteMovie: movieId,
  };
}

export function isFavouriteIconClicked(isFavClicked: boolean): {
  type: string;
  isFavIconClicked: boolean;
} {
  return {
    type: IS_FAV_ICON_CLICKED,
    isFavIconClicked: isFavClicked,
  };
}
