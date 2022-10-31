import React, { Component } from "react";
import Slider from "react-slick";

export default class Offers extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    return (
      <div id="offers-style">
        <div className="container" id="offers-container">
          <br />
          <h6>Kampanyalar</h6>
          <div className="row">
            <div className="col-md-12">
            <Slider {...settings}>
              <div>
                <button className="offers-button-style">
                  <img
                    src="../images/kampanya1.jpeg"
                    alt=""
                    className="offers-pictures"
                  ></img>
                </button>
              </div>
              <div>
                <button className="offers-button-style">
                  <img
                    src="../images/kampanya2.jpeg"
                    alt=""
                    className="offers-pictures"
                  ></img>
                </button>
              </div>
              <div>
                <button className="offers-button-style">
                  <img
                    src="../images/kampanya3.jpeg"
                    alt=""
                    className="offers-pictures"
                  ></img>
                </button>
              </div>
              <div>
                <button className="offers-button-style">
                  <img
                    src="../images/kampanya3.jpeg"
                    alt=""
                    className="offers-pictures"
                  ></img>
                </button>
              </div>
            </Slider>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
