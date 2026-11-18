
import React from "react";
import { PackageSearch, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductGrid({
  products = [],
  emptyMessage = "No products found. Try another category.",
}) {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty product-grid-empty-upgraded">
        <div className="empty-products-icon">
          <PackageSearch size={38} />
        </div>

        <span>NO MATCHES FOUND</span>
        <h3>Nothing here just yet.</h3>
        <p>{emptyMessage}</p>

        <Link to="/shop" className="empty-products-link">
          Browse all products <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="product-grid product-grid-upgraded">
      {products.map((product, index) => (
        <div
          className="product-grid-item"
          key={product.id}
          style={{ "--product-index": index }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
