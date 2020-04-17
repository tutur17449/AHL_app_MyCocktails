import { FETCHrequest } from '../tools/fetchClass';
import displayCoktails from './main/displayCoktails';

export default (element) => {

    const getCoktails = (element) => { 
        const allCoktailsApiUrl = `https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic`
        const apiUrl = new FETCHrequest(allCoktailsApiUrl, 'GET', null, process.env.API_KEY)
        apiUrl.fetch()
        .then(data => {
            console.log(data)
            return displayCoktails(element, data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const render = () => {
        element.innerHTML += `
        <section class="text-center">
            <div class="container-fluid">
                <h1>My Coktails</h1>
                <p class="lead text-muted pt-5 pb-5">
                    Une envie de coktail ? Vous êtes au bon endroit ! Venez découvrir une gamme riche de +100 recettes de coktails à réaliser vous même. <br>
                    Trouvez un coktail en fonction d'ingrédients ou tout simplement à partir de son nom ! <br>
                    Bon apéro !
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <h2> Liste des coktails </h2>
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