import React from 'react';
import { useRef, useEffect } from 'react';
import { Grid, CardMedia } from '@material-ui/core';
import '../../App.scss';
import loadingSpinner from '../../images/loading-spinner.gif';
import useIntersectionObserver from '../../customHooks/useIntersectionObserver';
import { changeCurrentPage } from '../../actions';
import { fetchAllMovies, Movie } from '../../services/movies.service';
import { RootState } from '../../reducer';
import { showMoviesAtHomePage } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Card from '../GeneralComponents/Card';
import useStyles from './CatalogCards.styles';

const CatalogCards: React.FC = () => {
    const loadingRef = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(loadingRef, {});
    const isVisible = !!entry?.isIntersecting;
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.homePageMovies);
    const searchedMovie = useSelector((state: RootState) => state.searchedMovie);
    const currentPage = useSelector((state: RootState) => state.currentPage);
    const classes = useStyles();

    useEffect(() => {
        if (isVisible) {
            if (currentPage <= 500) {
                dispatch(changeCurrentPage(currentPage + 1));

                fetchAllMovies(String(currentPage))
                    .then(nextPage => {
                        dispatch(showMoviesAtHomePage([...movies, ...nextPage]));
                    })
                    .catch(() => {
                        dispatch(showMoviesAtHomePage([...movies]));
                    });
            }
        }
    }, [isVisible]);

    return (
        <div>
            {movies.length > 0 && movies.length < 6 && (
                <div className={classes.searchResultsTitle}>Found matched movies</div>
            )}
            {movies.length > 0 ? (
                <Grid container className={classes.containerContent}>
                    {movies
                        .filter((movie: Movie) => movie.vote_average !== 0)
                        .map((movie: Movie) => (
                            <Card key={movie.id} card={movie} />
                        ))}
                </Grid>
            ) : searchedMovie ? (
                <div className={classes.noResultsMessage}>Try a different phrase...</div>
            ) : (
                <CardMedia component="img" image={loadingSpinner} className={classes.loadingSpinner} />
            )}
            {!searchedMovie && <div ref={loadingRef}>{currentPage <= 500 ? '' : "You've seen all movies;)"}</div>}
        </div>
    );
};

export default CatalogCards;
