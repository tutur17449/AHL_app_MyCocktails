import Menu from '../components/navbar/index'
import Footer from '../components/footer/index'
import Main from '../sections/home/main'
import SearchBar from '../sections/home/searchBar'
import Cocktails from '../sections/home/displayCocktails'

export default function Home(props){
    console.log(props)
    return(
      <React.Fragment>
        <Menu />
        <Main />
        <SearchBar />
        <Cocktails 
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
      jsonData,
    },
  }
}