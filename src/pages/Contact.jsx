
import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ArrowUpRight,
  Camera,
  Headphones,
  ShoppingBag,
} from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";

function Contact() {
  const whatsappLink = "https://wa.me/2348089357260";
  const instagramLink = "https://instagram.com/kicksman__";
  const clothingInstagram =
    "https://instagram.com/kicksman_clothes";

  return (
    <main className="contact-page contact-page-upgraded">

      {/* HERO SECTION */}
      <section className="contact-hero contact-hero-upgraded">
        <div className="contact-hero-inner">
          <span className="contact-hero-eyebrow">
            WE WOULD LOVE TO HEAR FROM YOU
          </span>

          <h1>
            Let's Talk
            <br />
            <strong>Fashion.</strong>
          </h1>

          <p>
            Questions about our footwear, products or orders?
            We're just one message away.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-hero-button"
          >
            <MessageCircle size={19} />
            Contact Our Team
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="contact-hero-decoration">
          <ShoppingBag size={100} strokeWidth={0.8} />
          <span>KICKSMAN</span>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-content contact-content-upgraded section-container">

        {/* CONTACT INFORMATION */}
        <div className="contact-information">
          <SectionHeading
            eyebrow="CONTACT INFORMATION"
            title="Get In"
            highlight="Touch."
            description="Everything you need to reach the Kicksman team."
          />

          <div className="contact-info-list">

            {/* STORE ADDRESS */}
            <div className="contact-info-card contact-info-card-upgraded">
              <div className="contact-info-icon">
                <MapPin size={23} />
              </div>

              <div>
                <h3>Our Store Address</h3>
                <p>
                  Shop F-15, 3rd Floor, 2nd Billionaire Plaza,
                  Abibu Oki Street, Lagos Island, Lagos.
                </p>
              </div>

              <ArrowUpRight
                className="contact-info-arrow"
                size={18}
              />
            </div>

            {/* PHONE */}
            <div className="contact-info-card contact-info-card-upgraded">
              <div className="contact-info-icon">
                <Phone size={23} />
              </div>

              <div>
                <h3>Phone / WhatsApp</h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  08089357260
                </a>
              </div>

              <ArrowUpRight
                className="contact-info-arrow"
                size={18}
              />
            </div>

            {/* INSTAGRAM */}
            <div className="contact-info-card contact-info-card-upgraded">
              <div className="contact-info-icon">
                <Camera size={23} />
              </div>

              <div>
                <h3>Instagram</h3>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @kicksman__
                </a>
              </div>

              <ArrowUpRight
                className="contact-info-arrow"
                size={18}
              />
            </div>

            {/* OPENING HOURS */}
            <div className="contact-info-card contact-info-card-upgraded">
              <div className="contact-info-icon">
                <Clock size={23} />
              </div>

              <div>
                <h3>Opening Hours</h3>
                <p>
                  Please contact us to confirm availability.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CUSTOMER SUPPORT CARD */}
        <aside className="contact-message-card contact-message-card-upgraded">

          <div className="contact-support-icon">
            <Headphones size={27} />
          </div>

          <span className="contact-card-eyebrow">
            CUSTOMER SUPPORT
          </span>

          <h2>We're Here To Help.</h2>

          <p>
            Need help choosing a product or checking your order?
            Send us a message and let our team assist you.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp-button"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-card-divider" />

          <span className="contact-social-label">
            FOLLOW OUR STORES
          </span>

          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-instagram-link"
          >
            <Camera size={17} />
            Footwear — @kicksman__
            <ArrowUpRight size={16} />
          </a>

          <a
            href={clothingInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-instagram-link"
          >
            <Camera size={17} />
            Clothing — @kicksman_clothes
            <ArrowUpRight size={16} />
          </a>

        </aside>

      </section>
    </main>
  );
}

export default Contact;
