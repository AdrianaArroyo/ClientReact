import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { OrderItem } from './OrderItem';
import { useFetchApi } from '../hooks/useFetchApi'


export const OrdersGrid = () => {
    const [orders, loading, error] = useFetchApi(`orders`)

    if (error) {
        console.log(error);
        return <h1>{error.message}</h1>
    }
    return loading ? (
        <Spinner animation="border" variant="success">
            <span className="visually-hidden">Loading...</span>
        </Spinner>) : (
        <div className="card-grid">
            {
                orders.map(order => (
                    <OrderItem
                        key={order.numero_orden}
                        {...order}
                    />
                ))
            }
        </div>
    )
}

