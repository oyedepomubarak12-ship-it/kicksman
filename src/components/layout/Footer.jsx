
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            KICKS<span>MAN</span>
          </Link>

          <p>
            Step into your style. Discover fashionable footwear
            and clothing at Kicksman Footwear Store.
          </p>

          <a
            href="https://instagram.com/kicksman__"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            Instagram: @kicksman__
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop Collection</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <MapPin size={17} />
            Shop F-15, 3rd Floor, 2nd Billionaire Plaza,
            Abibu Oki Street, Lagos Island, Lagos.
          </p>

          <a href="https://wa.me/2348089357260">
            <Phone size={17} />
            08089357260
          </a>

          <a
            href="https://instagram.com/kicksman_clothes"
            target="_blank"
            rel="noreferrer"
          >
            Instagram: @kicksman_clothes
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Kicksman Footwear Store.
          All rights reserved.
        </p>

        <p>Designed for style. Built for comfort.</p>
      </div>
    </footer>
  );
}

export default Footer;
