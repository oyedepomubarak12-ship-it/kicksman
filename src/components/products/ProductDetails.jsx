
import React, { useEffect, useState } from "react";
import {
  X,
  ShoppingBag,
  Check,
  Minus,
  Plus,
} from "lucide-react";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

function ProductDetails({ product, onClose }) {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedSize(product?.sizes?.[0] || "");
    setQuantity(1);
    setAdded(false);
  }, [product?.id]);

  if (!product) return null;

  const hasSizes = product.sizes?.length > 0;
  const needsSize = hasSizes && !selectedSize;

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : 0;

  const handleAddToCart = () => {
    if (!product.inStock || needsSize || added) return;

    addToCart(product, quantity, selectedSize || null);
    setAdded(true);

    window.setTimeout(() => {
      onClose?.();
    }, 900);
  };

  return (
    <div
      className="product-details-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="product-details-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-details-title"
      >
        <button
          type="button"
          className="product-details-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={23} />
        </button>

        <div className="product-details-image">
          <img src={product.image} alt={product.name} />

          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}

          {discount > 0 && (
            <span className="product-discount">
              -{discount}%
            </span>
          )}
        </div>

        <div className="product-details-content">
          <span className="product-category">
            {product.category}
          </span>

          <h2 id="product-details-title">{product.name}</h2>

          <div className="product-details-price">
            <strong>{formatPrice(product.price)}</strong>

            {product.oldPrice && (
              <del>{formatPrice(product.oldPrice)}</del>
            )}

            {discount > 0 && (
              <span>{discount}% OFF</span>
            )}
          </div>

          <p className="product-details-description">
            {product.description || "Quality footwear and fashion from Kicksman."}
          </p>

          <div className="product-availability">
            <span className={product.inStock ? "in-stock" : "out-of-stock"}>
              {product.inStock ? "In Stock" : "Currently Unavailable"}
            </span>
          </div>

          {hasSizes && (
            <div className="product-size-section">
              <h3>Select Size</h3>

              <div className="product-size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={selectedSize === size ? "selected" : ""}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {needsSize && (
                <p className="product-stock-message">
                  Please select a size before adding to cart.
                </p>
              )}
            </div>
          )}

          <div className="product-quantity-section">
            <h3>Quantity</h3>

            <div className="quantity-control">
              <button
                type="button"
                onClick={() =>
                  setQuantity((previous) => Math.max(1, previous - 1))
                }
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((previous) => previous + 1)
                }
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`product-details-add ${added ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={!product.inStock || needsSize || added}
          >
            {added ? (
              <>
                <Check size={19} />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={19} />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
