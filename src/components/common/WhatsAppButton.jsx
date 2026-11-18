
import React from "react";
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Kicksman, I would like to make an enquiry."
  );

  return (
    <a
      href={`https://wa.me/2348089357260?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Contact Kicksman on WhatsApp"
    >
      <MessageCircle size={25} />
      <span>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
