import { FETCHrequest } from '../tools/fetchClass';
import displayCoktail from './common/displayCoktail';

export default (element) => {

    const getRandomCoktail = (element) => { 
        const allCoktailsApiUrl = `https://the-cocktail-db.p.rapidapi.com/random.php`
        const apiUrl = new FETCHrequest(allCoktailsApiUrl, 'GET', null, process.env.API_KEY)
        apiUrl.fetch()
        .then(data => {
            console.log(data)
            return displayCoktail(element, data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const render = () => {
        element.innerHTML += `
        <section class="text-center">
            <div class="container-fluid">
                <h1> Coktail aléatoire </h1>
                <p class="lead text-muted pt-5 pb-5">
                    Une envie de coktail ? Vous êtes au bon endroit ! Venez découvrir une gamme riche de +100 recettes de coktails à réaliser vous même. <br>
                    Trouvez un coktail en fonction d'ingrédients ou tout simplement à partir de son nom ! <br>
                    Bon apéro !
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <h2> I have a drink ... </h2>
                <div id="randomCoktailContainer" class="row">

                </div>
            </div>
        </div>
        `

        const randomCoktailContainer = document.querySelector('#randomCoktailContainer')
        getRandomCoktail(randomCoktailContainer)

    }

    return render ();

}