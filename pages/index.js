import Menu from '../components/navbar/index'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import Preview from '../components/homePreview/index'
import BgSeparator from '../components/bgSeparator/index'
import Head from 'next/head'
import seo from '../tools/seo'

export default function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title> Home • MyCocktails • AHL App </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Want a cocktail? You are in the right place! Discover a rich range of cocktail recipes to make yourself. Find a cocktail based on ingredients or name!" />
        <meta name="robots" content="noodp" />
        <meta name="keywords" content="drink, alcohol, boisson, cocktail, wine, gin, tequilla, vodka, whisky, curacao, schnapps" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home • MyCocktails • AHL App" />
        <meta property="og:description" content="Want a cocktail? You are in the right place! Discover a rich range of cocktail recipes to make yourself. Find a cocktail based on ingredients or name!" />
        <meta property="og:site_name" content="MyCocktails" />
        <meta property="og:image" content="" />
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(seo()) }}
        />
      </Head>
      <Menu />
      <Header
        mainTitle="My Cocktails"
        subTitle="Want a cocktail ? You are in the right place! Come and discover a rich range of +100 cocktail recipes to make yourself."
        otherContent="Find a cocktail based on ingredients or simply by name! Good aperitif!"
        path="./static/images/home.svg"
      />
      <BgSeparator
        colorFirst='#fff'
        colorSecond='#F5F5F5'
      >
        <h3>Alcoholic cocktails</h3>
      </BgSeparator>
      <Preview
        source="alcoholic"
        data={props.jsonDataAlc}
        bg='bg-grey-custom'
      />
      <BgSeparator
        colorFirst='#F5F5F5'
        colorSecond='#fff'
      >
        <h3>Non alcoholic cocktails</h3>
      </BgSeparator>
      <Preview
        source="non-alcoholic"
        data={props.jsonDataNalc}
        bg='bg-white-custom'
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
  const responseAlc = await fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic', config)
  const responseNalc = await fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic', config)
  const jsonDataAlc = await responseAlc.json()
  const jsonDataNalc = await responseNalc.json()

  return {
    props: {
      jsonDataAlc,
      jsonDataNalc
    },
  }
}