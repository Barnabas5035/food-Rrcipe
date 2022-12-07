import React from 'react'
import SearchBar from './Component/SearchBar'
import RecipeCard from './Component/RecipeCard'
import Fopter from './Component/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

const ApiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const App = () => {
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState('')
  const [recipes, setRecipes] = useState([])

  const fectchData = async () => {
    setLoading(true)
    const url = ApiUrl + item
    const response = await fetch(url)
    const data = await response.json()

    setRecipes(data.meals)
    setLoading(false)
  }
  useEffect(() => {
    fectchData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fectchData()
  }
  return (
    <div className='container'>
      <h2> Our Food Recipes</h2>
      <SearchBar
        handleSubmit={handleSubmit}
        value={item}
        onChange={(e) => setItem(e.target.value)}
        loading={loading}
      />
      <div className='recipes'>
        {recipes
          ? recipes.map((recipe) => {
              return <RecipeCard key={recipe.idMeal} recipe={recipe} />
            })
          : 'No recipe!'}
      </div>
      <Fopter />
    </div>
  )
}

export default App
