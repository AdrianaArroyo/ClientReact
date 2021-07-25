import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { SupplieItem } from './SupplieItem';
import { useFetchApi } from '../hooks/useFetchApi'


export const SuppliesGrid = () => {
    const [products, loading, error] = useFetchApi(`products`)

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
                products.map(product => (
                    <SupplieItem
                        key={product.codigo_producto}
                        {...product}
                    />
                ))
            }

        </div>
    )
}



