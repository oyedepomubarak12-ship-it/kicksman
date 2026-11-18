
import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Heart,
  ShieldCheck,
  Truck,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Button from "../components/common/Button";

const values = [
  {
    icon: Award,
    number: "01",
    title: "Quality",
    description:
      "We focus on offering footwear and fashion that combine style, comfort and quality.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Customer Satisfaction",
    description:
      "We want every customer to enjoy a smooth and positive shopping experience.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Trust",
    description:
      "We value honest communication, transparency and reliable customer service.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Convenience",
    description:
      "We make it easy to explore our collection and place orders with us.",
  },
];

function About() {
  return (
    <main className="about-page about-page-upgraded">
      {/* HERO */}
      <section className="about-hero about-hero-upgraded">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            <Sparkles size={14} />
            THE KICKSMAN EXPERIENCE
          </span>

          <h1>
            More Than
            <br />
            Just <span>Footwear.</span>
          </h1>

          <p>
            Welcome to Kicksman Footwear Store, where fashion,
            comfort and personal style come together. Find
            footwear that helps you make every step count.
          </p>

          <div className="about-hero-actions">
            <Link to="/shop">
              <Button icon={<ArrowRight size={18} />}>
                Explore Collection
              </Button>
            </Link>

            <Link to="/contact" className="about-secondary-link">
              Contact Us
            </Link>
          </div>

          <div className="about-hero-note">
            <span className="about-note-line" />
            <span>STYLE STARTS FROM THE GROUND UP</span>
          </div>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=1200"
            alt="Footwear collection"
          />

          <div className="about-image-label">
            <span>THE KICKSMAN STANDARD</span>
            <strong>Walk Bold. Live in Style.</strong>
          </div>

          <span className="about-image-index">01 / 04</span>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story about-story-upgraded section-container">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000"
            alt="Stylish red sneakers"
          />

          <div className="about-story-image-tag">
            <ShoppingBag size={19} />
            <span>FASHION MEETS COMFORT</span>
          </div>
        </div>

        <div className="about-story-content">
          <span className="about-eyebrow">OUR STORY</span>

          <h2>
            Helping You
            <br />
            <span>Express Your Style.</span>
          </h2>

          <p>
            At Kicksman, we believe that what you wear tells
            a story. That's why we bring together footwear
            and fashion styles that help you express yourself.
          </p>

          <p>
            From everyday sneakers to formal footwear, our
            collection is designed for people who appreciate
            style, comfort and quality.
          </p>

          <Link to="/contact" className="about-text-link">
            Get in touch with us <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values about-values-upgraded">
        <div className="section-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT WE STAND FOR</span>
            <h2>Our Core Values<span>.</span></h2>
            <p>
              The principles that guide the Kicksman shopping experience.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.number}>
                  <div className="about-value-top">
                    <span>{value.number}</span>
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>

                  <span className="about-value-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORE VISIT */}
      <section className="about-store section-container">
        <div className="about-store-content">
          <span className="about-eyebrow">FIND OUR STORE</span>
          <h2>
            Your Next Favourite
            <span> Pair Awaits.</span>
          </h2>
          <p>
            Visit Kicksman Footwear Store at our Lagos Island location
            or contact us to make an enquiry about our collection.
          </p>

          <div className="about-store-address">
            <MapPin size={21} />
            <div>
              <strong>Our Store Address</strong>
              <span>
                Shop F-15, 3rd Floor, 2nd Billionaire Plaza,
                Abibu Oki Street, Lagos Island, Lagos.
              </span>
            </div>
          </div>

          <Link to="/contact" className="about-text-link">
            Contact the Store <ArrowRight size={17} />
          </Link>
        </div>

        <div className="about-store-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Modern retail store interior"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta about-cta-upgraded">
        <span className="about-eyebrow">YOUR STYLE. YOUR STATEMENT.</span>
        <h2>
          Ready to Find
          <br />
          Your <span>Style?</span>
        </h2>
        <p>Explore the Kicksman collection and find your next favourite look.</p>

        <div className="about-cta-actions">
          <Link to="/shop">
            <Button variant="light" icon={<ArrowRight size={18} />}>
              Shop Now
            </Button>
          </Link>

          <a
            href="https://wa.me/2348089357260"
            target="_blank"
            rel="noreferrer"
            className="about-whatsapp-link"
          >
            <MessageCircle size={18} />
            Chat with Us
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
