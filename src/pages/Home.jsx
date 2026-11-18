
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  Star,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";
import ProductGrid from "../components/products/ProductGrid";
import Newsletter from "../components/common/Newsletter";
import { getFeaturedProducts } from "../data/products";

function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero-section home-hero-upgraded">
        <div className="hero-content home-hero-content">
          <span className="hero-eyebrow">
            <Sparkles size={14} />
            KICKSMAN FOOTWEAR STORE
          </span>

          <h1>
            WALK BOLD.
            <br />
            <span>LIVE IN STYLE.</span>
          </h1>

          <p>
            Great style starts from the ground up. Discover footwear
            and fashion pieces that bring confidence to every step.
          </p>

          <div className="hero-buttons">
            <Link
              to="/shop"
              className="custom-button button-medium button-primary"
            >
              Explore Collection <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="custom-button button-medium button-outline"
            >
              Our Story
            </Link>
          </div>

          <div className="hero-rating">
            <div className="hero-rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={15} fill="currentColor" />
              ))}
            </div>
            <span>Find a look that speaks for you</span>
          </div>

          <div className="hero-mini-stats">
            <div>
              <strong>01</strong>
              <span>Find your style</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Choose your fit</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Step out boldly</span>
            </div>
          </div>
        </div>

        <div className="hero-image home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400"
            alt="Featured red sneaker from the Kicksman style collection"
          />

          <div className="hero-image-label">
            <span>THE KICKSMAN EDIT</span>
            <strong>Own Your Style.</strong>
            <Link to="/shop">
              Discover more <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="hero-side-caption">
            STYLE THAT MOVES WITH YOU
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section home-benefits">
        <div className="benefit-item">
          <Truck size={27} />
          <div>
            <h3>Delivery Arrangements</h3>
            <p>Ask us about delivery across Nigeria.</p>
          </div>
        </div>

        <div className="benefit-item">
          <ShieldCheck size={27} />
          <div>
            <h3>Quality Selection</h3>
            <p>Explore footwear and fashion styles.</p>
          </div>
        </div>

        <div className="benefit-item">
          <RefreshCw size={27} />
          <div>
            <h3>Customer Support</h3>
            <p>Get assistance with your shopping.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-section section-container">
        <div className="home-section-topline">
          <span>CURATED FOR YOUR EVERYDAY</span>
          <span>01 / THE COLLECTION</span>
        </div>

        <SectionHeading
          eyebrow="THE KICKSMAN COLLECTION"
          title="A Better Way"
          highlight="To Step Out."
          description="Explore selected styles and discover your next favourite look."
          align="center"
        />

        <ProductGrid products={featuredProducts} />

        <div className="featured-footer">
          <Link
            to="/shop"
            className="custom-button button-medium button-primary"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="home-promo home-promo-upgraded">
        <div className="home-promo-content">
          <span>YOUR STYLE. YOUR STATEMENT.</span>

          <h2>
            Make Every
            <br />
            Step Count.
          </h2>

          <p>
            Your footwear says something before you do.
            Choose pieces that express your personality.
          </p>

          <Link
            to="/shop"
            className="custom-button button-medium button-light"
          >
            Shop the Collection <ArrowRight size={18} />
          </Link>
        </div>

        <div className="home-promo-image">
          <img
            src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200"
            alt="Classic casual sneakers"
            loading="lazy"
          />
          <span className="promo-image-caption">KICKSMAN / EVERYDAY STYLE</span>
        </div>
      </section>

      {/* NEWSLETTER DEMO */}
      <Newsletter />
    </main>
  );
}

export default Home;
