
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Check,
  ArrowUpRight,
} from "lucide-react";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : 0;

  const productLink = `/shop?product=${product.id}`;

  const handleAddToCart = () => {
    if (!product.inStock || added) return;

    addToCart(product, 1, null);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1600);
  };

  return (
    <article className="product-card product-card-upgraded">
      <div className="product-card-image">
        <Link
          to={productLink}
          className="product-image-link"
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        <div className="product-card-top">
          {product.badge && (
            <span className="product-badge">
              {product.badge}
            </span>
          )}

          {discount > 0 && (
            <span className="product-discount">
              -{discount}%
            </span>
          )}
        </div>

        <Link
          to={productLink}
          className="product-view-link"
          aria-label={`View details for ${product.name}`}
        >
          <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          className={`product-add-button ${
            added ? "product-added" : ""
          } ${
            !product.inStock ? "product-out-of-stock" : ""
          }`}
          onClick={handleAddToCart}
          disabled={!product.inStock || added}
        >
          {added ? (
            <>
              <Check size={17} />
              Added to Cart
            </>
          ) : !product.inStock ? (
            "Out of Stock"
          ) : (
            <>
              <ShoppingBag size={17} />
              Quick Add
            </>
          )}
        </button>
      </div>

      <div className="product-card-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>
          <Link to={productLink}>
            {product.name}
          </Link>
        </h3>

        <div className="product-price">
          <span>{formatPrice(product.price)}</span>

          {product.oldPrice && (
            <del>{formatPrice(product.oldPrice)}</del>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
