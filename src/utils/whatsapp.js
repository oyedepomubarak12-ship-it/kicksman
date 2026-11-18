
export const WHATSAPP_NUMBER = "2348089357260";

// Generate a WhatsApp link
export const generateWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Order one product
export const orderProductOnWhatsApp = (product) => {
  const message = `
Hello Kicksman!

I would like to order this product:

Product: ${product.name}
Category: ${product.category}
Price: ₦${Number(product.price).toLocaleString("en-NG")}
Quantity: 1

Please provide more details about availability and delivery.

Thank you.
  `;

  window.open(
    generateWhatsAppLink(message),
    "_blank",
    "noopener,noreferrer"
  );
};

// Order all cart products
export const orderCartOnWhatsApp = (cart, total) => {
  if (!cart || cart.length === 0) {
    return;
  }

  const items = cart
    .map((item, index) => {
      return `
${index + 1}. ${item.name}
   Category: ${item.category}
   Size: ${item.size || "Not selected"}
   Quantity: ${item.quantity}
   Price: ₦${Number(item.price).toLocaleString("en-NG")}
   Subtotal: ₦${Number(
     item.price * item.quantity
   ).toLocaleString("en-NG")}
`;
    })
    .join("\n");

  const message = `
Hello Kicksman!

I would like to place an order.

MY ORDER:

${items}

TOTAL: ₦${Number(total).toLocaleString("en-NG")}

Please confirm product availability, delivery charges and payment details.

Thank you!
  `;

  window.open(
    generateWhatsAppLink(message),
    "_blank",
    "noopener,noreferrer"
  );
};
