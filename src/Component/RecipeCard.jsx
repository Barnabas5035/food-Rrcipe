import React from 'react'

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe
  return (
    <div className='card'>
      <img src={strMealThumb} alt={strMeal} className='card-image' />
      <div className='card body'>
        <span className='category'>{strCategory}</span>
        <h3>{strMeal}</h3>
        <h3>{strArea}</h3>
        <a href={'https:///www.themealdb.com/meal/' + idMeal} target='_blank'>
          Ingredient
        </a>
      </div>
    </div>
  )
}

export default RecipeCard
