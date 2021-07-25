import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import { postSupplie } from '../helpers/postSupplie';
import { useForm } from '../hooks/useForm'
import { successAlert } from '../layouts/successAlert';

export const SuppliesForm = () => {

    const [valuesForm, handleInputChange, restartForm] = useForm({
        name: ''
    })

    const {name} = valuesForm;

    const saveData = (e) => {
        e.preventDefault();
        postSupplie(valuesForm);
        restartForm( {
            name: '', 
        });
        successAlert('Suministro agregado');
    }

    return (
        <>
            <div className="section div-padding ">
               <div>
                   <Row>
                       <Col xs="3"></Col>
                       <Col xs="6">
                           <h4 className="text-white">Agregar nuevo suministro</h4>
                           <Form onSubmit={saveData}>
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
                                 <Button className = " btn-margin-top btn btn-success" type="submit">Guardar</Button>
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