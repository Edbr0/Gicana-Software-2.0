
import React, { useState, useEffect } from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button, FormGroup, Label, Input, Modal, ModalBody, Alert } from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faPen } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import axios from 'axios'

const baseUrl = 'http://localhost:5000' //process.env.BASE_URL_API

function Equipes() {
  const [open, setOpen] = useState(false);
  const [focusAfterClose, setFocusAfterClose] = useState(true);
  const [teams, updateTeams] = useState([]);
  const [colors, updateColors] = useState([]);
  const [color, setColor] = useState([]);
  const [team, setTeam] = useState([]);
  const [teamId, setTeamId] = useState([]);
  const [feedbackColor, setFeedbackColor] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState([]);
  const [feedbackIsOpen, setFeedbackIsOpen] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);




  const getAllTeams = async () => {// buscar todas as Equipes
    try {
      const allTeams = await fetch(baseUrl+'/teams', { method: 'GET' })
      const response = await allTeams.json()
      updateTeams(response.data)
    } catch (error) {
      console.log(error)
    }
    
    
  }

  const getAllCollors = async () => {// buscar todas as Equipes
    const allColors = await fetch(baseUrl+'/colors', { method: 'GET' })
    const response = await allColors.json()
    updateColors(response.data)
    
  }


  const createTeam = async (arg1, arg2) => {
  
    const data = {
      name: arg1,
      color_id: arg2
    }
    const team = await axios.post(baseUrl+'/team', data)
    const response = await team.data
    if(response.success){
      setOpen(false)
      setFeedbackColor('success')
      setFeedbackMessage('Seu time foi criado com sucesso')
      setFeedbackIsOpen(true)
      setTimeout(() => setFeedbackIsOpen(false), 3000)
      getAllTeams()
      return
    }

    setOpen(false)
    setFeedbackColor('fail')
    setFeedbackMessage(response.message)
    setFeedbackIsOpen(true)
    setTimeout(() => setFeedbackIsOpen(false), 3000)
    return
  }

  const editTeam = async (team, color, teamId) => {
   console.log([team, color])
   const data = {
    name:team,
    id_color: color
   }
   const req = await axios.put(baseUrl+'/team/'+teamId, data)
   const response = await req.data
   console.log(response);
   setIsEditMode(false)
   setOpen(false)
   getAllTeams()
    
  }

  const deleteTeam = id => {
     
    Swal.fire({
      title: 'Deseja excluir esse time<i class="fas fa-question-circle"></i>',
      showCancelButton: true,
      confirmButtonText: 'Excluir <i class="fas fa-backspace"></i>',
      confirmButtonColor:'#DC71D4',
      cancelButtonColor:'#25273A',
      cancelButtonText:'Não',
      width:'300px',
      customClass: {
        title: 'font-weight-light',
      }
    }).then(async (result) => {
      if(result.isConfirmed){
        const team = await axios.delete(baseUrl+'/team/'+id)
        const response = await team.data
        if(response.success){
          setFeedbackColor('success')
          setFeedbackMessage('Time removido com sucesso')
          setFeedbackIsOpen(true)
          setTimeout(() => setFeedbackIsOpen(false), 3000)
          getAllTeams()
          return
        }
        setOpen(false)
        setFeedbackColor('fail')
        setFeedbackMessage(response.message)
        setFeedbackIsOpen(true)
        setTimeout(() => setFeedbackIsOpen(false), 3000)
        return
      }
    })
  }

  const toggle = () => setOpen(!open);
  // eslint-disable-next-line
  const handleSelectChange = ({target: { value }}) => {
      setFocusAfterClose(JSON.parse(value));
  }

 const openEditMode = (team) =>{
  setTeam(team.name)
  setTeamId(team.id)
  setColor(team.id_color)
  setIsEditMode(true)
  setOpen(true)
  
 }


  useEffect(()=>{
    getAllTeams()
    getAllCollors()
  },[])



  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h1 className="title">Equipes</h1>
                <p className="category">
                Neste módulo você pode criar e gerenciar equipes
                </p>
              </CardHeader>
              <CardBody className="all-icons">
              <Alert 
              color={feedbackColor}
              isOpen={feedbackIsOpen}
              >
                {feedbackMessage}
              </Alert>
                <Row>
                  <Col
                  className="col-xs-6 col-xs-6"
                  lg="4"
                  md="2"
                  sm="4">
                    <Button
                    onClick={()=> {setColor(0); setTeam(''); setOpen(true); setIsEditMode(false)}}
                    >
                      <div>
                        <i className="tim-icons icon-simple-add"/>
                        <p>Criar nova</p>
                      </div>
                    </Button>
                  </Col>
                </Row>
                <Row>
                    <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Preencha todos os campos
                        </h5>
                          <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                          onClick={()=>{setColor(0); setTeam(''); setIsEditMode(false); toggle()}}
                        >
                          <i className="tim-icons icon-simple-remove" />
                        </button>
                      </div>
                      <ModalBody>
                        <form>
                          <FormGroup>
                            <Label for="exampleEmail1">Nome</Label>
                            <Input
                              type="text"
                              name="team"
                              id="nameTeam"
                              placeholder="Digite o nome da equipe..."
                              className="text-dark"
                              onChange={(e)=>setTeam(e.target.value)}
                              value={team ? team : ''}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect1">Cor</Label>
                            <Input type="select" name="color" className="text-dark" id="selectColor" value={color ? color : 0} onChange={(e)=>setColor(e.target.value)}>
                              <option value="0">Selecione uma cor...</option>
                              {colors.map(color => <option value={color.id}>{color.ds_color}</option>)}
                            </Input>
                          </FormGroup>
                          {!isEditMode ? <Button color="primary" onClick={()=>{createTeam(team, color)}}>
                            Criar
                          </Button> :
                          <Button color="primary" onClick={()=>{editTeam(team, color, teamId)}}>
                            Salvar
                          </Button>
                          }
                        </form>
                      </ModalBody>
                  </Modal>
                </Row>
                <Row>
                  {teams.map(team=>{
                    return (
                      
                      <Col
                     className="font-icon-list col-xs-6 col-xs-6"
                     lg="4"
                     md="4"
                     sm="4"
                   >
                     <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                          style={{marginTop:'18px', marginRight:'5px', color:'red'}}
                          onClick={()=>{deleteTeam(team.id)}}
                        >
                          <FontAwesomeIcon icon={faWindowClose} />
                        </button>
                        <button
                        type="button"
                        className="close" 
                        data-dismiss="modal"
                        aria-hidden="true"
                        style={{marginTop:'18px', marginRight:'5px', color:'yellow'}}
                        onClick={()=>{ openEditMode(team)}}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                     <div className="font-icon-detail" style={{backgroundColor: team.cd_color}}>
                       <h1>{team.name}</h1>
                     </div>
                   </Col>
                    )
                  })
                } 
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </> 
  );
}

export default Equipes;
