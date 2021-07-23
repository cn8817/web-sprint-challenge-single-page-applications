import React from 'react'

export default function Pizzas({ details }) {
    if(!details) {
        return <h3>Loading your pizza...</h3>
    }

    return (
        <div className= 'pizza container'>
            <h2>{details.name}'s Pizza</h2> 
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((top, index) => <li key={index}>{top}</li>)}
                    </ul>
                </div>
            }
            <p>Substitute: {details.substitute}</p>
            <p>Special Instructions: {details.instructions}</p>
        </div>
    )
}