import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true,
        erros: false
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then((res) => {
            let fetchedOrders = []
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({orders: fetchedOrders, loading: false});
        })
        .catch((err) => {
            this.setState({loading:false});
        });
    }

    render() {
        return (
            <div>
               {
                   this.state.orders.map(order => (
                       <Order 
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price}
                            deliveryMethod={order.deliveryMethod}
                         />
                   ))
               }
            </div>
        );
    }

}

export default withErrorHandler(Orders, axios);