
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  X,
  Search,
} from "lucide-react";

import { useCart } from "../../hooks/useCart";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="main-header">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          KICKS<span>MAN</span>
          <small>FOOTWEAR STORE</small>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* NAVBAR ACTIONS */}
        <div className="navbar-actions">

          <Link
            to="/shop"
            className="navbar-search"
            aria-label="Search products"
          >
            <Search size={21} />
          </Link>

          <Link
            to="/cart"
            className="navbar-cart"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={22} />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/cart"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Shopping Cart ({cartCount})
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
