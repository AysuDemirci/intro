import React, { Component } from "react";
import {  Col, Container, ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
componentDidMount(){
  this.props.getCategories()
}
  render() {
    
    return (
      <div  >
        <Container>
          <Col> <h6>{this.props.info.title}</h6>
            <ListGroup className="list-style1">
              {this.props.categories.map((category) => (
                <ListGroupItem className="list-style"
                  {
                    ...category.categoryName === this.props.currentCategory
                      ? true
                      : false
                  }
                  onClick={() => this.props.getProducts(category.id)}
                  key={category.id}
                >

                   <img
                    className="categorylist-pictures"
                    src={category.image}
                    alt=""
                  ></img>
                  
                  {category.categoryName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Container>

        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
