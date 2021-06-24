import react,{useEffect,useState} from 'react'


function Search() {
    const [search, setSearch] = useState('')
    useEffect(() =>{
        // searchItem()
    },{search})

    const searchItem = async() => {
        const data = await fetch(`https://www.omdbapi.com/?${search}&apikey=ea6a2529`)
        const item = await data.json()
        console.log(item)
    }
  return (
    <div>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      </div>
    </div>
  );
}

export default Search;
