import { FETCHrequest } from '../tools/fetchClass';
import displayCoktail from './common/displayCoktail';
import { openLoading } from '../tools/displayLoading';

export default (element) => {

    openLoading()

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
        <section id="random" class="text-center">
            <div class="container-fluid">
                <h1> Coktail aléatoire </h1>
                <p class="lead text-muted pt-5 pb-5">
                    Pas de panique, on s'occupe de tout ! Vous pourrez bientôt savourer votre coktail
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <h2 class="mb-5"> I have a drink ... </h2>
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