import Movie from './components/Movie';
import './App.css';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import SearchedItem from './components/SearchedItem';
import {Link} from 'react-router-dom'
function App() {

  const [dataitem,setDataitem] = useState([]);
    
  useEffect(() =>{
      newItems()
  },[])
  const newItems = async () => {
      const datas = await fetch("https://www.omdbapi.com/?s=movies&apikey=ea6a2529")
      const item = await datas.json()
      setDataitem(item.Search)
  }
  return (
    <div>
       <Header/>
       <Switch>
        <Route exact path="/">
      <div className=" container my-2 d-flex fixed">
      {dataitem.map((elem,ind) => (
        <Link to={`/${elem.Title}`}>
          <Movie
          key={ind}
          img={elem.Poster}
          title={elem.Title}
          year={elem.Year}
          />
        </Link>
      ))}
      </div>
                
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route path="/:title">
        <SearchedItem />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
