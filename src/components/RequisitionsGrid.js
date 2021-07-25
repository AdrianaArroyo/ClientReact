import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { RequisitionItem } from './RequisitionItem'
import { useFetchApi } from '../hooks/useFetchApi'


export const RequisitionsGrid = () => {
    const [requisitions, loading, error] = useFetchApi(`requisitions`)

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
                requisitions.map(requisition => (
                    <RequisitionItem
                        key={requisition.numero_requisicion}
                        {...requisition}
                    />
                ))
            }
        </div>
    )
}

