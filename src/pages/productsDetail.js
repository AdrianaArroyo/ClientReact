import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useFetchApi } from '../hooks/useFetchApi'
import { Table } from 'react-bootstrap';
import { useParams } from "react-router-dom";



export const ProductsDetail = () => {
    const { id } = useParams();
    const [product, loading, error] = useFetchApi(`products/${id}`)

    if (error) {
        return <h1>{error.message}</h1>
    }
    console.log(product);

    return loading ? (
        <Spinner animation="border" variant="success">
            <span className="visually-hidden">Loading...</span>
        </Spinner>) : (
        <div className="div-padding section">
             <div className="btn-new"> <a  className="btn btn-danger" href="/" role="button">Regresar</a></div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{product.nombre_producto}</h5>
                    <p className="card-text">Codigo: {product.codigo_producto} </p>
                    <p className="card-text">Existencia: {product.existencia} </p>     
                </div>
            </div>
            <h4 className="text-white tittle-center">Movimientos</h4>
            <Table >
                <thead>
                    <tr className="table-colors">
                        <th>#</th>
                        <th>Codigo</th>
                        <th>Tipo</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.movimientos.map((movimiento, index) => (
                            <tr key={movimiento.codigo_movimiento} className="table-colors">
                                <td className="table-colors">{index}</td>
                                <td className="table-colors">
                                    {movimiento.codigo_movimiento}
                                </td>
                                <td className="table-colors">
                                    {movimiento.tipo}
                                </td>
                                <td className="table-colors">
                                    {movimiento.cantidad_movimiento}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
               
            </Table>
        </div>
    )

}
