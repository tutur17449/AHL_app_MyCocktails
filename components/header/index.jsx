export default function Header(props){
    return(
        <div className="container mt-5 mt-lg-0">
            <div className="row">
                <div className="col-12 col-lg-6 m-auto">
                    <h1 className="m-3">{props.mainTitle}</h1>
                    <h2 className="m-3">{props.subTitle}</h2>
                    <p className="m-3">{props.otherContent}</p>
                </div>
                <div className="col-12 col-lg-6 m-auto">
                    <img className="img img-fluid" src={props.path} alt={props.mainTitle}></img>
                </div>
            </div>
        </div>
    )
}