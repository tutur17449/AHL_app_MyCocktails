import displayCoktail from './displayCoktail'
import { FETCHrequest } from '../../tools/fetchClass'
import { openLoading, closeLoading } from '../../tools/displayLoading'

export default (element, data) => {

    const getSingleCoktail = (element, id) => {
        const allCoktailsApiUrl = `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`
        const apiUrl = new FETCHrequest(allCoktailsApiUrl, 'GET', null, process.env.API_KEY)
        apiUrl.fetch()
        .then(data => {
            return displayCoktail(element, data)
        })
        .catch(error => {
            console.log(error)
        })        
    }

    const render = () => {
        data.drinks.map( i => {
            const coktailPreview = document.createElement('div')
            coktailPreview.setAttribute('ref-id', i.idDrink)
            coktailPreview.classList.add('col-md-4')
            coktailPreview.innerHTML = `
                <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top coktail-img" width="100%" height="225" src=${i.strDrinkThumb}>
                <div class="card-body">
                    <h6 class="mt-2"> ${i.strDrink} </h6>
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary btn-show"> voir + </button>
                        </div>
                    </div>
                </div>         
            `
            element.appendChild(coktailPreview)

            closeLoading()

            coktailPreview.addEventListener('click', () => {
                openLoading()
                const id = coktailPreview.getAttribute('ref-id')
                const singleCoktailContainer = document.createElement('div')
                singleCoktailContainer.classList.add('card-coktail', 'open')
                element.appendChild(singleCoktailContainer)

                getSingleCoktail(singleCoktailContainer, id)

                singleCoktailContainer.addEventListener('click', () => {
                    element.removeChild(singleCoktailContainer)
                })
            })
        })
    }

    return render()

}
