import React,{useEffect,useState} from 'react'

function SearchedItem() {
    const [rou, setRou] = useState({})
    const url = window.location
    const durl = decodeURI(url.pathname)
    useEffect(() =>{
        fetchitem()
    },[])

    const fetchitem = async() => {
        const data = await fetch(`https://www.omdbapi.com/?s=${durl}&apikey=ea6a2529`)
        const item = await data.json()
        console.log(item.Search)
        setRou(item.Search)
    }

    return (
        <div className="container">
            {rou.map((elem,index) =>{
                return (
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1" key={index}>{elem.Title}</h1>
                <p class="lead">Year: {elem.Year}</p>
                <p className="lead">Type: {elem.Type}</p>
                <p className="lead">imdbID: {elem.imdbID}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                </div>
              </div>
              <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                  <img class="rounded-lg-3" src={elem.Poster} alt="" width="400"/>
              </div>
            </div>
                )
            })}
        </div>
    )
}

export default SearchedItem
