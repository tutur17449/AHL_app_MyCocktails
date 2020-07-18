import Menu from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import CocktailContent from '../../components/singleCocktail/index'
import Head from 'next/head'
import seo from '../../tools/seo'

export default function AlcoholicCocktail(props) {

  const ingredients = {
    ingredients: [
      props.cocktail.drinks[0].strIngredient1,
      props.cocktail.drinks[0].strIngredient2,
      props.cocktail.drinks[0].strIngredient3,
      props.cocktail.drinks[0].strIngredient4,
      props.cocktail.drinks[0].strIngredient5,
      props.cocktail.drinks[0].strIngredient6,
      props.cocktail.drinks[0].strIngredient7,
      props.cocktail.drinks[0].strIngredient8,
      props.cocktail.drinks[0].strIngredient9,
      props.cocktail.drinks[0].strIngredient10,
      props.cocktail.drinks[0].strIngredient11,
      props.cocktail.drinks[0].strIngredient12,
      props.cocktail.drinks[0].strIngredient13,
      props.cocktail.drinks[0].strIngredient14,
      props.cocktail.drinks[0].strIngredient15,
    ],
    measures: [
      props.cocktail.drinks[0].strMeasure1,
      props.cocktail.drinks[0].strMeasure2,
      props.cocktail.drinks[0].strMeasure3,
      props.cocktail.drinks[0].strMeasure4,
      props.cocktail.drinks[0].strMeasure5,
      props.cocktail.drinks[0].strMeasure6,
      props.cocktail.drinks[0].strMeasure7,
      props.cocktail.drinks[0].strMeasure8,
      props.cocktail.drinks[0].strMeasure9,
      props.cocktail.drinks[0].strMeasure10,
      props.cocktail.drinks[0].strMeasure11,
      props.cocktail.drinks[0].strMeasure12,
      props.cocktail.drinks[0].strMeasure13,
      props.cocktail.drinks[0].strMeasure14,
      props.cocktail.drinks[0].strMeasure15,
    ],
  }

  return (
    <React.Fragment>
      <Head>
        <title> {`${props.cocktail.drinks[0].strDrink} • MyCocktails`} </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={`Cocktail recipe : ${props.cocktail.drinks[0].strDrink}`} />
        <meta name="robots" content="noodp" />
        <meta name="keywords" content="drink, alcohol, boisson, cocktail, wine, gin, tequilla, vodka, whisky, curacao, schnapps" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${props.cocktail.drinks[0].strDrink} • MyCocktails`} />
        <meta property="og:description" content={`Cocktail recipe : ${props.cocktail.drinks[0].strDrink}`} />
        <meta property="og:site_name" content="MyCocktails" />
        <meta property="og:image" content="" />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo(props.cocktail.drinks[0], ingredients)) }}
        />
      </Head>
      <Menu />
      <CocktailContent
        data={props.cocktail.drinks[0]}
        ingredients={ingredients}
      />
      <Footer />
    </React.Fragment>
  )
}

export async function getStaticPaths() {
  const config = {
    method: 'GET',
    headers: {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    }
  }
  const response = await fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic', config)
  const jsonData = await response.json()

  const paths = jsonData.drinks.map((data) => ({
    params: {
      id: data.idDrink,
    }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  const config = {
    method: 'GET',
    headers: {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    }
  }
  const response = await fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${params.id}`, config)
  const cocktail = await response.json()

  return {
    props: {
      cocktail,
    },
  }
}