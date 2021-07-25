import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useFetchApi } from '../hooks/useFetchApi'
import { Table } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { deleteMovements } from '../helpers/deleteMovements'
import Swal from 'sweetalert2'

export const DetailsMovements = () => {
    const { id } = useParams();
    const [product, loading, error] = useFetchApi(`products/${id}`)
    if (error) {
        return <h1>{error.message}</h1>
    }

    const deleteData = () => {
        Swal.fire({
            title: '¿Desea eliminar los movimientos?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Eliminar`,
            denyButtonText: `NO eliminar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteMovements(id);
                Swal.fire('Movimientos eliminados!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Movimientos no eliminados', '', 'info')
            }
        })
    }

    return loading ? (
        <Spinner animation="border" variant="success">
            <span className="visually-hidden">Loading...</span>
        </Spinner>) : (
        <div className="div-padding section">
            <div className="btn-new">
                <a className="btn btn-danger" href="/" role="button">Regresar</a>
            </div>
            <div className="btn-new">
                <button type="button" className="btn btn-warning" onClick={deleteData}>Eliminar</button>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{product.nombre_producto}</h5>
                    <p className="card-text">Código: {product.codigo_producto} </p>
                    <p className="card-text">Existencia: {product.existencia} </p>
                </div>
            </div>
            <h4 className="text-white tittle-center">Movimientos</h4>
            <Table >
                <thead>
                    <tr className="table-colors">
                        <th>#</th>
                        <th>Código</th>
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
