import React,{useEffect,useState} from "react";
import Recipe from './Recipe'
import './App.css';

const App=()=>{
  const APP_ID='994bafca';
  const APP_KEY="0897c17d6f9292643fdb3adae9430672";
  const[counter,setCounter]=useState(0);
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("")
  const[query,setQuery]=useState("chicken");
  const ExampleReq=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(()=>{
    getRecipes()
  },[query])
  const getRecipes=async()=>{
    const response = await fetch(ExampleReq)
    const data= await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }
  const update=e=>{
    setSearch(e.target.value)
    console.log(search)
  }
  const getSearch = e=>{
    e.preventDefault();
    setQuery(search)
    setSearch('')

  }
  return(
    <div className='App'>
      <div>
        <center><h2>My React API</h2></center>
      </div>
      <form onSubmit={getSearch} className='search-form'>
        
        <input type="text" className='search-bar' value={search} onChange={update} placeholder=":)"/>
        <button type='submit' className='search-button'>Search </button>
      </form>
      <div className="myclass">
      {recipes.map(recipe=>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  )
}

export default App;
