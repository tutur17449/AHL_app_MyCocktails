import Menu from '../components/navbar/index'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import DisplayCocktails from '../components/displayCocktails/index'

export default function Alcoholic(props){
    return(
      <React.Fragment>
        <Menu />
        <Header 
          mainTitle="Alcoholic Cocktails"
          subTitle="Want a cocktail ? You are in the right place! Come and discover a rich range of +100 cocktail recipes to make yourself."
          path="./static/images/alcoholic.svg"
        />
        <DisplayCocktails 
          source="alcoholic"
          data={props.jsonData}
        />
        <Footer />
      </React.Fragment>
    )
}

export async function getStaticProps() {
  const config = {
    method: 'GET',
    headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY,
    }
  }
  const response = await fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic', config)
  const jsonData = await response.json()

  return {
    props: {
        jsonData
    },
  }
}