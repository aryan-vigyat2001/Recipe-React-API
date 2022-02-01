import React from 'react';
import style from './recipe.module.css'
const Recipe=(props)=>{
    return (
        <div className={style.recipe}>
            <span><h1>{props.title}</h1></span>
            <p>Calorie Content = {props.calories.toFixed(2)}</p>
            <img className={style.image} src={props.image} alt=''/>
            <ol>
                {props.ingredients.map(ingredient=>(
                    <li><b>{ingredient.text}</b></li>
                ))}
            </ol>

        </div>
    )
}
export default Recipe;