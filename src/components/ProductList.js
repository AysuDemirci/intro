import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div className="product-background">
        <Container>
          {" "}
          <h2 style={{ fontSize: "15px" }}>
            {this.props.info.title}
            {" > "}
            {this.props.currentCategory}
          </h2>
          <Row>
            <Col xs="2" className="card-grid">
              {this.props.products.map((product) => (
                <Card key={product.id} className="card-style">
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    className="card-button"
                  >
                    <img
                      className="btn-img"
                      alt=""
                      src="../images/Ekran görüntüsü 2022-07-02 202020.png"
                    ></img>
                  </Button>
                  <CardImg
                    src={product.image}
                    alt=""
                    className="product-images"
                  />

                  <CardBody>
                    <CardText
                      tag="h6"
                      style={{ textAlign: "center", color: "rgb(93, 62, 188)" }}
                    >
                      {product.unitPrice}
                    </CardText>
                    <CardTitle tag="h6" style={{ textAlign: "center" }}>
                      {product.productName}
                    </CardTitle>
                    <CardTitle
                      id="cardtitle3"
                      tag="h6"
                      style={{ textAlign: "center" }}
                    >
                      {product.quantityPerUnit}
                    </CardTitle>
                    <CardText></CardText>
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
