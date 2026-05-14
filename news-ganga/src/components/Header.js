// import React, { useState } from "react";
// import img from "../assets/gangatv.png";
// const NAV = ["Home","Local News","International","Sports","Entertainment","Politics"];

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="header">
//       <div className="topbar container">
//         <div className="brand">
//           <img src={img} alt="logo" style={{ width: "120px" }} />
//           <h1>The <span className="red">Ganga</span> TV News<small>आपका अपना मंच</small></h1>
//         </div>
//         <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
//       </div>

//       <nav className={`nav ${open ? "open" : ""}`}>
//         <div className="container nav-inner">
//           {NAV.map(n => <a key={n} href="#">{n}</a>)}
//         </div>
//       </nav>

//       <div className="ticker-wrap container">
//         <span className="live">● BREAKING</span>
//         <div className="ticker">
//           <span>Parliament passes reform bill with majority vote</span> •
//           <span> India clinches series with last-ball six</span> •
//           <span> Sensex hits 80,000 mark</span> •
//           <span> Heavy rainfall alert in western coast</span>
//         </div>
//       </div>
//     </header>
//   );
// }



import React, { useState } from "react";
import img from "../assets/gangatv.png";
import { Link } from "react-router-dom";

<Link to="/login" className="login-btn">
  Login
</Link>

const NAV = ["Home","Local News","International","Sports","Entertainment","Politics"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      {/* TOP BAR */}
      <div className="topbar container">

        {/* LEFT BRAND */}
        <div className="brand">
          <img src={img} alt="logo" style={{ width: "120px" }} />
          <h1>
            The <span className="red">Ganga</span> TV News
            <small>आपका अपना मंच</small>
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-controls">
          <input
            type="text"
            placeholder="Search news..."
            className="search-box"
          />

          <button className="login-btn">Login</button>
        </div>

        {/* HAMBURGER */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* NAV */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <div className="container nav-inner">
          {NAV.map(n => <a key={n} href="#">{n}</a>)}
        </div>
      </nav>

      {/* TICKER */}
      <div className="ticker-wrap container">
        <span className="live">● BREAKING</span>
        <div className="ticker">
          <span>Parliament passes reform bill with majority vote</span> •
          <span> India clinches series with last-ball six</span> •
          <span> Sensex hits 80,000 mark</span> •
          <span> Heavy rainfall alert in western coast</span>
        </div>
      </div>

    </header>
  );
}


// import React, { useState } from "react";
// import img from "../assets/gangatv.png";
// import { Link } from "react-router-dom";

// const NAV = ["Home","Local News","International","Sports","Entertainment","Politics"];

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="header">

//       <div className="topbar container">

//         <div className="brand">
//           <img src={img} alt="logo" style={{ width: "120px" }} />
//           <h1>The <span className="red">Ganga</span> TV News</h1>
//         </div>

//         <div className="right-controls">

//           <input
//             type="text"
//             placeholder="Search news..."
//             className="search-box"
//           />

//           <Link to="/login" className="login-btn">
//             Login
//           </Link>

//         </div>

//         <button onClick={() => setOpen(!open)}>
//           ☰
//         </button>

//       </div>

//     </header>
//   );
// }



