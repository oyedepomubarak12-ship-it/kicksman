
import React from "react";
import { categories } from "../../data/categories";

function ProductFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="product-filter product-filter-upgraded">
      <div className="product-filter-list">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`product-filter-button ${
              activeCategory === category.value ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category.value)}
            aria-pressed={activeCategory === category.value}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
