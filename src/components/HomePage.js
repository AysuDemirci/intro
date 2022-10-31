// import React, { Component } from "react";
// import { Row, Col, Container } from "reactstrap";
// // import Categories from "./Categories.js";
// // import Commercial from "./Commercial.js";
// // import ContinousPage1 from "./ContinousPage1.js";
// // import FooterUp from "./FooterUp";

// export default class HomePage extends Component {
//   state = {
//     currentCategory: "",
//     categories: [],
//     countries: [],
//     currentCountries: "",
//   };
  
//  componentDidMount(){
//   this.props.getCategories();
//   this.props.getProducts();
//   this.props.getCountries();
//  }

 

  
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col md="12">
//             <Commercial
//               getCountries={this.props.getCountries}
//               countries={this.state.countries}
//               changeCountries={this.props.changeCountries}
//               currentCountries={this.state.currentCountries}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col md="12">
//             <Categories
//               currentCategory={this.state.currentCategory}
//               getProducts={this.props.getProducts}
//               getCategories={this.props.getCategories}
//               categories={this.state.categories}
//               changeCategory={this.props.changeCategory}
//             />
//           </Col>
//         </Row>
//         <Container>
//           <Container>
//             <Row>
//               <FooterUp />
//             </Row>
//           </Container>
//           <Row>
//             <ContinousPage1 />
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }
