import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import vintageCarData from "../assets/data/vintageCarData";

const VintageCarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = vintageCarData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  if (!singleCarItem) {
    return <div>Car not found</div>;
  }

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ₹{singleCarItem.price}.00 / Day
                  </h6>

                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                
                <BookingForm />
              </div>
            </Col>

            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default VintageCarDetails;
