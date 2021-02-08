import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
        error: false
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error,
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_ORDER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('orders.json', orderData).then( response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
                //this.props.history.push('/');
            } )
            .catch( error => dispatch(purchaseBurgerFail(error)) );
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrderFail = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        orders: orders
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
} 

export const fetchOrders = () => {
    return dispatch => {
        axios.get('/orders.json')
        .then( res => {
            let fetchedOrders = []
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrderSuccess(fetchedOrders));
            //this.setState({orders: fetchedOrders, loading: false});
        })
        .catch((err) => {
            dispatch(fetchOrderFail(err));
            //this.setState({loading:false});
        });
    }
}