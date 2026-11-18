
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-NG").format(number);
};
