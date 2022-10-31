import React, { Component } from "react";
import Navi from "./components/Navi.js";
import { Row, Container, Col } from "reactstrap";
import "./Style.css";
import Offers from "./components/Offers.js";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.js";
// import HomePage from "./components/HomePage.js";
// import SecondPage from "./components/SecondPage.js";
import Categories from "./components/Categories";
import Commercial from "./components/Commercial.js";
import ContinousPage1 from "./components/ContinousPage1.js";
import FooterUp from "./components/FooterUp";
// import SecondPage from "./components/SecondPage.js";
import GetirNav from "./components/GetirNav.js";
import ProductList from "./components/ProductList.js";
import CategoryList from "./components/CategoryList.js";
import CardList from "./components/CardList.js";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    categories: [],
    cart: [],
    countries: [],
    currentCountries: "",
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id); //bu kod categorylistte tıkladığımıda productlistte olanları filtrelemeye yarıyor.
  };

  changeCountries = (country) => {
    this.setState({ currentCountries: country.code });
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
    console.log(this);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  getCountries = () => {
    fetch("http://localhost:3000/countries")
      .then((response) => response.json())
      .then((data) => this.setState({ countries: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    console.log(this.state.cart);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  render() {
    let productInfo = { title: "Ürünler" };
    let categoryInfo = { title: "Kategoriler" };
    return (
      <div>
        <Navi
          getCountries={this.getCountries}
          countries={this.state.countries}
          changeCountries={this.changeCountries}
        />

        <Routes>
          <Route
            exact
            path="/*"
            element={
              <>
                <Row>
                  <Col md="12">
                    <Commercial
                      getCountries={this.getCountries}
                      countries={this.state.countries}
                      changeCountries={this.changeCountries}
                      currentCountries={this.state.currentCountries}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Categories
                      currentCategory={this.state.currentCategory}
                      getProducts={this.getProducts}
                      getCategories={this.getCategories}
                      categories={this.state.categories}
                      changeCategory={this.changeCategory}
                    />
                  </Col>
                </Row>
                <Container>
                  <Row>
                    <Offers />
                  </Row>
                </Container>
                <Container>
                  <Container>
                    <Row>
                      <FooterUp />
                    </Row>
                  </Container>
                  <Row>
                    <ContinousPage1 />
                  </Row>
                </Container>
              </>
            }
          ></Route>

          <Route
            path="/product"
            element={
              <>
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
                        currentCategory={this.state.currentCategory}
                        getProducts={this.getProducts}
                        getCategories={this.getCategories}
                        categories={this.state.categories}
                        products={this.state.products}
                        info={categoryInfo}
                        changeCategory={this.changeCategory}
                      />
                    </Col>
                    <Col xs="5">
                      <ProductList
                        products={this.state.products}
                        info={productInfo}
                        currentCategory={this.state.currentCategory}
                        getProducts={this.getProducts}
                        changeCategory={this.changeCategory}
                        addToCart={this.addToCart}
                      />
                    </Col>
                    <Col xs="4">
                      <CardList
                        cart={this.state.cart}
                        removeFromCart={this.removeFromCart}
                        addToCart={this.addToCart}
                      />
                    </Col>
                  </Row>
                </Container>
              </>
            }
          ></Route>
        </Routes>

        <Footer />
      </div>
    );
  }
}
