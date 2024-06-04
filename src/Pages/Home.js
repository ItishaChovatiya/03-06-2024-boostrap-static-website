import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid">
          <img
            src="asset/pic/main.webp"
            alt="img"
            className="img-fluid w-100"
          ></img>
        </section>

        <div style={{ backgroundColor: "lightgray" }}>
          <div className="container-fluid     my-3">
            <h2 className="text-center">Best Sellers!</h2>
          </div>

          <section className="container ">
            <div className="row m-3 ">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                <div className="card ">
                  <img
                    src="asset//pic/p1.webp"
                    alt="img"
                    className="card-img img-hover"
                  ></img>
                  <div className="card-body ">
                    <h6 className="card-header  ">form</h6>
                    <p className="card-text pt-3 ">$8:00</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                <div className="card ">
                  <img
                    src="asset//pic/p2.webp"
                    alt="img"
                    className="card-img img-hover"
                  ></img>
                  <div className="card-body ">
                    <h6 className="card-header  ">form</h6>
                    <p className="card-text pt-3 ">$18:60</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                <div className="card ">
                  <img
                    src="asset//pic/p3.webp"
                    alt="img"
                    className="card-img img-hover"
                  ></img>
                  <div className="card-body ">
                    <h6 className="card-header  ">form</h6>
                    <p className="card-text pt-3 ">$12:05</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                <div className="card ">
                  <img
                    src="asset//pic/p4.webp"
                    alt="img"
                    className="card-img img-hover"
                  ></img>
                  <div className="card-body ">
                    <h6 className="card-header  ">form</h6>
                    <p className="card-text pt-3 ">$34:40</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="container-fluid">
          <img
            className="w-75 d-block mx-auto"
            alt="img" 
            src="asset//pic/welll.jpeg"
          ></img>
        </section>
        <section className="container-fluid">
          <div className="row bg">
            <div className="col-lg-6 col-md-6 col-sm-12 d-block mx-auto  mt-5">
              <h2 className="t1">
                
                DAY 21 : TREE HUT MOONLIGHT GLOW BODY SCRUB
              </h2>
              <p className="t2">
                Get glowing skin with this exfloating sugar scrub
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 "></div>
          </div>
        </section>
        <section className="container">
          <img
            className="w-100 d-block mx-auto p-5"
            alt="img"
            src="asset//pic/div.jpeg"
          ></img>
        </section>
        <section className="container-fluid">
          <div className="row mb-5 mt-5">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/a1.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/a2.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/a3.jpeg"
                  alt="img"
                  className="card-img  mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil{" "}
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/a4.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>{" "}
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil{" "}
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/a5.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil{" "}
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/a6.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="container-fluid row"
          style={{ backgroundColor: "#98fb98" }}
        >
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <img
              src="asset//pic/s2.webp"
              alt="img"
              className="card-img d-block mx-auto m-5 w-100"
            ></img>
            <h3 className="t3">TV & SOUNDBARS</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img
              src="asset//pic/t1.jpeg"
              alt="img"
              className="card-img  d-block mx-auto m-5 w-75"
            ></img>
            <h3 className="t3  text-capitalize">cheerin style</h3>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <img
              src="asset//pic/f5.jpg"
              alt="img"
              className="card-img d-block mx-auto m-5 w-100"
            ></img>
            <h3 className="t3 text-capitalize">game-day snaks</h3>
          </div>
          <div className="col-lg-1 col-md-1"></div>
        </section>
        <section className="container-fluid">
          <div className="row mb-5 mt-5">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/q2.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/q3.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/q4.jpeg"
                  alt="img"
                  className="card-img  mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil{" "}
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset/pic/q5.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil{" "}
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/q5.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil{" "}
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="asset//pic/q6.jpeg"
                  alt="img"
                  className="card-img-top mx-auto d-block w-75 pt-2"
                ></img>
                <div className="card-body">
                  <h5 className="card-text">
                    Naturium The Glow Getter Multi-Oil
                  </h5>
                  <p className="card-text">$34:40</p>
                  <button className="btn btn-primary">ADD CART</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
