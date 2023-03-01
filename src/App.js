import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
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
          &nbsp;<input></input>&nbsp;&nbsp;<button className='button-3'>Submit</button><br/>
          <span className='float-start special'><b>Indian Standard:</b></span><textarea></textarea><br/>
          <span className='float-start special'><b>US Standard:</b></span> <textarea></textarea>
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
            <tr>
              <td>Bengali</td>
              <td>kannada</td>
              <td>Odia</td>
            </tr>
          </table><br/>
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
