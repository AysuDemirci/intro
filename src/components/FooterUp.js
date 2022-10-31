import React, { Component } from "react";

export default class FooterUp extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <div className="row" id="footerup-col">
          <div className="col" id="footerup-col1">
            <img src="../images/ekran1.png" alt="" id="col1-img"></img>
            <h5 id="col1-text">Her siparişinize bir kampanya</h5>
            <p id="p-col">
              Getir’de vereceğiniz her siparişe uygun bir kampanya
              bulabilirsiniz.
            </p>
          </div>
          <div className="col" id="footerup-col2">
            <img src="../images/ekran2.png" alt="" id="col2-img"></img>
            <h5 id="col2-text">Dakikalar içinde kapınızda</h5>
            <p id="p-col">
              Getir’le siparişiniz dakikalar içinde kapınıza gelir.
            </p>
          </div>
          <div className="col" id="footerup-col3">
            <img src="../images/ekran3.png" alt="" id="col3-img"></img>
            <h5 id="col3-text">Binlerce çeşit mutluluk</h5>
            <p id="p-col">
              Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
