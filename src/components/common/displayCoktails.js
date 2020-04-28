import displayCoktail from './displayCoktail'
import { FETCHrequest } from '../../tools/fetchClass'
import { openLoading, closeLoading } from '../../tools/displayLoading'
import { displayMsg } from '../../tools/displayMsg'
import ScrollReveal from 'scrollreveal'
import lozad from 'lozad'


export default (element, data, search = null) => {

    const stepData = {
        currentStep: 0,
        maxStep: data.drinks.length,
        step: 16,
        data: data,
        nextStep: 16
    }

    const getSingleCoktail = (element, id) => {
        const allCoktailsApiUrl = `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`
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

    const printLazyData = (element, stepData) => {
        if (stepData.maxStep !== 0) {
            let nbRes = 0
            for (stepData.currentStep; stepData.currentStep < stepData.nextStep; stepData.currentStep++) {
                const coktailPreview = document.createElement('div')
                coktailPreview.setAttribute('ref-id', stepData.data.drinks[stepData.currentStep].idDrink)
                coktailPreview.classList.add('col-9', 'mr-auto', 'ml-auto', 'col-md-3', 'card-reveal')
                coktailPreview.innerHTML = `
                    <div class="card mb-3 shadow-sm">
                    <img 
                        title="${stepData.data.drinks[stepData.currentStep].strDrink}" 
                        class="bd-placeholder-img card-img-top coktail-img lozad" 
                        alt="coktail ${stepData.data.drinks[stepData.currentStep].strDrink}" 
                        width="100%" 
                        height="225" 
                        data-src="${stepData.data.drinks[stepData.currentStep].strDrinkThumb}/preview"
                    >
                    <div class="card-body">
                        <h6 class="mt-2"> ${stepData.data.drinks[stepData.currentStep].strDrink} </h6>
                        <div class="d-flex justify-content-end align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary btn-show"> show more </button>
                            </div>
                        </div>
                    </div> 
                    `
                nbRes++
                element.appendChild(coktailPreview)
            }
            stepData.step = (stepData.maxStep - stepData.currentStep) > 16 ? 16 : (stepData.maxStep - stepData.currentStep)
            stepData.nextStep = stepData.currentStep + stepData.step
            ScrollReveal().reveal('.card-reveal')
            const observer = lozad()
            observer.observe()
            onHandleClick()
            closeLoading()

            if (nbRes === 0) {
                element.innerHTML = `
                    <div class="col-md-4">
                        <p> No result found </p>
                    </div>
                `
            }
        }
    }

    const onHandleClick = () => {
        const cocktailsElementList = document.querySelectorAll('.card-reveal')
        cocktailsElementList.forEach(cocktailElement => {
            cocktailElement.addEventListener('click', () => {
                const id = cocktailElement.getAttribute('ref-id')
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

    const render = () => {
        openLoading()
        element.innerHTML = ''
        const btnShow = document.createElement('button')
        btnShow.classList.add('btn', 'btn-lazy')
        btnShow.innerHTML = 'Show more'
        printLazyData(element, stepData)
        element.appendChild(btnShow)
        btnShow.addEventListener('click', () => {
            console.log(stepData)
            openLoading()
            if (data.drinks.length === stepData.nextStep) {
                element.removeChild(btnShow)
                printLazyData(element, stepData)
            } else {
                element.removeChild(btnShow)
                printLazyData(element, stepData)
                element.appendChild(btnShow)
            }
        })
    }

    return render()

}
