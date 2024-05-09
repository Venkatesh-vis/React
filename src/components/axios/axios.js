import axios from "axios";
import { Component } from "react";
import Prod from "../card/card";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Productt extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      pqr: {},
    };
  }

  data = async () => {
    const dta = await axios.get("https://fakestoreapi.com/products");
    this.setState({
      pages: dta.data,
    });
  };

  componentDidMount() {
    this.data();
    this.content();
  }

  content = async (id) => {
    const xyz = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // console.log(xyz.data);
    this.setState({
      pqr: xyz.data
    });
  };

  render() {
    console.log(this.state.pqr);
    return (
      <>
        {this.state.pqr.data ? (
          <>
            <Card style={{ width: "18rem",margin:"0px 0px 50px 600px" }} >
              <Card.Img
                variant="top"
                src={this.state.pqr.image}
                height={250}
              />
              <Card.Body>
                <Card.Title>{this.state.pqr.title}</Card.Title>
                <Card.Text>
                  <b>Id:</b> {this.state.pqr.id}
                </Card.Text>
                <Card.Text>
                  <b>Category :</b> {this.state.pqr.category}
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        ) : (
          <>
            <h2>No items found</h2>
          </>
        )}

        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {this.state.pages.map((items) => {
              return (
                <>
                  <Button
                    onClick={() => this.content(items.id)}
                    variant="success"
                  >
                    {items.id}
                  </Button>
                </>
              );
            })}
          </div>
        </>
      </>
    );
  }
}
export default Productt;
