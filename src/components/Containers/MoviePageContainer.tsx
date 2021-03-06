import { AppBar } from '@material-ui/core';
import React, { useEffect } from 'react';
import HeaderTopbar from '../Header/HeaderTopbar';
import MoviePage from '../MoviePage/MoviePage';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { changeSelectedMovie } from '../../actions';
// import { movieIdFromUrl } from '../../utilities/common';

const MoviePageContainer: React.FC = () => {
    // const [locationKeys, setLocationKeys] = useState<(string | undefined)[]>([]);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'auto';
        }
    });

    // FIXME: most probably as this chunck of code is commented,
    // when pressing back, for the first time comes back to the same movie

    // useEffect(() => {
    //   return navigate.listen((location) => {
    //     if (navigate.action === 'POP') {
    //       if (locationKeys[1] === location.key) {
    //         // Handle forward event
    //         setLocationKeys(([...keys]) => keys);
    //         dispatch(changeSelectedMovie( movieIdFromUrl() ));
    //       } else {
    //         // Handle back event
    //         setLocationKeys((keys) => [location.key, ...keys]);
    //         dispatch(changeSelectedMovie( movieIdFromUrl() ));
    //       }
    //     }
    //   });
    // }, [locationKeys]); //..

    return (
        <>
            <AppBar>
                <HeaderTopbar></HeaderTopbar>
            </AppBar>
            <MoviePage></MoviePage>
        </>
    );
};

export default MoviePageContainer;
