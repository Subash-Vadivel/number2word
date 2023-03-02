import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { cn2t,cn2in } from './n2w';
import { useState } from 'react';
import axios from 'axios';
import { dataset } from './code';
export default function App() {
  const [no,setNo]=useState('');
  const [is,setIs]=useState();
  const[us,setUs]=useState();
  const[to,setTo]=useState('ta');
  const [lan,setLan]=useState("");
  const [res,setResult]=useState('');
  const [lanout,setLanout]=useState("Select a language to Convert");

  const clicked=(e)=>{
    setResult("");
    if(to===undefined)
    {
          setResult("Invalid ...");
    }
    else
    {
    axios.get('https://translated-mymemory---translation-memory.p.rapidapi.com/get',{
      params: {langpair: `en|${to}`, q: us },
      headers: {
        'X-RapidAPI-Key': '01dc308f17msha4ada22f271caa5p1d231fjsn8ba241b34e91',
        'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
      },
  }).then((res)=>{setResult(res.data.matches[0].translation);}).catch((err)=>{console.log(err)})
  setLanout(lan)
}
  e.preventDefault()
  }
  const sub=(e)=>{
    setIs(cn2in(no));
    setUs(cn2t(no));
    e.preventDefault();
  }


   return (
    <Container fluid>
      <header>Converto</header>
      <Row className="align-items-center vh-100">
        <Col md={4} sm={3} xs={2}></Col>
        <Col md={4} sm={6} xs={8}>
          <div className="d-flex flex-column align-items-center">
            <form className="w-100">
              <div className="mb-3">
                <label htmlFor="numberInput" className="form-label">
                  Number:
                </label>
                <input type="number" value={no} max="9999999998" min="-9999999996" onChange={(e)=>{setNo(e.target.value)}} className="form-control" id="numberInput" />
                <center>
                <button onClick={sub} className='button-3'>Submit</button>
                </center>
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
                    <td onClick={()=>{setLan("French");setTo("fr")}}>	French</td>
              <td onClick={()=>{setLan("Tamil");setTo("ta")}}>Tamil</td>
              <td onClick={()=>{setLan("Hindi");setTo("hi")}}>Hindi</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td onClick={()=>{setLan("German");setTo("ge")}}>German</td>
              <td onClick={()=>{setLan("Russian");setTo("ru")}}>Russian</td>
              <td onClick={()=>{setLan("Spanish");setTo("es")}}>Spanish</td>
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
                  value={lan}
                  onChange={(e)=>{setLan(e.target.value);setTo(dataset[e.target.value.toLowerCase()]);}}
                />
              </div>
              <center>
              <button onClick={clicked} className="button-3">
                Convert
              </button>
              </center>
              <div className="mb-3">
               <br/> <label htmlFor="tamilOutput" className="form-label">
                  {lanout}
                </label>
                <textarea className="form-control" id="tamilOutput" value={res}></textarea>
              </div>
            </form>
          </div>
        </Col>
        <Col md={4} sm={3} xs={2}></Col>
      </Row>
    </Container>
  );
}

