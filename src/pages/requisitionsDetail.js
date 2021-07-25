import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useFetchApi } from '../hooks/useFetchApi'
import { Table } from 'react-bootstrap';
import { useParams } from "react-router-dom";


export const RequisitionsDetail = () => {
    const { id } = useParams();
    const [requisition, loading, error] = useFetchApi(`requisitions/${id}`)
    let productsCount = 0;
    if (error) {
        return <h1>{error.message}</h1>
    }

    return loading ? (
        <Spinner animation="border" variant="success">
            <span className="visually-hidden">Loading...</span>
        </Spinner>) : (
        <div className="div-padding section">
            <div className="btn-new"> <a  className="btn btn-danger" href="/requisitions" role="button">Regresar</a></div>
            <div className="card mb-3">
            
                <div className="card-body">
                    <h5 className="card-title">{requisition.numero_requisicion}</h5>
                    <p className="card-text">Fecha: {requisition.fecha} </p>    
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
                        requisition.productos.map(producto => (
                            <tr key={requisition.codigo} className="table-colors">
                                <td className="table-colors">{productsCount++}</td>
                                <td className="table-colors">
                                    {requisition.codigo}
                                </td>
                                <td className="table-colors">
                                    {requisition.cantidad}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )

}
