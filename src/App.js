import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { cn2t,cn2in } from './n2w';
import { Container, Row, Col } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [no,setNo]=useState('');
  const [is,setIs]=useState();
  const[us,setUs]=useState();
  const[to,setTo]=useState('ta');
  const [lan,setLan]=useState("Tamil");
  const [res,setResult]=useState('');

  const clicked=(e)=>{
    axios.get('https://translated-mymemory---translation-memory.p.rapidapi.com/get',{
      params: {langpair: `en|${to}`, q: us },
      headers: {
        'X-RapidAPI-Key': '01dc308f17msha4ada22f271caa5p1d231fjsn8ba241b34e91',
        'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
      },
  }).then((res)=>{setResult(res.data.matches[0].translation);console.log(res.data.matches[0].translation);}).catch((err)=>{console.log(err)})
  e.preventDefault()
  }
  const sub=(e)=>{
    setIs(cn2in(no));
    setUs(cn2t(no));
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
              <td onClick={()=>{setLan("Punjabi");setTo("pa")}}>Punjabi</td>
              <td onClick={()=>{setLan("Tamil");setTo("ta")}}>Tamil</td>
              <td onClick={()=>{setLan("Hindi");setTo("hi")}}>Hindi</td>
            </tr>
            <tr>
              <td onClick={()=>{setLan("Urdu");setTo("ur")}}>Urdu</td>
              <td onClick={()=>{setLan("Korean");setTo("ko")}}>Telugu</td>
              <td onClick={()=>{setLan("Malayalam");setTo("ml")}}>Malayalam</td>
            </tr>
          </table><br/>
          <input type="text" placeholder='custom convert' value={lan} onChange={(e)=>{setLan(e.target.val)}}></input>&nbsp;&nbsp;<button className='button-3' onClick={clicked}>Convert</button>
          <br></br><br></br>
          <span className='float-start special'><b>{lan}:</b></span>
          <textarea value={res}></textarea>
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
