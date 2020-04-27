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
            return displayCoktail(element, data)
        })
        .catch(error => {
            closeLoading()
            displayMsg('An error has occurred')
        })
    }
    
    const render = () => {
        element.innerHTML += `
        <section id="random" class="text-center">
            <div class="container-fluid">
                <h1> Random Cocktail </h1>
                <p class="lead text-muted pt-5 pb-5">
                    Don't worry (be happy ...), we take care of everything! You will soon be able to enjoy your cocktail
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