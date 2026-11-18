
export const products = [
  {
    id: 1,
    name: "Air Street Sneakers",
    category: "Sneakers",
    price: 85000,
    oldPrice: 100000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    badge: "BEST SELLER",
    description:
      "Premium everyday sneakers designed for comfort and style.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    featured: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Urban Sneakers",
    category: "Sneakers",
    price: 95000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900",
    badge: "NEW ARRIVAL",
    description:
      "Modern urban sneakers for a confident everyday look.",
    sizes: ["40", "41", "42", "43", "44"],
    featured: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Premium Leather Shoes",
    category: "Formal Shoes",
    price: 110000,
    oldPrice: 125000,
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900",
    badge: "POPULAR",
    description:
      "Elegant leather footwear for formal occasions.",
    sizes: ["40", "41", "42", "43", "44"],
    featured: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Classic Fashion Trainers",
    category: "Sneakers",
    price: 75000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900",
    badge: "",
    description:
      "Versatile trainers that complement your streetwear.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    featured: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Premium Streetwear",
    category: "Clothing",
    price: 45000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=900",
    badge: "NEW",
    description: "Stylish clothing for everyday fashion.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Modern Casual Shoes",
    category: "Casual Shoes",
    price: 90000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900",
    badge: "",
    description:
      "Comfortable casual footwear with a modern finish.",
    sizes: ["40", "41", "42", "43", "44"],
    featured: false,
    inStock: true,
  },
  {
    id: 7,
    name: "Luxury Running Sneakers",
    category: "Sneakers",
    price: 105000,
    oldPrice: 120000,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900",
    badge: "TRENDING",
    description:
      "Sport-inspired footwear for an active lifestyle.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    featured: false,
    inStock: true,
  },
  {
    id: 8,
    name: "Classic Black Sneakers",
    category: "Sneakers",
    price: 80000,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900",
    badge: "",
    description:
      "Classic black sneakers with a clean design.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    featured: false,
    inStock: true,
  },
];

// Get one product by ID
export const getProductById = (id) => {
  return products.find(
    (product) => product.id === Number(id)
  );
};

// Get all featured products
export const getFeaturedProducts = () => {
  return products.filter(
    (product) => product.featured
  );
};

// Get products by category
export const getProductsByCategory = (category) => {
  if (category === "All") {
    return products;
  }

  return products.filter(
    (product) => product.category === category
  );
};
