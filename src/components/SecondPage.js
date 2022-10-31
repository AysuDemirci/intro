import React, { Component } from "react";
// import { Col, Container, Row } from "reactstrap";
// import GetirNav from "./GetirNav.js";
// import ProductList from "./ProductList.js";
// import CategoryList from "./CategoryList.js";
// import CardList from "./CardList.js";
// import Offers from "./Offers.js";
// import Navi from "./Navi.js";

export default class SecondPage extends Component {
 
  // state = {
  //   currentCategory: "",
  //   products: [],
  //   categories: [],
  //   cart: [],
  //   countries:[],
  //   currentCountries:"",
  // };
  

  render() {
    // let productInfo = { title: "Ürünler" };
    // let categoryInfo = { title: "Kategoriler" };
  
    return (
      <div>
        {/* <Navi
          getCountries={this.props.getCountries}
          countries={this.props.countries}
          changeCountries={this.props.changeCountries}
        />
        <br />
        <Row>
          <GetirNav />
        </Row>
        <Container>
          <Row>
            <Offers />
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.props.currentCategory}
                getProducts={this.props.getProducts}
                getCategories={this.props.getCategories}
                categories={this.props.categories}
                products={this.props.products}
                info={categoryInfo}
                changeCategory={this.props.changeCategory}
              />
            </Col>
            <Col xs="5">
              <ProductList
                products={this.props.products}
                info={productInfo}
                currentCategory={this.props.currentCategory}
                getProducts={this.props.getProducts}
                changeCategory={this.props.changeCategory}
                addToCart={this.props.addToCart}
              />
            </Col>
            <Col xs="4">
              <CardList
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
              />
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}
