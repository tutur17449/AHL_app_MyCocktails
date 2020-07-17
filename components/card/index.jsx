import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginBottom: '2px'
  },
}));

export default function CocktailCard(props) {
  const classes = useStyles();

  return (
    <Card className="col-10 col-lg-3 ml-auto mr-auto ml-lg-5 mr-lg-auto mt-3 mb-3">
      <CardHeader
        title={props.cocktail.strDrink}
      />
      <CardMedia
        className={classes.media}
        image={`${props.cocktail.strDrinkThumb}/preview`}
        title={props.cocktail.strDrink}
      />
    </Card>
  );
}
