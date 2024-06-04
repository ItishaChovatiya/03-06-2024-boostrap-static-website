import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Decor from "./Pages/Decor";
import Grocery from "./Pages/Grocery";
import Degital from "./Pages/Degital";
import Deal from "./Pages/Deal";

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/decor" element={<Decor></Decor>}></Route>
          <Route path="/grocery" element={<Grocery></Grocery>}></Route>
          <Route path="/degital" element={<Degital></Degital>}></Route>
          <Route path="/deal" element={<Deal></Deal>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
