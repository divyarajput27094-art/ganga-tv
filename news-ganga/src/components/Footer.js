import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <h3>The <span className="red">Ganga</span> TV News</h3>
          <p>आपका अपना मंच — sach, sabse pehle.</p>
        </div>
        <div>
          <h4>Sections</h4>
          <a>Politics</a><a>Sports</a><a>Entertainment</a><a>Breaking</a>
        </div>
        <div>
          <h4>Follow us</h4>
          <div className="social">
            <a>Facebook</a><a>Twitter</a><a>YouTube</a><a>Instagram</a>
          </div>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} Ganga TV News. All rights reserved.</div>
    </footer>
  );
}
