export default function Ingredients(props){
    return(
        <ul>
            {props.ingredients.ingredients.slice(0,props.ingredients.ingredients.length).map((i, id) => (
                props.ingredients.ingredients[id] !== null && typeof props.ingredients.ingredients[id] !== 'undefined' && (
                    props.ingredients.measures[id] !== null && typeof props.ingredients.measures[id] !== 'undefined') && (
                        <li key={id}>{props.ingredients.ingredients[id]} | {props.ingredients.measures[id]}</li> 
                    )
                )
            )}
        </ul>
    )
}
