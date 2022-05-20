import React from 'react'
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

import {useHistory} from 'react-router'
const UserList = () => {
    const users = [1,2,3,4,5,6]

    const router = useHistory()
    

    const userHandler = (id)=>{
        router.push('/admin/name/' + id)
    }

  return (
        <Container fluid>

            {users.map((user)=>  <Col style={{cursor:'pointer'}} onClick={()=>userHandler(user)} key={user} md="12">
            <Card className="card-user">
              <div className="card-image">
               
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              
            </Card>
          </Col>  )}
    
        

    </Container>

  )
}

export default UserList