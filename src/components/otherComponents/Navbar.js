import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { user } from '../navigations/nav';

const Navb = ()=>{
   const linkStyle = {textDecoration:"none",color:"white"   }
   const {data} = useContext(user)
   console.log(data);
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link ><Link style={linkStyle} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link><Link style={linkStyle} to={'/About'}>About</Link></Nav.Link>
            <Nav.Link ><Link style={linkStyle} to={'/Contact'}>Contact</Link></Nav.Link>
            <Nav.Link ><Link style={linkStyle} to={'/Employee'}>Employees</Link></Nav.Link>
          </Nav>
          <Row>
        <Col xs="auto">
            <Link style={linkStyle} to={'/Cart'}><Button variant="secondary">Cart </Button></Link>
            <div>{data.length>0 && <> {data.length}</>}</div>
          </Col>
        </Row>
        </Container>
       
      </Navbar>
        </>
    )
}

export default Navb