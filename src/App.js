// import "./App.css";
// import "./bootstrap.min.css";
// import "./bootstrap-icons.css";
// import "./tooplate-crispy-kitchen.css";
// import Header from "./components/Headr";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Hero from "./components/Hero";
// import Menu from "./components/Menu";
// import Events from "./components/Events";
// import Footer from "./components/Footer";
// import Contact from "./pages/Contact";
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <Menu />
//       <section className="BgImage"></section>
//       <Events />
//       <Footer />
//     </div>

//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import "./bootstrap-icons.css";
import "./tooplate-crispy-kitchen.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";

import Contact from "./pages/Contact";
import Story from "./pages/Story";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<Menu />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
