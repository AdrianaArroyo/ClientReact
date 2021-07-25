import React from 'react'
import logo from '../assets/Ganbatte.png'


export const OrderItem = ({ numero_orden, fecha }) => {
    return (
        <div className="card card-padding">
            <img src={logo} className="card-img-top" alt="gsLogo"></img>
            <div className="card-body">
                <h5 className="card-title">Orden: {numero_orden}</h5>
                <p className="card-text">Fecha: {fecha}</p>
                <div className="card-button">
                    <a href={`/orders/${numero_orden}`} className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </div>
    )
}