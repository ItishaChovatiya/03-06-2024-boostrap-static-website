import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        <section className="bg-secondary text-white pt-5 pb-4">
          <div className="container text-left text-md-left">
            <div className="row text-left text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
                <h5 className="text-uppercase  mb-4 font-weight-bold text-info ">
                  ABOUT THE SHOP
                </h5>

                <p className="move">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  A mix of sexy and cute, Studd Muffyn is a proud Indian brand
                  that combines good.
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-xl-2 mx-auto mt-3 ">
                <h5 className="text-uppercase  mb-4 font-weight-bold text-info">
                  HELPFUL LINKS
                </h5>
                <p className="move">
                  <p className="text-white ">Contact Us</p>
                </p>
                <p className="move">
                  <p className="text-white">About Us</p>
                </p>
                <p className="move">
                  <p className="text-white">Blogs</p>
                </p>
                <p className="move">
                  <p className="text-white">
                    Paras Tomar Social Media Handle
                  </p>
                </p>
                <p className="move">
                  <p className="text-white">Shipping and delivery policy</p>
                </p>
                <p className="move">
                  <p className="text-white">Privacy Policy</p>
                </p>
                <p className="move">
                  <p className="text-white">Refund And Return Policy</p>
                </p>
                <p className="move">
                  <p className="text-white">Track your order</p>
                </p>
                <p className="move">
                  <p className="text-white">Terms and Conditions</p>
                </p>
              </div>
              <div className="col-lg-2 col-md-3 col-xl-2 mx-auto mt-3 ">
                <h5 className="text-uppercase  mb-4 font-weight-bold text-info ">
                  How to use?
                </h5>
                <p className="move">
                  <p className="text-white">Hyaluronic Gel</p>
                </p>
                <p className="move">
                  <p className="text-white">Pigmentation Cream</p>
                </p>
                <p className="move">
                  <p className="text-white">Underarm Cream</p>
                </p>
                <p className="move">
                  <p className="text-white">Glass Skin Rice Water Gel</p>
                </p>
                <p className="move">
                  <p className="text-white">
                    Glass Skin Rice Water Face Mist
                  </p>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
                <h5 className="text-uppercase  mb-4 font-weight-bold text-info">
                  NEED HELP
                </h5>
                <p className="move">Customer care at :</p>
                <p className="move">E-mail on: care@studdmuffyn.com</p>
                <p className="move">Customer Care: +91-78600 00768</p>
                <p className="move">
                  Timings:- MONDAY - SATURDAY - 10 AM TO 6 PM
                </p>
                <p className="move">
                  You can track your orders:{" "}
                  <button className="btn bg-light  btn-outline-dark  text-dark ">
                    CLICK HERE
                  </button>
                </p>
                <ul className="list-unstyled list-inline ">
                  <li className="list-inline-item ">
                    <p className="btn-floating btn-sm text-white ">
                      <i className="fab fa-facebook move"></i>
                    </p>
                  </li>
                  <li className="list-inline-item ">
                    <p className="btn-floating btn-sm text-white ">
                      <i className="fab fa-instagram move"></i>
                    </p>
                  </li>
                  <li className="list-inline-item ">
                    <p className="btn-floating btn-sm text-white ">
                      <i className="fab fa-youtube move"></i>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
