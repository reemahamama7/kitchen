// import React, { useState } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa"; // Make sure to install react-icons
// import Contact from "../pages/Contact";
// // import ReactDOM from "react-dom";
// // import { BrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-white shadow-lg">
//       <div className="container">
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <a className="navbar-brand" href="index.html">
//           Crispy Kitchen
//         </a>

//         <div className="d-lg-none">
//           <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">
//             Reservation
//           </button>
//         </div>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item">
//               <a className="nav-link active" href="index.html">
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="about.html">
//                 Story
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="menu.html">
//                 Menu
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="news.html">
//                 Our Updates
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="../pages/Contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="d-none d-lg-block">
//           <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">
//             Reservation
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// import "./Header.css";
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//         <a className="navbar-brand" href="index.html">
//           Crispy Kitchen
//         </a>

//         <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a href="index.html">Home</a>
//             </li>
//             <li className="nav-item">
//               <a href="about.html">Story</a>
//             </li>
//             <li className="nav-item">
//               <a href="menu.html">Menu</a>
//             </li>
//             <li className="nav-item">
//               <a href="news.html">Our Updates</a>
//             </li>
//             <li className="nav-item">
//               {/* <a href="contact.html">Contact</a> */}
//               <NavLink to="contact">contact</NavLink>
//             </li>
//           </ul>
//         </div>

//         <button type="button" className="reservation-btn">
//           Reservation
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import "./Header.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a className="navbar-brand" href="/">
          Crispy Kitchen
        </a>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/story">Story</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/news">Our Updates</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <button type="button" className="reservation-btn">
          Reservation
        </button>
      </div>
    </nav>
  );
};

export default Header;
