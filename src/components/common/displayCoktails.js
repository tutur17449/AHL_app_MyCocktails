import displayCoktail from './displayCoktail'

export default (element, data) => {

    const render = () => {
        data.drinks.map( i => {
            const coktailCard = document.createElement('div')
            coktailCard.setAttribute('ref-id', i.idDrink)
            coktailCard.classList.add('col-md-4')
            coktailCard.innerHTML = `
                <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src=${i.strDrinkThumb}>
                <div class="card-body">
                    <h6> ${i.strDrink} </h6>
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary btn-show"> voir + </button>
                        </div>
                    </div>
                </div>         
            `
            element.appendChild(coktailCard)
            coktailCard.addEventListener('click', (e) => {
                console.log(i)
                //displayCoktail(element, i)
            })
        })
    }

    return render()

}
