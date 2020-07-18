import Card from '../card/index'
import SearchBar from '../searchBar/index'
import './index.scss'

export default function Cocktails(props) {

    const [step, setStep] = React.useState(12)
    const [valueToSearch, setValueToSearch] = React.useState('')

    const onShowMore = () => {
        setStep(step+12)
    }

    return (
        <React.Fragment>
            <SearchBar 
                setValueToSearch={setValueToSearch}
            />
            {valueToSearch !== '' ? (
                props.data.drinks.length > 0 ? (
                    <div className="bg-grey-custom">
                        <div className="container text-center">
                            <div className="row">
                                {props.data.drinks.filter(cocktails => cocktails.strDrink.toLowerCase().includes(valueToSearch)).map( (i,id) => (
                                    <Card 
                                        key={id}
                                        cocktail={i}
                                        source={props.source}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No data ...</p>
                )
            ): (
                props.data.drinks.length > 0 ? (
                    <div className="bg-grey-custom">
                        <div className="container text-center">
                            <div className="row">
                                {props.data.drinks.slice(0, step).map( (i,id) => (
                                    <Card 
                                        key={id}
                                        cocktail={i}
                                        source={props.source}
                                    />
                                ))}
                            </div>
                            {(step > props.data.drinks.length && valueToSearch === '') ? '' : (<button className="btn btn-custom m-3" onClick={onShowMore}>Show More</button>)}
                        </div>
                    </div>
                ) : (
                    <p>No data ...</p>
                )
            )}

        </React.Fragment>
    )
}