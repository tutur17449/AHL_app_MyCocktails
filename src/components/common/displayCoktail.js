import { closeLoading } from "../../tools/displayLoading"

export default (element, data) => {

    const printIngredients = (data, ingredients) => {
        const allIngredients = {
            ingredients: [
                data.drinks[0].strIngredient1,
                data.drinks[0].strIngredient2,
                data.drinks[0].strIngredient3,
                data.drinks[0].strIngredient4,
                data.drinks[0].strIngredient5,
                data.drinks[0].strIngredient6,
                data.drinks[0].strIngredient7,
                data.drinks[0].strIngredient8,
                data.drinks[0].strIngredient9,
                data.drinks[0].strIngredient10,
                data.drinks[0].strIngredient11,
                data.drinks[0].strIngredient12,
                data.drinks[0].strIngredient13,
                data.drinks[0].strIngredient14,
                data.drinks[0].strIngredient15,
            ],
            measures: [
                data.drinks[0].strMeasure1,
                data.drinks[0].strMeasure2,
                data.drinks[0].strMeasure3,
                data.drinks[0].strMeasure4,
                data.drinks[0].strMeasure5,
                data.drinks[0].strMeasure6,
                data.drinks[0].strMeasure7,
                data.drinks[0].strMeasure8,
                data.drinks[0].strMeasure9,
                data.drinks[0].strMeasure10,
                data.drinks[0].strMeasure11,
                data.drinks[0].strMeasure12,
                data.drinks[0].strMeasure13,
                data.drinks[0].strMeasure14,
                data.drinks[0].strMeasure15,
            ],            
        }
        
        for(let i=0; i <= allIngredients.ingredients.length; i++){
            if(allIngredients.ingredients[i] !== null && typeof allIngredients.ingredients[i] !== 'undefined'){
                if(allIngredients.measures[i] !== null && typeof allIngredients.measures[i] !== 'undefined'){
                    ingredients.innerHTML += `
                        <li itemprop="recipeIngredient" class="description">${allIngredients.ingredients[i]}  ( ${allIngredients.measures[i]} )</li>               
                    `                    
                } else {
                    ingredients.innerHTML += `
                        <li itemprop="recipeIngredient" class="description">${allIngredients.ingredients[i]}</li>               
                    `                        
                }               
            }
        }

        closeLoading()
    }

    const render = () => {
        element.innerHTML = ''
        const coktailCard = document.createElement('div')
        coktailCard.setAttribute('ref-id', data.drinks[0].idDrink)
        coktailCard.setAttribute('itemscope', true)
        coktailCard.setAttribute('itemtype', 'http://schema.org/Recipe')
        coktailCard.classList.add('col-md-5', 'ml-auto', 'mr-auto')
        coktailCard.innerHTML = `
                <div class="card mb-5 shadow-sm ml-auto mr-auto">
                    <div class="card-header text-center">
                        <h3 itemprop="name"> ${data.drinks[0].strDrink} </h3> 
                    </div>
                    <img title="${data.drinks[0].strDrink}" itemprop="image" class="bd-placeholder-img card-img-top" alt="coktail ${data.drinks[0].strDrink}"  width="100%" height="225" src=${data.drinks[0].strDrinkThumb}>
                    <div class="card-body">
                        <div class="d-flex flex-column justify-content-between align-items-center">
                            <h6 class="recip"> Recettes </h6>
                            ${data.drinks[0].strInstructionsFR !== null ? 
                                `<span itemprop="recipeInstructions" class="description mb-5">${data.drinks[0].strInstructionsFR}</span>` 
                                : 
                                `<span itemprop="recipeInstructions" class="description mb-5">${data.drinks[0].strInstructions}</span>` 
                            }
                            <h6 class="ingredients"> Ingrédients </h6>
                            <ul id="ingredients-list"> </ul>
                        </div>
                    </div>   
                    <div class="card-footer">
                        <small class="text-muted">
                            Alcool : ${data.drinks[0].strAlcoholic} ||
                            Catégorie : ${data.drinks[0].strCategory}                      
                        </small>
                    </div>    
                </div>  
            `
        element.appendChild(coktailCard)
        let ingredients = document.querySelector('#ingredients-list')
        printIngredients(data, ingredients)
    }

    return render()

}