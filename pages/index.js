import Menu from '../components/navbar/index'
import Footer from '../components/footer/index'
import Main from '../components/main/main'
import SearchBar from '../components/searchBar/search'
import Cocktails from '../components/cocktails/cocktails'

export default function Home(){
    return(
      <React.Fragment>
        <Menu />
        <Main />
        <SearchBar />
        <Cocktails />
        <Footer />
      </React.Fragment>
    )
}