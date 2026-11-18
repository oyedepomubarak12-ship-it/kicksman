
import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <span>STAY IN THE LOOP</span>

        <h2>
          Get the Latest
          <strong> Kicksman Updates.</strong>
        </h2>

        <p>
          Stay informed about new collections, product
          announcements and store updates.
        </p>

        {submitted ? (
          <div className="newsletter-success">
            <CheckCircle size={20} />
            Thank you for your interest!
          </div>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">
              Subscribe
              <Send size={16} />
            </button>
          </form>
        )}

        <small>
          Newsletter registration will be connected to the backend later.
        </small>
      </div>
    </section>
  );
}

export default Newsletter;
