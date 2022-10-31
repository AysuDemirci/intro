import React, { Component } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer-style">
        <div className="container">
          <footer className="py-5" id="footer-container">
            <div className="row" id="footer-ul">
              <div className="col-auto">
                <h5 id="footer-text">Getir'i indirin!</h5>
                <ul className="nav flex-column" id="footer-ul">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      <img
                        id="img-footer1"
                        src="../images/app_store_TR.png"
                        alt=""
                      ></img>
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      <img
                        id="img-footer2"
                        src="../images/googleplay.tr_ALL.png"
                        alt=""
                      ></img>
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      <img
                        id="img-footer3"
                        src="../images/app_gallery_tr.png"
                        alt=""
                      ></img>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <h5 id="footer-text">Getir'i keşfedin</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Hakkımızda
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Kariyer
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Teknoloji Kariyerleri
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      İletişim
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      COVID-12 Duyuru
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Sosyal Sorumluluk Projeleri
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-auto">
                <h5 id="footer-text">Yardıma mı ihtiyacınız var?</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Sıkça Sorulan Sorular
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Kişisel Verilerin Korunması
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Gizlilik Politikası
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Kullanım koşulları
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Çerez Politikası
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <h5 id="footer-text">İş Ortağımız Olun</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Bayimiz Olun
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Deponuzu Kiralayın
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      GetirYemek Restoranı Olun
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      GetirÇarşı İşletmesi Olun
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Zincir Restoranlar
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p style={{ fontSize: "14px" }}>&copy; 2022 Getir</p>
              <li id="dot"></li>
              <p id="bilgi">Bilgi Toplumu Hizmeti</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a href="/">
                    <FaFacebook className="icons1" />
                  </a>
                </li>
                <li className="ms-3">
                  <a href="/">
                    <FaTwitter className="icons1" />
                  </a>
                </li>
                <li className="ms-3">
                  <a href="/">
                    <FaInstagram className="icons1" />
                  </a>
                </li>
                <li className="ms-3">
                <button id="footer-dil">
                <FaGlobe className="icons2" />
                Türkçe (TR)
              </button>
                </li>
              </ul>
             
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
