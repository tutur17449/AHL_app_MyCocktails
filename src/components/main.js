import { FETCHrequest } from '../tools/fetchClass'
import displayCoktails from './common/displayCoktails'
import { openLoading, closeLoading } from '../tools/displayLoading'
import { displayMsg } from '../tools/displayMsg'
export default (element) => {

    openLoading()

    const getCoktails = (element) => { 
        const allCoktailsApiUrl = `https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic`
        const apiUrl = new FETCHrequest(allCoktailsApiUrl, 'GET', null, process.env.API_KEY)
        apiUrl.fetch()
        .then(data => {
            return displayCoktails(element, data)
        })
        .catch(error => {
            closeLoading()
            displayMsg('An error has occurred')
        })
    }
    
    const render = () => {
        element.innerHTML += `
        <section id="main" class="text-center">
            <div class="container-fluid">
                <h1>My Cocktails</h1>
                <p class="lead text-muted pt-5 pb-5">
                    Want a cocktail? You are in the right place! Come and discover a rich range of +100 cocktail recipes to make yourself. <br>
                    Find a cocktail based on ingredients or simply by name! <br>
                    Good aperitif!
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <h2 class="mb-5"> List of coktails </h2>
                <div id="coktailsContainer" class="row">

                </div>
            </div>
        </div>
        `

        const coktailsContainer = document.querySelector('#coktailsContainer')
        getCoktails(coktailsContainer)

    }

    return render ();

}