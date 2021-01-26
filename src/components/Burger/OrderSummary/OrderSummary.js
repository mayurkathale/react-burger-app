import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/UI/Button/Button';

class OrderSummary extends Component {
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>{igKey} : {this.props.ingredients[igKey]}</li>
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </Aux>
        )
    }
};

export default OrderSummary;