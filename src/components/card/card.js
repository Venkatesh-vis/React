import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function Prod(props) {
    const{image,category,price,title,rating}=props.item
  return (
    <Card id="card">
      <Card.Img variant="top" src={image} height={250} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>Category : </b>{category}</ListGroup.Item>
        <ListGroup.Item><b>Price : </b>{price}</ListGroup.Item>
        <ListGroup.Item><b>Rating : </b>{rating.rate}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Prod;
