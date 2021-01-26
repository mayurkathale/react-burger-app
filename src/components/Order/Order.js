import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span 
            key={ig.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #cccccc',
                padding: '5px'
            }} >{ig.name} ({ig.amount})</span>
    });

    return (
        <div className={classes.Order} key={props.id}>
            <p>{ingredientOutput}</p>
            <p>Price: USD <strong>{props.price}</strong></p>
        </div>
    )
}
    


export default order;