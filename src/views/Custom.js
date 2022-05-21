import React, { Fragment, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";


import { useParams} from 'react-router'
import InputComponent from "../components/InputComponent/InputComponent";

function Customization() {

const params = useParams()

    const [vehicleName, setVehicleName] = useState("")
    const [year, setyear] = useState("")
    const [image, setimage] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")
    const [transmission, settransmission] = useState("")
    const [fuelType, setfuelType] = useState("")
    const [seats, setseats] = useState("")
    const [ac, setac] = useState("")

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [defaultPassword, setdefaultPassword] = useState("")

    const [isNext, setIsNext] = useState(false)


     

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">General Custermization</Card.Title>
              </Card.Header>

              <hr />
              <Card.Body>
                <Form>
                

                    <InputComponent  label="Car Brand" value={vehicleName} setValue={setVehicleName}  />
                    
                   <div style={{textAlign:'end'}}>
                    <Button
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                    onClick={()=>setIsNext(false)}

                  >
                    Add Car Brand

                    </Button>
                    </div>
                  
                  

                  
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </Fragment>
  );
}

export default Customization;
