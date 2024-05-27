import { useContext } from "react";
import Navb from "../otherComponents/Navbar";
import { user } from "../navigations/nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Emp.css'; 
import { Button } from "react-bootstrap";

const Emp = () => {
  const { empd } = useContext(user);
  console.log(empd);

  return (
    <>
      <Navb />
      {
        empd.length>0 ?
        <><Container className="mt-4">
        <Row>
          {empd.map((employee, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card className="employee-card shadow-sm">
                <Card.Body>
                  <Card.Title className="employee-name">{employee.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ID: {employee.id}
                  </Card.Subtitle>
                  <Card.Text>
                    Designation: {employee.designation}
                  </Card.Text>
                  <div className="button-group">
                    <Button variant="outline-light" className="mr-2">Update</Button>
                    <Button variant="outline-danger">Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container></>
        :
        <><h1>No Employees to display</h1></>
      }
      
    </>
  );
};

export default Emp;
