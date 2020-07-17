import Card from '../../components/card/index'
import './displayCocktails.scss'

export default function Cocktails(props) {

    const [step, setStep] = React.useState(12)

    const onShowMore = () => {
        setStep(step+12)
    }

    return (
        props.data.drinks.length > 0 ? (
            <div id="cocktails">
                <div className="container text-center">
                    <div className="row">
                        {props.data.drinks.slice(0, step).map( (i,id) => (
                            <Card 
                                key={id}
                                cocktail={i}
                            />
                        ))}
                    </div>
                    <button className="btn btn-custom" onClick={onShowMore}>Show More</button>
                </div>
            </div>
        ) : (
            <p>No data ...</p>
        )

    )
}