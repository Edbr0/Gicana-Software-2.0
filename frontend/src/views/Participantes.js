/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Participantes() {

  const [open, setOpen] = useState(false);


  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
          <Button onClick={()=>{ open ? setOpen(false) : setOpen(true) }}>{ open ? 'Cancelar' : 'Cadastrar'}</Button>
            <Card className={open ? '' : 'd-none'}>
              <CardHeader>
                <h5 className="title">Cadastro de participante</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Equipe</label>
                        <Input
                          defaultValue="Sem equipe."
                          placeholder="Equipe"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Status</label>
                          <Input
                            defaultValue="Participante"
                            placeholder="Ex: Lider"
                            type="text"
                          />
                        </FormGroup>
                    </Col>
                    </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Nome</label>
                        <Input
                          placeholder="Ex: mike"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Idade</label>
                        <Input
                          placeholder="Ex: 18"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  
                 
                  
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Salvar
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">Ceo/Co-Founder</p>
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Participantes;
