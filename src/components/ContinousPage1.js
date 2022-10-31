import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";


export default class ContinousPage1 extends Component {
  render() {
    return (<div>
      <Container>
        <Row id="continious-row">
          <Col md="12" id="continious-style">
            <img
              src="../images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png"
              alt=""
              id="continious-img"
            ></img>
            <h2 id="continious-text">Getir'i indirin!</h2>
            <p id="p-continious">
              İstediğiniz ürünleri dakikalar içerisinde kapınıza getirelim.
            </p>
            <ul className="list-group list-group-horizontal" id="ul-continious">
              <li className="list-group-item" id="li-continious">
                <button id="continious-btn">
                  <img
                    id="li-img1"
                    src="../images/app_store_TR.png"
                    alt=""
                  ></img>
                </button>
              </li>
              <li className="list-group-item" id="li-continious">
                <button  id="continious-btn" >
                  <img
                    id="li-img2"
                    src="../images/googleplay.tr_ALL.png"
                    alt=""
                  ></img>
                </button>
              </li>
              <li className="list-group-item" id="li-continious">
                <button  id="continious-btn">
                  <img
                    id="li-img3"
                    src="../images/app_gallery_tr.png"
                    alt=""
                  ></img>
                </button>
              </li>
            </ul>

           <img id="phone-landing" src="../images/phoneLanding-88c033545710c4808054072689e187d7.png" alt=""></img>
          </Col>
        </Row>
      </Container>
    </div>
      
    );
  }
}
