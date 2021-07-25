import React from 'react'
import logo from '../assets/Ganbatte.png'


export const SupplieItem = ({ codigo_producto, nombre_producto, existencia }) => {
    return (
        <div className="card card-padding">
            <img src={logo} className="card-img-top" alt="gsLogo"></img>
            <div className="card-body">
                <h5 className="card-title">{nombre_producto}</h5>
                <p className="card-text">Cantidad existente: {existencia}</p>
                <div className="card-button">
                    <a href={`/products/${codigo_producto}`} className="btn btn-primary">Ver detalles</a>
                    <a href={`/products/updateSupplie/${codigo_producto}`} className="btn btn-success">Actualizar</a>
                    <a href={`/products/delete/${codigo_producto}`} className="btn btn-danger">Eliminar movimientos</a>
                </div>

            </div>
        </div>
    )
}


