//manejo de formularios 
import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const restartForm = (restartState) => {
        setValues(restartState);
    }
    
    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [target.name]: target.value

        }, []);
    }

    return [values, handleInputChange, restartForm ]

}
