import { FETCHrequest } from '../tools/fetchClass'
import displayCoktails from './common/displayCoktails'
import { openLoading, closeLoading } from '../tools/displayLoading'
import { displayMsg } from '../tools/displayMsg'

export default (element) => {

    const getAllCoktailsByName = (element, searchValue) => { 
        const allCoktailsApiUrl = `https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic`
        const apiUrl = new FETCHrequest(allCoktailsApiUrl, 'GET', null, process.env.API_KEY)
        apiUrl.fetch()
        .then(data => {
            return displayCoktails(element, data, searchValue)
        })
        .catch(error => {
            closeLoading()
            displayMsg('An error has occurred')
        })
    }

    const getAllCoktailsByIngredients = (element, ingredientValue) => { 
        const allIngredientsApiUrl = `https://the-cocktail-db.p.rapidapi.com/list.php?i=list`
        const allCoktailsApiUrl = `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredientValue}`
        const apiUrl = new FETCHrequest(allIngredientsApiUrl, 'GET', null, process.env.API_KEY)
        apiUrl.fetch()
        .then(data => {
            let nbCorresp = 0
            data.drinks.map( i => {
                if(i.strIngredient1 === ingredientValue){
                    nbCorresp++
                }
            })
            console.log(nbCorresp)
            if(nbCorresp !==0){
                const secApiUrl = new FETCHrequest(allCoktailsApiUrl, 'GET', null, process.env.API_KEY)
                secApiUrl.fetch()
                .then(response => {
                    return displayCoktails(element, response)
                })
                .catch(error => {
                    closeLoading()
                    displayMsg('An error has occurred')
                })
            } else {
                closeLoading()
                displayMsg('An error has occurred')                
            }
        })
        .catch(error => {
            closeLoading()
            displayMsg('An error has occurred')
        })
    }
    
    const render = () => {
        element.innerHTML += `
        <section id="search" class="text-center">
            <div class="container-fluid">
                <h1> Search a Cocktail </h1>
                <div class="row">
                    <div id="search-form" class="col-md-4 mb-3 mr-auto ml-auto">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                            <label class="custom-control-label" for="customRadioInline1"> by name </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                            <label class="custom-control-label" for="customRadioInline2"> by ingredient </label>
                        </div>
                    </div>
                </div>
                <form>
                    <div class="form-row">
                        <div class="col-md-4 mb-3 mr-auto ml-auto">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend3">#</span>
                                </div>
                                <input type="text" class="form-control" id="searchValue" aria-describedby="inputGroupPrepend3" required>
                            </div>
                            <p>
                                (n\'oubliez pas la majuscule en premier caractère)
                            </p>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-light">Rechercher</button>
                </form>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <h2 class="mb-5"> Result(s) of the research </h2>
                <div id="searchCoktailContainer" class="row">
                    <div class="col-md-4">
                        <p> No research for yet </p>
                    </div>
                </div>
            </div>
        </div>
        `

        const searchCoktailContainer = document.querySelector('#searchCoktailContainer')
        const btnSubmit = document.querySelector('button[type="submit"]')
        btnSubmit.addEventListener('click', (e) => {
            openLoading()
            e.preventDefault()
            const valueToSearch = document.querySelector('#searchValue').value
            const radioBtn1 = document.querySelector('#customRadioInline1')
            const radioBtn2 = document.querySelector('#customRadioInline2')
            let spec = valueToSearch.indexOf('<') + valueToSearch.indexOf('>')

            if(valueToSearch === null || valueToSearch.length === 0 || typeof valueToSearch === 'undefined'){
                closeLoading()
                displayMsg('Please enter a value, your glass is empty !')
            } else {
                if(spec === -2){
                    if(radioBtn1.checked === false && radioBtn2.checked === false){
                        closeLoading()
                        displayMsg('Please check an option')                    
                    } else {
                        if(radioBtn1.checked === true){
                            getAllCoktailsByName(searchCoktailContainer, valueToSearch)
                        } else {
                            getAllCoktailsByIngredients(searchCoktailContainer, valueToSearch)    
                        }                    
                    }
                } else {
                    closeLoading()
                    displayMsg('An error has occurred')                     
                }
            }
        })
    }

    return render ();

}
