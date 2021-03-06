import React from 'react';
import { Grid } from '@material-ui/core';
import { Movie } from '../../services/movies.service';
import Card from './Card';
interface Props {
    similarMovies: Movie[];
}

const CardsGrid: React.FC<Props> = ({ similarMovies }: Props) => {
    const cards = similarMovies;

    return (
        <Grid container>
            {cards.length > 0 &&
                cards.filter(card => card.vote_average !== 0).map(card => <Card key={card.id} card={card} />)}
        </Grid>
    );
};

export default CardsGrid;
