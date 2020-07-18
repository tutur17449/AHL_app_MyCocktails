import Menu from '../components/navbar/index'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import Preview from '../components/homePreview/index'
import BgSeparator from '../components/bgSeparator/index'

export default function Home(props) {
  console.log(props.jsonDataAlc)
  return (
    <React.Fragment>
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