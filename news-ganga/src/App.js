import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsCard from "./components/NewsCard";
import Sidebar from "./components/Sidebar";
import CategoryFilter from "./components/CategoryFilter";
import Footer from "./components/Footer";
import { news } from "./data/news";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  const [cat, setCat] = useState("All");
  const grid = useMemo(
    () => (cat === "All" ? news.slice(1) : news.filter(n => n.category === cat)),
    [cat]
  );
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero item={news[0]} />
        <div className="section-head">
          <h2><span className="bar" />Latest Stories</h2>
          <CategoryFilter value={cat} onChange={setCat} />
        </div>
        <div className="layout">
          <div className="grid">
            {grid.map(n => <NewsCard key={n.id} item={n} />)}
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";

// function Home() {
//   return (
//     <>
//       <Header />
//       <h1 style={{ textAlign: "center" }}>Home Page ✔</h1>
//     </>
//   );
// }

// function Login() {
//   return (
//     <h1 style={{ textAlign: "center" }}>
//       Login Page ✔
//     </h1>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

