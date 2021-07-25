import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import { useForm } from '../hooks/useForm'
import { successAlert } from '../layouts/successAlert';
import { useParams } from "react-router-dom";
import { updateSupplie }from '../helpers/updateSupplie'


export const UpdateSupplie = () => {
    const { id } = useParams();
    
    const [valuesForm, handleInputChange, restartForm] = useForm({
        name: ''
    })

    const {name} = valuesForm;
    const update = {name, id}
    
    const updateData = (e) => {
        e.preventDefault();
        updateSupplie(update);
        restartForm( {
            name: '', 
        });
        successAlert('Suministro actualizado');
    }

    return (
        <>
            <div className="section div-padding ">
               <div>
                   <Row>
                       <Col xs="3"></Col>
                       <Col xs="6">
                           <h4 className="text-white">Actualizar suministro</h4>
                           <Form onSubmit={updateData}>
                               <FormGroup>
                                   <Label>Nombre</Label>
                                   <Input 
                                   type="text" 
                                   name="name" 
                                   value = {name}
                                   onChange={handleInputChange}/>
                               </FormGroup>
                               <br/>
                               <FormGroup>
                                 <Button className = "btn-margin-top btn btn-success" type="submit">Guardar</Button>
                                 <a  className="btn-margin-top btn-margin-left btn btn-danger" href="/" role="button">Regresar</a>
                               </FormGroup>
                           </Form>
                       </Col>
                   </Row>
               </div>
            </div>
        </>
    );

}