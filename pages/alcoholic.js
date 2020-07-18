import Menu from '../components/navbar/index'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import DisplayCocktails from '../components/displayCocktails/index'
import Head from 'next/head'
import seo from '../tools/seo'

export default function Alcoholic(props) {
  return (
    <React.Fragment>
      <Head>
        <title> Alcoholic • MyCocktails • AHL App </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Find and discover alcoholic cocktail recipes to make yourself." />
        <meta name="robots" content="noodp" />
        <meta name="keywords" content="drink, alcohol, boisson, cocktail, wine, gin, tequilla, vodka, whisky, curacao, schnapps" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alcoholic • MyCocktails • AHL App" />
        <meta property="og:description" content="Find and discover alcoholic cocktail recipes to make yourself." />
        <meta property="og:site_name" content="MyCocktails" />
        <meta property="og:image" content="" />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo()) }}
        />
      </Head>
      <Menu />
      <Header
        mainTitle="Alcoholic Cocktails"
        subTitle="Find and discover recipes to make yourself."
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