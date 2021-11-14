import React from "react";
import { Row, Col, Image, Button, Card } from 'react-bootstrap';
import './paciente.css'
const paciente = () => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    

    return(
        <Card className="mx-auto" style={{ width: '30rem' }}>
            <Card.Header>
                <Row>
                        <Col className="text-center">
                            <Image className="my-1" src="UserIcon.png" roundedCircle/>
                            <h2>Nombre del paciente</h2>
                            <h4>Edad:x</h4>
                        </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <div className="container">
                    <div className="d-flex justify-content-between mx-4 mb-3">
                        <Button variant="primary" size="lg" block>Abrir diario</Button>
                        <div className="todate text-center my-auto border border-2 border-primary rounded p-2 fw-bold" style={{display: 'inline-block' }}>{dia +"/"+ mes +"/"+ año}</div>
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <div className="d-inline-flex">
                        <ul className="dosis">
                            <li className="d-flex justify-content-between">
                                <div>Dosis 1 </div>
                                <div className="form-check form-check-inline">
                                    <input className="ml-0 mt-1 m-auto form-check-input" type="checkbox" id="inlineCheckbox1" value=""/>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between">
                                <div>Dosis 2 </div>
                                <div className="form-check form-check-inline">
                                    <input className="ml-0 mt-1 m-auto form-check-input" type="checkbox" id="inlineCheckbox1" value=""/>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between">
                                <div>Dosis 3 </div>
                                <div className="form-check form-check-inline">
                                    <input className="ml-0 mt-1 m-auto form-check-input" type="checkbox" id="inlineCheckbox1" value=""/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <ul className="dosis">
                            <li>
                                <Button className="my-auto">Agregar medicamento</Button>
                            </li> 
                        </ul>
                        <ul className="dosis">
                            <li>
                                <Button className="my-auto">Agregar recordatorio</Button>
                            </li> 
                        </ul>
                    </div>
                </div>
            </Card.Body>
        </Card>   
    );
}
export default paciente