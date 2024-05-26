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
  }

  const handleId = (e)=>{
    const id=e.target.value
    updateEmp({...emp, id})
  }

  const handleDesig = (e)=>{
    const designation=e.target.value
    updateEmp({...emp, designation})
    console.log(emp);
  } 

  const handleSubmit = (e)=> {
    e.preventDefault()
    userHandler(emp)
  }
 

  return (
    <>
      <Navb />
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleSubmit} style={{ width: "20%", textAlign: "center" }}>
        <Form.Group  className="mb-3">
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

        <Button style={{width:"100%"}} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
};
export default Contact;
