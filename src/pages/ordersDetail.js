import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useFetchApi } from '../hooks/useFetchApi'
import { Table } from 'react-bootstrap';
import { useParams } from "react-router-dom";


export const OrdersDetail = () => {
    const { id } = useParams();
    const [order, loading, error] = useFetchApi(`orders/${id}`)
    let productsCount = 0;

    if (error) {
        return <h1>{error.message}</h1>
    }

    return loading ? (
        <Spinner animation="border" variant="success">
            <span className="visually-hidden">Loading...</span>
        </Spinner>) : (
        <div className="div-padding section">
            <div className="btn-new"> <a  className="btn btn-danger" href="/orders" role="button">Regresar</a></div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{order.numero_orden}</h5>
                    <p className="card-text">Fecha: {order.fecha} </p>    
                </div>
            </div>
            <h4 className="text-white tittle-center">Productos</h4>
            <Table >
                <thead>
                    <tr className="table-colors">
                        <th>#</th>
                        <th>Codigo</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            order.productos.map(producto => (
                                <tr key={producto.codigo_comprar} className="table-colors">
                                    <td className="table-colors">{productsCount++}</td>
                                    <td className="table-colors">
                                        {producto.codigo_comprar}
                                    </td>
                                    <td className="table-colors">
                                        {producto.cantidad_comprar}
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
        </div>
    )

}
