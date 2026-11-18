
import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import ProductGrid from "../components/products/ProductGrid";
import ProductFilter from "../components/products/ProductFilter";
import ProductDetails from "../components/products/ProductDetails";
import SectionHeading from "../components/common/SectionHeading";

import { products, getProductById } from "../data/products";

function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedProductId = searchParams.get("product");
  const selectedProduct = selectedProductId
    ? getProductById(selectedProductId)
    : null;

  const closeProductDetails = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("product");
    setSearchParams(nextParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter(
        (product) => product.category === activeCategory
      );
    }

    if (searchTerm.trim()) {
      const search = searchTerm.trim().toLowerCase();

      result = result.filter((product) => {
        const name = product.name?.toLowerCase() || "";
        const category = product.category?.toLowerCase() || "";
        const description = product.description?.toLowerCase() || "";

        return (
          name.includes(search) ||
          category.includes(search) ||
          description.includes(search)
        );
      });
    }

    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "featured") {
      result.sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
    }

    return result;
  }, [activeCategory, searchTerm, sortOption]);

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchTerm("");
    setSortOption("featured");
  };

  const hasActiveFilters =
    activeCategory !== "All" || searchTerm.trim() !== "";

  const scrollToProducts = () => {
    document.getElementById("shop-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="shop-page shop-page-upgraded">

      {/* SHOP HERO */}
      <section className="shop-header shop-header-upgraded">
        <div className="shop-header-content">
          <span className="shop-eyebrow">
            THE KICKSMAN COLLECTION
          </span>

          <h1>
            Find Your
            <span> Next Favourite.</span>
          </h1>

          <p>
            Explore footwear and fashion selected to help you
            express your style with confidence.
          </p>

          <button
            type="button"
            onClick={scrollToProducts}
            className="shop-hero-link"
          >
            Explore products <ArrowRight size={17} />
          </button>
        </div>

        <div className="shop-header-index">
          <span>COLLECTION</span>
          <strong>01</strong>
          <span>FIND YOUR FIT</span>
        </div>
      </section>

      {/* SHOP PRODUCTS */}
      <section
        className="shop-products-section section-container shop-products-upgraded"
        id="shop-products"
      >
        <div className="shop-intro-row">
          <SectionHeading
            eyebrow="EXPLORE OUR PRODUCTS"
            title="The"
            highlight="Collection."
            description="Browse our available products and find a style that feels like you."
          />

          <div className="shop-total-badge">
            <span>{products.length}</span>
            <small>DEMO PRODUCTS</small>
          </div>
        </div>

        {/* SEARCH AND SORT */}
        <div className="shop-toolbar shop-toolbar-upgraded">
          <div className="shop-search shop-search-upgraded">
            <Search size={19} />

            <input
              type="search"
              placeholder="Search shoes, clothing and more..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search products"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="shop-sort shop-sort-upgraded">
            <SlidersHorizontal size={17} />

            <label htmlFor="shop-sort-select">Sort by</label>

            <select
              id="shop-sort-select"
              value={sortOption}
              onChange={(event) => setSortOption(event.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="shop-filter-heading">
          <div>
            <span>SHOP BY CATEGORY</span>
            <p>Find something that matches your style.</p>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="shop-reset-button"
              onClick={resetFilters}
            >
              Reset filters <X size={14} />
            </button>
          )}
        </div>

        <ProductFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* RESULTS */}
        <div className="shop-results-info shop-results-upgraded">
          <p>
            Showing <strong>{filteredProducts.length}</strong>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>

          {activeCategory !== "All" && (
            <span>{activeCategory}</span>
          )}
        </div>

        <ProductGrid
          products={filteredProducts}
          emptyMessage="Try another search term or select a different category."
        />
      </section>

      {/* PRODUCT DETAILS */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
    </main>
  );
}

export default Shop;
