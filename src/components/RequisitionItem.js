import React from 'react'
import logo from '../assets/Ganbatte.png'


export const RequisitionItem = ({ numero_requisicion, fecha }) => {
    return (
        <div className="card card-padding">
            <img src={logo} className="card-img-top" alt="gsLogo"></img>
            <div className="card-body">
                <h5 className="card-title">Requisicion: {numero_requisicion}</h5>
                <p className="card-text">Fecha: {fecha}</p>
                <div className="card-button">
                    <a href={`/requisitions/${numero_requisicion}`} className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </div>
    )
}