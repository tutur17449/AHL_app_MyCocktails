import Menu from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import CocktailContent from '../../components/singleCocktail/index'

export default function AlcoholicCocktail(props){
  
    return(
      <React.Fragment>
        <Menu />
        <CocktailContent 
          data={props.cocktail.drinks[0]}
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

export async function getStaticProps({params}) {
  
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