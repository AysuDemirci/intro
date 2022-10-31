import { FaUser, FaUserPlus, FaGlobe, FaTimes } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import {
  Button,
  ButtonDropdown,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Modal,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  Row,
  Label,
  FormGroup,
  Dropdown,
} from "reactstrap";



function Navi() {
  useEffect(() => {
    setCountries();
  }, []);

  const [countries, setCountries] = useState([]);

  const [dropdownValue, setDropdownValue] = useState("+90");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [modal, setModal] = useState(false);
  const [modals, setModals] = useState(false);
  const [modalss, setModalss] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const closeModals = () => {
    setModals(false);
  };
  const closeModalss = () => {
    setModalss(false);
  };

  return (
    <div className="navbar-column">
      <Container>
        <Nav className="textcolor">
          <NavItem>
            <NavLink href="/" className="buttoncolor">
              getir
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="buttoncolor" href="/getiryemek">
              getiryemek
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="buttoncolor" href="/getirbuyuk">
              getirbüyük
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="buttoncolor" href="/getirsu">
              getirsu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="buttoncolor" href="/getircarsi">
              getirçarşı
            </NavLink>
          </NavItem>

          <NavItem>
            <Row>
              <NavLink
                id="right-item"
                onClick={() => setModal(true)}
                type="button"
              >
                <div>
                  <Modal
                    isOpen={modal}
                    toggle={() => setModal(!modal)}
                    id="modal-page2"
                  >
                    <ModalBody
                      toggle={() => setModal(!modal)}
                      id="modal-style2"
                    >
                      Dil Değiştir
                      <Button id="modal-body-btn2" onClick={closeModal}>
                        <FaTimes
                          style={{
                            marginLeft: "-5",
                            marginTop: "-11",
                            color: "black",
                          }}
                        />
                      </Button>
                    </ModalBody>

                    <ModalBody>
                      <Form>
                        <FormGroup
                          className="form-check"
                          id="modal-check"
                          check
                        >
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="check-input"
                          ></Input>
                          <Label
                            className="form-check-label"
                            id="check-input1"
                            check
                          >
                            Türkçe
                          </Label>
                          <img
                            src="../images/png16px/tr.png"
                            alt=""
                            style={{ marginLeft: "210px" }}
                          ></img>
                        </FormGroup>

                        <FormGroup id="modal-check" check>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="check-input"
                          />
                          <Label
                            className="form-check-label"
                            id="check-input1"
                            check
                          >
                            English
                            <img
                              src="../images/png16px/gb.png"
                              alt=""
                              style={{ marginLeft: "207px" }}
                            ></img>
                          </Label>
                        </FormGroup>
                      </Form>
                      <Button type="submit" className="modal-button3">
                        Güncelle
                      </Button>
                    </ModalBody>
                  </Modal>
                </div>
                <FaGlobe className="icons" />
                Türkçe (TR)
              </NavLink>
            </Row>
          </NavItem>

          <NavItem>
            <NavLink
              id="right-item1"
              onClick={() => setModals(true)}
              type="button"
            >
              <div>
                <Container>
                  <Modal
                    isOpen={modals}
                    toggle={() => setModals(!modals)}
                    id="modal-page"
                  >
                    <ModalBody
                      toggle={() => setModals(!modals)}
                      id="modal-style"
                    >
                      Giriş yap veya Kayıt Ol
                      <Button id="modal-body-btn" onClick={closeModals}>
                        <FaTimes
                          style={{
                            marginLeft: "-5",
                            marginTop: "-11",
                            color: "black",
                          }}
                        />
                      </Button>
                    </ModalBody>

                    <ModalBody>
                      <Row>
                        <Col>
                          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className="modal-button" caret>
                              {dropdownValue}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>
                                <img alt=""></img>
                              </DropdownItem>

                              <DropdownItem></DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </Col>
                        <Col>
                          <Input
                            className="modal-input"
                            placeholder="Telefon numarası"
                            type="tel"
                            name="phone"
                            autoComplete="off"
                          />
                          <Col>
                            <Button type="submit" className="modal-button2">
                              Telefon numarası ile devam et
                            </Button>
                          </Col>
                        </Col>
                      </Row>
                      <Row>
                        <ModalBody id="body-tooltip">
                          Kişisel verilerinize dair Aydınlatma Metni için{" "}
                          <a
                            href="/"
                            data-bs-toggle="tooltip"
                            title="Tooltip"
                            style={{ color: "purple" }}
                          >
                            tıklayınız
                          </a>
                        </ModalBody>
                      </Row>

                      <ModalBody id="tooltip-row">
                        Hala kayıt olmadınız mı?
                        <Button id="tooltip-btn">Kayıt Ol</Button>
                      </ModalBody>
                    </ModalBody>
                  </Modal>
                </Container>
              </div>
              <FaUser className="icons" />
              Giriş yap
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              id="right-item2"
              type="button"
              onClick={() => setModalss(true)}
            >
              <div>
                <Container>
                  <Modal
                    isOpen={modalss}
                    toggle={() => setModalss(!modalss)}
                    id="modal-page1"
                  >
                    <ModalBody
                      toggle={() => setModalss(!modalss)}
                      id="modal-style3"
                    >
                      Kayıt Ol
                      <Button id="modal-body-btn3" onClick={closeModalss}>
                        <FaTimes
                          style={{
                            marginLeft: "-5",
                            marginTop: "-11",
                            color: "black",
                          }}
                        />
                      </Button>
                    </ModalBody>

                    <ModalBody>
                      <Container>
                        <Row>
                          <Col>
                            <ButtonDropdown>
                              <DropdownToggle className="kayıt-modal" caret>
                                +90
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>
                          </Col>
                          <Col>
                            <Input
                              className="kayıt-phone"
                              placeholder="Telefon numarası"
                              type="tel"
                              name="phone"
                              autoComplete="off"
                            />
                          </Col>
                        </Row>
                        <br />
                        <Form>
                          <Row>
                            <Input
                              type="text"
                              placeholder="Ad Soyad"
                              id="kayıt-input"
                            ></Input>
                            <Input
                              type="email"
                              placeholder="E-posta"
                              id="kayıt-input"
                            ></Input>
                          </Row>
                          {/* <Input type="checkbox" id="check-modal-id"></Input>
                          <Label id="checkbox-modal">
                         
                            Getir'in bana özel kampanya, tanıtım ve
                            fırsatlarından haberdar olmak istiyorum.
                          </Label> */}
                          <FormGroup check>
                            <Input type="checkbox" id="check-modal-id" />{" "}
                            <Label id="checkbox-modal" check>
                              Getir'in bana özel kampanya, tanıtım ve
                              fırsatlarından haberdar olmak istiyorum.
                            </Label>
                          </FormGroup>
                        </Form>
                        <br />
                        <li id="kayıt-style">
                          <span id="kayıt-li">
                            Kayıt olmakla{" "}
                            <a
                              href="/"
                              data-bs-toggle="tooltip"
                              title="Tooltip"
                              style={{ color: "#4c3398" }}
                            >
                              Kullanım Koşulları
                            </a>
                            'nı onaylamış olursunuz.
                          </span>
                        </li>
                        <li id="kayıt-style">
                          <span id="kayıt-li">
                            Kişisel verilerinize dair Aydınlatma Metni için{" "}
                            <a
                              href="/"
                              data-bs-toggle="tooltip"
                              title="Tooltip"
                              style={{ color: "#4c3398" }}
                            >
                              tıklayınız
                            </a>
                            .
                          </span>
                        </li>

                        <Button id="kayıt-button">Kayıt ol</Button>
                      </Container>
                    </ModalBody>

                    <ModalBody id="kayıt-footer">
                      Getir'e üyeyseniz
                      <Button id="body-btn" onClick={() => setModals(true)}>
                        Giriş Yap
                        <NavLink
                          isOpen={modals}
                          toggle={() => setModals(!modals)}
                        ></NavLink>
                      </Button>
                    </ModalBody>
                  </Modal>
                </Container>
              </div>
              <FaUserPlus className="icons" />
              Kayıt Ol
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
}

export default Navi;
