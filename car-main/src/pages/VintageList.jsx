import { Col, Container, Row } from "reactstrap";
import vintageCarData from "../assets/data/vintageCarData";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { Link } from "react-router-dom";
import VintagecarItem from "../components/UI/VintagecarItem";

const VintageList = () => {
    return (
      <Helmet title="Cars">
        <CommonSection title="Vintage Car Listing" />
  
        <section>
          <Container>
            <Row>
              <Col lg="12">
              <div class="btn-group">
                  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Large button
                  </button>
               <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="#"><Link  className="nav-link" to="/cars">Normal Cars</Link></a></li>
               <li><a class="dropdown-item" href="#">Vintage Cars</a></li>
               <li><a class="dropdown-item" href="#">Something else here</a></li>
               <li><hr class="dropdown-divider"/></li>
               <li><a class="dropdown-item" href="#">Separated link</a></li>
               </ul>
               </div>
              </Col>
  
              {vintageCarData.map((item) => (
                <VintagecarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  };
  
  export default VintageList;