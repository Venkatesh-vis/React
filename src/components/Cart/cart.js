import React, { useContext } from "react";
import {
  Carousel,
  Card,
  ListGroup,
  Badge,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { user } from "../navigations/nav";
import Navb from "../otherComponents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { data } = useContext(user);
  console.log(data);

  return (
    <>
      <Navb />
      <div className="container mt-4">
        {data && data.length > 0 ? (
          data.map((details, index) => (
            <Card key={index} className="mb-4">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <strong>{details.title}</strong>
                <Badge pill variant="warning">
                  {details.availabilityStatus}
                </Badge>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <Carousel>
                      {details.images.map((image, idx) => (
                        <Carousel.Item key={idx}>
                          <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${idx}`}
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Col>
                  <Col md={8}>
                    <Card.Text className="mt-3">
                      {details.description}
                    </Card.Text>
                    <ListGroup>
                      <ListGroup.Item>
                        <strong>Category:</strong> {details.category}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Price:</strong> ${details.price}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Discount:</strong> {details.discountPercentage}%
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Rating:</strong> {details.rating}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Stock:</strong> {details.stock}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Brand:</strong> {details.brand}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>SKU:</strong> {details.sku}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Weight:</strong> {details.weight}g
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Dimensions:</strong> {details.dimensions.width}x
                        {details.dimensions.height}x{details.dimensions.depth}{" "}
                        cm
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Warranty:</strong> {details.warrantyInformation}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Shipping:</strong> {details.shippingInformation}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Return Policy:</strong> {details.returnPolicy}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Minimum Order Quantity:</strong>{" "}
                        {details.minimumOrderQuantity}
                      </ListGroup.Item>
                    </ListGroup>
                    <div className="mt-3">
                      <strong>Quantity:</strong>
                      <ButtonGroup className="ml-2">
                        <Button variant="secondary">-</Button>
                        <Button variant="light" disabled>
                          {details.quantity}
                        </Button>
                        <Button variant="secondary">+</Button>
                      </ButtonGroup>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <h5>Reviews:</h5>
                {details.reviews.map((review, revIndex) => (
                  <Card key={revIndex} className="mb-2">
                    <Card.Body>
                      <Card.Title>Rating: {review.rating} ⭐</Card.Title>
                      <Card.Text>{review.comment}</Card.Text>
                      <footer className="blockquote-footer">
                        {review.reviewerName} on{" "}
                        <cite title="Review Date">
                          {new Date(review.date).toLocaleDateString()}
                        </cite>
                      </footer>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Footer>
            </Card>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
