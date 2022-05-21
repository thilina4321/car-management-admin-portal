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

function NewUser() {

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
                <Card.Title as="h4">Making User By Admin</Card.Title>
              </Card.Header>

              <hr />
              <Card.Body>
                <Form>
                { isNext == false &&  <Fragment> <Card.Title as="h4"> User Details </Card.Title>
                  <Row>
                    <InputComponent md="6" label="First Name" value={vehicleName} setValue={setVehicleName}  />
                    <InputComponent md="6" label="Last Name" value={vehicleName} setValue={setVehicleName}  />
                   
                    
                  </Row>
                  <InputComponent  label="Email" value={vehicleName} setValue={setVehicleName}  />
                  <InputComponent  label="Default Password" value={vehicleName} setValue={setVehicleName}  />
                  <div style={{textAlign:'end'}}>

                  <Button
                    onClick={()=>setIsNext(true)}
                    style={{margin:'1rem'}}
                    className="btn-fill pull-right"
                    variant="info"
                  >
                    Next
                  </Button>
                  </div>

                  </Fragment>}

                  { isNext && <Fragment>
                    <Card.Title as="h4"> Car Details </Card.Title>
                    <InputComponent  label="Vehicle Name" value={vehicleName} setValue={setVehicleName}  />
                    <InputComponent  label="year" value={year} setValue={setyear}  />
                    <InputComponent  label="price" type="number" value={price} setValue={setprice}  />
                    <InputComponent  label="description" value={description} setValue={setdescription}  />
                    <InputComponent  label="transmission" value={transmission} setValue={settransmission}  />
                    <InputComponent  label="fuel type" value={fuelType} setValue={setfuelType}  />
                    <InputComponent  label="seat" value={seats} setValue={setseats}  />
                    <InputComponent  label="ac" value={ac} setValue={setac}  />
                   <div style={{textAlign:'end'}}>
                    <Button
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                    onClick={()=>setIsNext(false)}

                  >
                    Previous
                  </Button><Button
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                  >
                    Create User
                  </Button>
                  </div>
                  </Fragment> }
                  

                  
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

export default NewUser;
