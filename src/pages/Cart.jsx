
import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import { orderCartOnWhatsApp } from "../utils/whatsapp";

function Cart() {
  const {
    cart,
    cartCount,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    orderCartOnWhatsApp(cart, cartTotal);
  };

  if (cart.length === 0) {
    return (
      <main className="cart-page cart-page-upgraded section-container">
        <div className="empty-cart empty-cart-upgraded">
          <div className="empty-cart-icon">
            <ShoppingBag size={42} />
          </div>

          <span className="cart-eyebrow">YOUR SHOPPING BAG</span>
          <h1>Your Cart Is Empty</h1>

          <p>
            Looks like you haven't added anything to your bag yet.
            Discover something you love at Kicksman.
          </p>

          <Link to="/shop" className="cart-empty-cta">
            Explore Collection
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page cart-page-upgraded section-container">
      <div className="cart-heading cart-heading-upgraded">
        <span className="cart-eyebrow">YOUR SELECTION</span>
        <h1>Shopping Cart<span>.</span></h1>
        <p>
          You have <strong>{cartCount}</strong> item(s) in your shopping bag.
        </p>
      </div>

      <div className="cart-layout cart-layout-upgraded">
        <section className="cart-items">
          <div className="cart-items-heading">
            <h2>Your Items</h2>
            <span>{cart.length} product(s)</span>
          </div>

          {cart.map((item) => (
            <article className="cart-item cart-item-upgraded" key={item.cartItemId}>
              <Link
                to={`/shop?product=${item.id}`}
                className="cart-item-image cart-item-image-upgraded"
                aria-label={`View ${item.name}`}
              >
                <img src={item.image} alt={item.name} />
              </Link>

              <div className="cart-item-details cart-item-details-upgraded">
                <span className="cart-item-category">{item.category}</span>

                <h3>{item.name}</h3>

                {item.size && (
                  <p className="cart-item-size">
                    Selected size: <strong>{item.size}</strong>
                  </p>
                )}

                <strong className="cart-item-price">
                  {formatPrice(item.price)}
                </strong>

                <div className="cart-item-actions">
                  <div className="quantity-control cart-quantity-control">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.cartItemId)}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus size={14} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.cartItemId)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-cart-item remove-cart-item-upgraded"
                    onClick={() => removeFromCart(item.cartItemId)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={15} />
                    Remove
                  </button>
                </div>
              </div>

              <div className="cart-item-subtotal cart-item-subtotal-upgraded">
                <span>Subtotal</span>
                <strong>
                  {formatPrice(item.price * item.quantity)}
                </strong>
              </div>
            </article>
          ))}

          <Link to="/shop" className="continue-shopping continue-shopping-upgraded">
            <ArrowRight size={17} />
            Continue Shopping
          </Link>
        </section>

        <aside className="cart-summary cart-summary-upgraded">
          <span className="cart-summary-eyebrow">YOUR ORDER</span>
          <h2>Order Summary</h2>

          <div className="cart-summary-row">
            <span>Products</span>
            <strong>{cartCount}</strong>
          </div>

          <div className="cart-summary-row">
            <span>Subtotal</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>

          <div className="cart-summary-row">
            <span>Delivery</span>
            <strong className="delivery-pending">To be confirmed</strong>
          </div>

          <div className="cart-summary-total">
            <span>Estimated Total</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>

          <p className="cart-summary-note">
            Delivery charges and final order details will be confirmed
            with you on WhatsApp.
          </p>

          <button
            type="button"
            className="whatsapp-checkout whatsapp-checkout-upgraded"
            onClick={handleWhatsAppOrder}
          >
            <MessageCircle size={19} />
            Order Through WhatsApp
          </button>

          <div className="cart-trust-points">
            <div>
              <ShieldCheck size={18} />
              <span>Order confirmation before payment</span>
            </div>

            <div>
              <Truck size={18} />
              <span>Delivery details confirmed with you</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
