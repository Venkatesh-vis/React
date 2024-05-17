import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Cardd = (props) => {
    const {brand,category,price,rating,thumbnail,title}=props.item
  return (
    <>
      <Card style={{ width: "30%" }}>
        <Card.Img variant="top" src={thumbnail} height={250}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {category}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><b>Brand: </b>{brand}</ListGroup.Item>
          <ListGroup.Item><b>Price: </b>${price}</ListGroup.Item>
          <ListGroup.Item><b>Rating: </b>{rating}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Cardd;
