import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { cn2t,cn2in } from './n2w';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [no,setNo]=useState();
  const [is,setIs]=useState();
  const[us,setUs]=useState();
  const[to,setTo]=useState();
  const [lan,setLan]=useState("Tamil");
  const sub=(e)=>{
    setIs(cn2in(no));
    setUs(cn2t(no));
    const data={
      
    }
    e.preventDefault();
  }
  return (
    <>
    <Container>
      <Row className="align-items-center viewport-height">
        <Col md={4} sm={3} xs={2}>
        </Col>
        <Col md={4} sm={3} xs={2}>
        <center>

         <form>
          <span className='float-start'><b>Number:</b></span>
          &nbsp;<input type="text" value={no} onChange={(e)=>{setNo(e.target.value)}}></input>&nbsp;&nbsp;<button className='button-3' onClick={sub}>Submit</button><br/>
          <span className='float-start special'><b>Indian Standard:</b></span><textarea value={is}></textarea><br/>
          <span className='float-start special'><b>US Standard:</b></span> <textarea value={us}></textarea><br></br><br></br>
          <table className='mytable' cellPadding={10}>
            <tr>
              <td>English</td>
              <td>Tamil</td>
              <td>Hindi</td>
            </tr>
            <tr>
              <td>Urdu</td>
              <td>Telugu</td>
              <td>Malayalam</td>
            </tr>
          </table><br/>
          <input type="text" placeholder='custom convert'></input>&nbsp;&nbsp;<button className='button-3' >Convert</button>
          <br></br><br></br>
          <span className='float-start special'><b>{lan}:</b></span>
          <textarea></textarea>
         </form>


        </center>
        </Col>
        <Col md={4} sm={3} xs={2}>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
