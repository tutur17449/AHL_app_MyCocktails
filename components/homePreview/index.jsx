import Card from '../card/index'
import AddCircleIcon from '@material-ui/icons/AddCircle'

export default function HomePreview(props) {
    return (
        props.data.drinks.length > 0 ? (
            <div className={props.bg}>
                <div className="container">
                    <div className="row">
                        {props.data.drinks.slice(0, 9).map((i, id) => (
                            <Card
                                key={id}
                                cocktail={i}
                                source={props.source}
                            />
                        ))}
                        <div className="col-12 text-right mt-3">
                            <a className="nav-link d-flex justify-content-end align-items-center" href={props.source} style={{color: "#000"}}>
                                <AddCircleIcon />
                                <span className="pl-1">Show all cocktails</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <p>No data ...</p>
        )
    )
}
