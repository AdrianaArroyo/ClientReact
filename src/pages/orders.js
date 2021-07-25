import React from 'react'
import { OrdersGrid } from '../components/OrdersGrid';


export const Orders = () => {
    return (
        <>
            <a href={`/newOrder`} className="btn-new btn btn-success">Agregar Orden</a>
            <hr />
            <hr />
            <hr />
            <ol className="background-pages">
                <div className="tittle-supplies">
                <h4>Ordenes: </h4>
                </div>
            < OrdersGrid/>
            </ol>
        </>
    );
}