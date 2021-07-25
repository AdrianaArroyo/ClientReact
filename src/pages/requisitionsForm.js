import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import { postRequisition } from '../helpers/postRequisition';
import { useForm } from '../hooks/useForm'
import { successAlert } from '../layouts/successAlert';


export const RequisitionsForm = () => {
    
    const [valuesForm, handleInputChange, restartForm] = useForm({
        code: '', 
        amount: ''
    })

    const {code, amount} = valuesForm;
    const amountInt = parseInt(amount);
    const saveData = (e) => {
        e.preventDefault();
        postRequisition([{
            codigo: code,
            cantidad: amountInt 
        }]);
        restartForm( {
            code: '', 
            amount: ''
        });
        successAlert('Requisicion agregada');
    }

    return (
        <>
            <div className="section div-padding ">
               <div>
                   <Row>
                       <Col xs="3"></Col>
                       <Col xs="6">
                           <h4 className="text-white">Agregar nueva requisicion</h4>
                           <Form onSubmit={saveData}>
                               <FormGroup>
                                   <Label>Codigo a requerir</Label>
                                   <Input 
                                   type="text" 
                                   name="code" 
                                   value = {code}
                                   onChange={handleInputChange}/>
                               </FormGroup>
                               <br/>
                               <FormGroup>
                                   <Label>Cantidad</Label>
                                   <Input 
                                   type="text" 
                                   name="amount" 
                                   value = {amount}
                                   onChange={handleInputChange}/>
                               </FormGroup>
                               <FormGroup>
                                 <Button className=" btn-margin-top btn btn-success" type="submit">Guardar</Button>
                                 <a  className="btn-margin-top btn-margin-left btn btn-danger" href="/requisitions" role="button">Regresar</a>
                               </FormGroup>
                           </Form>
                       </Col>
                   </Row>
               </div>
            </div>
        </>
    );

}