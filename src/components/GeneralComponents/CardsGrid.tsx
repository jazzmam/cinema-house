import { Grid } from '@material-ui/core';
import { Movie } from "../../services/movies.service";
import CardElement from './CardElement';
interface Props {
  similarMovies: Movie[];
}

const CardsGrid: React.FC<Props> = (
  {
    similarMovies,
  }: Props) =>{

  const cards = similarMovies;

  return (
    <div >
      <Grid container spacing={1}>
      { 
        cards.length > 0 &&
          cards.filter(card => card.vote_average !== 0).map((card) => (
            <CardElement card={card} />
          ))
      }
      </Grid>
    </div>
  );
}

export default CardsGrid;