import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className=" mt-sm-3 p-sm-4" style={{backgroundColor: "#8ecae6"}}>
        <Row>
          
          <Col sm>
            <h2 className="link-light logo">
              <p>
                <span style={{color:'#005073'}}>24</span>
                <span style={{color:'#005073'}}>Carat</span>
              </p>
            </h2>
            <p className="link-dark" >Your search ends here!!!</p>
          </Col>

          <Col sm>
            <div className="col-md m-3">
              <div className="ftco-footer-widget mb-5 ml-md-5">
                <h2 className="ftco-heading-2 link-light">My Easy Buy</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      View and Rewards
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Special Offers
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Sign in or Created account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm>
            <div className="col-md m-3">
              <div className="ftco-footer-widget mb-5 ml-md-5">
                <h2 className="ftco-heading-2 link-light">Credit Cards</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Apply for Easy card
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Credit Cards Offers
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Make Payment through Discover card
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm>
            <div className="col-md m-3">
              <div className="ftco-footer-widget mb-5 ml-md-5">
                <h2 className="ftco-heading-2 link-light">
                  Orders and Returns
                </h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Order status
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Shipping, Delivery & Store pickups
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{color:'black'}}>
                      <span className="glyphicon glyphicon-arrow-right"></span>{" "}
                      Returns and Exchange rules
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm>
            <div className="col-md m-3">
              <div className="ftco-footer-widget mb-2 ml-md-2">
                <h2 className="ftco-heading-2 link-light">Contact Us</h2>
                <div className="block-23 mb-3">
                  <span className="glyphicon glyphicon-map-marker"></span>
                  <span className="text"> 101 Dude St. Mountain View,</span>
                  <a href="#" style={{color:'black'}}>
                    <span className="glyphicon glyphicon-earphone"></span>
                    <span className="text"> +2 392 3929 210</span>
                  </a>
                  <a href="#" style={{color:'black'}}>
                    <span className="glyphicon glyphicon-envelope"></span>
                    <span className="text"> info@b24carat.com</span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
