export default function BgSeparator(props){

    const style = {
        width: '100%',
        margin: 'auto',
        padding: '5rem 0',
        background: `linear-gradient(180deg, ${props.colorFirst} 50%, ${props.colorSecond} 50%)`
    }

    return(
        <div style={style}>
            {props.children}
        </div>
    )
}
