import './index.scss'

export default function CocktailContent(props){
    console.log(props)
    return(
        <div className="content">
            <div className="container pt-0 pt-lg-5 pb-0 pb-lg-5">
                <div className="row bg-white-custom pt-5 pt-lg-3">
                    <div className="col-12 col-lg-8 m-auto pb-5">
                        <h1 className="text-center">{props.data.strDrink}</h1>
                    </div>
                    <div className="col-12 col-lg-5 m-auto pb-5">
                        <img className="img img-fluid cocktail-img" src={props.data.strDrinkThumb}></img>
                    </div>
                    <div className="col-12 col-lg-8 m-auto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta rerum a. Quos quod unde natus. Neque vero corrupti, vel cum fuga accusantium quisquam ullam odit iure provident deserunt expedita!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}