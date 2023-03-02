import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './App.css';
import { cn2t,cn2in } from './n2w';
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [no,setNo]=useState('');
  const [is,setIs]=useState();
  const[us,setUs]=useState();
  const[to,setTo]=useState("");
  const [lan,setLan]=useState("Tamil");
  const sub=(e)=>{
    setIs(cn2in(no));
    setUs(cn2t(no));
    const data=new Object({
      q:us,
      target:to,
      key: "text"
    })
    axios.post('https://translation.googleapis.com/language/translate/v2',data).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

    e.preventDefault();
  }
  return (
    <Container fluid>
      <Navbar expand="lg">
        <Navbar.Brand href="#" className="mx-auto" style={{color:'white'}}>Number to Multilanguage Convertor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="align-items-center vh-100">
        <Col md={4} sm={3} xs={2}></Col>
        <Col md={4} sm={6} xs={8}>
          <div className="d-flex flex-column align-items-center">
            <form className="w-100">
              <div className="mb-3">
                <label htmlFor="numberInput" className="form-label">
                  Number:
                </label>
                <input type="number" value={no} onChange={(e)=>{setNo(e.target.value)}} className="form-control" id="numberInput" />
                <button onClick={sub} className='button-3'>Submit</button>
              </div>
              <div className="mb-3">
                <label htmlFor="indianStandard" className="form-label">
                  Indian Standard:
                </label>
                <textarea value={is} className="form-control" id="indianStandard"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="usStandard" className="form-label">
                  US Standard:
                </label>
                <textarea value={us} className="form-control" id="usStandard"></textarea>
              </div>
              <div className='table-responsive'>
              <table className="table mb-3 mytable">
                <thead>
                  <tr>
                    <td>English</td>
                    <td>Tamil</td>
                    <td>Hindi</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Urdu</td>
                    <td>Telugu</td>
                    <td>Malayalam</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="customConvertInput"
                  placeholder="Custom Convert"
                />
              </div>
              <button type="submit" className="button-3">
                Convert
              </button>
              <div className="mb-3">
               <br/> <label htmlFor="tamilOutput" className="form-label">
                  {lan}
                </label>
                <textarea className="form-control" id="tamilOutput"></textarea>
              </div>
            </form>
          </div>
        </Col>
        <Col md={4} sm={3} xs={2}></Col>
      </Row>
    </Container>
  );
}

