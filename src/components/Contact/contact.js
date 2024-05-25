import { createContext, useContext, useState } from "react";
import Navb from "../otherComponents/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { user } from "../navigations/nav";



const Contact = () => {
  const [emp, updateEmp] = useState(
    {
      name: "",
      id: "",
      desig: ""
    }
  );
const {data,setData}=useContext(user)


  // const[data,setData]=useState([])

  const handle = (e)=>{
    const {name,value}=e.target
    updateEmp({...emp, [name]:value});
  }

  const datahandle = () => {
    setData([...data,emp])
  }
 

  return (
    <>
      <Navb />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handle}
            value={emp.name}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            onChange={handle}
            value={emp.id}
            name="id"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Designation"
            onChange={handle}
            value={emp.desig}
            name="desig"
          />
        </Form.Group>

        <Button onClick={datahandle} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Contact;
