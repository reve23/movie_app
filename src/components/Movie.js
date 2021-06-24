
import Header from './Header';


const Movie = (props) => {


    return (
        <div className="movie my-3">
            <div className="container flex-nowrap">
                    <div className="card">
                    <img src={props.img} className="card-img-top images" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title text-dark">{props.title}</h5>
                    <p className="card-text text-dark">{props.year}</p>
                    <a className="btn btn-primary">visit</a>
                </div>
                </div>
            </div>
        </div>
    )
    
}

export default Movie
