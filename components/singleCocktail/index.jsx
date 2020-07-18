import HrTitle from '../hrTitle/index'
import DisplayIngredients from '../displayIngredients/index'
import EventIcon from '@material-ui/icons/Event'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import './index.scss'

export default function CocktailContent(props) {
    return (
        <div className="content">
            <div className="container pt-0 pt-lg-5 pb-0 pb-lg-5">
                <div className="row bg-white-custom pt-5 pt-lg-3 border-radius">
                    <div className="col-12 col-lg-8 m-auto pb-5">
                        <h1 className="text-center title-cocktail">{props.data.strDrink}</h1>
                    </div>
                    <div className="col-12 col-lg-8 m-auto text-center pb-5">
                        <p>
                            <EventIcon /> {new Date(props.data.dateModified).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="col-12 col-lg-5 m-auto">
                        <p className="cocktail-info border-radius p-1 text-center">
                            {props.data.strAlcoholic} | {props.data.strCategory}
                        </p>
                        <img className="img img-fluid cocktail-img" src={props.data.strDrinkThumb}></img>
                    </div>
                    <div className="col-12 col-lg-6 m-auto pt-5 pt-lg-0">
                        <h2>Instructions</h2>
                        <HrTitle />
                        <p>
                            <LocalBarIcon /> {props.data.strGlass}
                        </p>
                        <p>{props.data.strInstructions || 'No data ...'}</p>
                        <hr />
                        <h2>Ingredients</h2>
                        <HrTitle />
                        <DisplayIngredients 
                            ingredients={props.ingredients}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}