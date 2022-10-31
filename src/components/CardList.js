import React, { Component } from "react";
import { Badge, Button, Col, Container, Row, Table } from "reactstrap";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

export default class CardList extends Component {
  showCart = () => {
    
    if (this.props.cart.length > 0) {
      return (
        <Col xs="3" className="cart-column2" >
          <Table>
            {this.props.cart.map((item) => (
              <ul
                key={item.product.id}
                className="cart-liststyle"
                style={{ borderColor: "#ece7f8", fontSize: "15px" }}
              >
                <li
                  style={{
                    listStyleType: "none",
                    marginTop: "15px",
                    marginLeft: "-15px",
                    zIndex: "2",
                  }}
                >
                  {item.product.productName}
                </li>
                <li
                  style={{
                    color: "#4c3398",
                    fontWeight: "600",
                    listStyleType: "none",
                    zIndex: "2",
                    marginLeft: "-15px",
                  }}
                >
                  {item.product.unitPrice}
                  <Button
                    color="light"
                    style={{
                      marginLeft: "120px",
                      marginTop: "-17px",
                      width: "30px",
                      height: "30px",
                      zIndex: "1",
                      position: "absolute",
                      alignItems: "center",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                      borderTopRightRadius: "1px",
                      borderBottomRightRadius: "1px",
                      border: "1px solid",
                      borderColor: "lightgray",
                    }}
                    onClick={() => this.props.removeFromCart(item.product)}
                  >
                    <FaTrashAlt
                      style={{
                        color: "#4c3398",
                        marginTop: "-17px",
                        marginLeft: "-1px",
                        width: "13px",
                      }}
                      color="#4c3398"
                    />
                  </Button>
                  <Badge
                    style={{
                      width: "29px",
                      height: "29px",
                      marginLeft: "149px",
                      marginTop: "-17px",
                      zIndex: "1",
                      position: "absolute",
                      alignItems: "center",
                      borderRadius: "0px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                    }}
                    color="danger"
                  >
                    {item.quantity}
                  </Badge>
                  <Button
                    style={{
                      zIndex: "1",
                      position: "absolute",
                      alignItems: "center",
                      marginTop: "-17px",
                      marginLeft: "178px",
                      width: "30px",
                      height: "30px",
                      borderColor: "lightgray",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                      borderTopLeftRadius: "1px",
                      borderBottomLeftRadius: "1px",
                    }}
                    onClick={()=>this.props.addToCart(item.product)}
                  >
                    <FaPlus
                      style={{
                        color: "#4c3398",
                        marginTop: "-15px",
                        marginLeft: "-1px",
                        width: "10px",
                      }}
                    />
                  </Button>
                </li>
              </ul>
            ))}
          </Table>
        </Col>
      );
    } else {
      return (
        <Col xs="3" className="cart-column">
          <img
            className="cart-image"
            src="../images/Ekran görüntüsü 2022-06-15 224517.png"
            alt=""
          ></img>
          <h6 className="card-text1">Sepetiniz şu an boş</h6>
          <p className="card-text2">
            {" "}
            Sipariş vermek için sepetinize ürün ekleyin
          </p>
        </Col>
      );
    }
  };

  render() {
    return (
      <div>
        <Container>
          <h6 className="text-styler">Sepetim</h6>
          <Row>{this.showCart()}</Row>
        </Container>
      </div>
    );
  }
}
