import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "reactstrap";

export default class Categories extends Component {
  componentDidMount() {
   
    this.props.getCategories();
  }

  render() {
    return (
      <div className="categories-color">
        <br />
        <Container>
          <h6 id="categori-txt">Kategoriler</h6>
          <div className="row">
            <div className="col-md-12">
              {this.props.categories.map((category) => (
                <li className="li-class" key={category.id}>
                   <Link
                        to="product"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                  <span>
                    
                     
                        <button
                      style={{ textDecoration: "none" }}
                      onClick={() => this.props.changeCategory(category)}
                      className="button-categories"
                      active={
                        category.categoryName === this.props.currentCategory
                          ? true
                          : false
                      }
                    >
                      <img
                        className="categories-pictures"
                        src={category.image}
                        alt=""
                      ></img>
                      <br />
                        {category.categoryName}
                        </button>
                        </span>
                      </Link>
                    
                  
                </li>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
