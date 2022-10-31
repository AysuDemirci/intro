import { Field, Formik } from "formik";
import * as Yup from "yup";
import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  Container,
  Row,
  Col,
  Form,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

const items = [
  {
    src: "./images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg",
  },
  {
    src: "./images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg",
  },
  {
    src: "./images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg",
  },
];

const ErrorSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Geçerli numara giriniz."
    )

    .required("Alan boş bırakılamaz."),
});

export default class Commercial extends Component {
  componentDidMount() {
    this.props.getCountries();
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      activeIndex: 0,
      dropdownOpen: false,
      phone: "",
      countries: [],
      dropdownValue: "+90",
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  changeValue(e) {
    this.setState({ dropdownValue: e.currentTarget.textContent });
    let id = e.currentTarget.getAttribute("id");
    console.log(id);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="img-style" src={item.src} alt={item.altText} />
          {/* <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          /> */}
        </CarouselItem>
      );
    });

    return (
      <div>
        <div className="getirlogoplace">
          <Container>
            <Col md="8">
              <img
                src="./images/ac4af286059847.Y3JvcCwyNTA0LDE5NTgsMTI0NiwzNzE-removebg-preview.png"
                alt=""
              ></img>
            </Col>

            <Col md="9" className="getirlogo-text">
              <h1 style={{ fontSize: "35px" }}>
                Dakikalar içerisinde kapınızda
              </h1>
            </Col>
          </Container>
        </div>
        <div className="formstyle">
          <h5>Giriş yap veya kayıt ol</h5>
          <br></br>
          
            <Row>
              <Col>
                <Dropdown scrollable={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle className="button-style" caret>
                    {this.state.dropdownValue}
                  </DropdownToggle>
                  <DropdownMenu style={{maxHeight:"300px",overflowY:"scroll"}}>
                    {this.props.countries.map((country) => (
                      <DropdownItem  key={country.id} onClick={this.changeValue}>
                        <img src={country.image} alt=""></img>
                        {country.code}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col>
                <Formik
                  initialValues={{ phone: "" }}
                  onSubmit={(value, { resetForm }) => {
                    console.log(value);
                    resetForm();
                  }}
                  validationSchema={ErrorSchema}
                >
                  {({ errors, touched, dirty, isValid }) => (
                    <Form>
                      <Field
                        id="Input_style1"
                        placeholder="Telefon numarası"
                        type="text"
                        name="phone"
                        className={
                          touched.phone
                            ? `form-control ${
                                errors.phone ? "invalid" : "valid"
                              }`
                            : `form-control`
                        }
                        autoComplete="off"
                      />
                      {errors.phone && (
                        <small id="small-style" className="text-danger">
                          {errors.phone}
                        </small>
                      )}

                      <button
                        type="submit"
                        disabled={!isValid || !dirty}
                        className="button-style2"
                      >
                        Telefon numarası ile devam et
                      </button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          
        </div>

        <Carousel
          className="lineargradient-background"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
        </Carousel>
      </div>
    );
  }
}
