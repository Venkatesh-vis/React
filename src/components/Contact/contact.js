import { useContext, useState } from "react";
import Navb from "../otherComponents/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { user } from "../navigations/nav";




const Contact = () => {
  const [emp, updateEmp] = useState({});
const {empd,userHandler}=useContext(user)
console.log(empd);


  const handleName = (e)=>{
    const name=e.target.value
    updateEmp({...emp, name})
    console.log(emp);
  }

  const handleId = (e)=>{
    const id=e.target.value
    updateEmp({...emp, id})
    console.log(emp);
  }

  const handleDesig = (e)=>{
    const designation=e.target.value
    updateEmp({...emp, designation})
    console.log(emp);
  } 
 

  return (
    <>
      <Navb />
      <Form onSubmit={()=>userHandler(emp)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleName}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter ID"
            onChange={handleId}
            name="id"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Designation"
            onChange={handleDesig}
            name="desig"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Contact;
