import React from 'react'
import { RequisitionsGrid } from '../components/RequisitionsGrid';


export const Requisitions = () => {
    return (
        <>
            <a href={`/newRequisition`} className="btn-new btn btn-success">Agregar Requisicion</a>
            <hr />
            <hr />
            <hr />
            <ol className="background-pages">
                <div className="tittle-supplies">
                <h4>Requisiciones: </h4>
                </div>
            < RequisitionsGrid/>
            </ol>
        </>
    );

}
