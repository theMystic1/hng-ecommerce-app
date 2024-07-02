export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function getImagePath(path) {
  switch (path) {
    case "./assets/product-yx1-earphones/mobile/image-product.jpg":
      return require("../assets/product-yx1-earphones/mobile/image-product.jpg");
    case "./assets/product-xx59-headphones/mobile/image-product.jpg":
      return require("../assets/product-xx59-headphones/mobile/image-product.jpg");
    case "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg":
      return require("../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg");
    case "./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg":
      return require("../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg");
    case "./assets/product-zx7-speaker/mobile/image-product.jpg":
      return require("../assets/product-zx7-speaker/mobile/image-product.jpg");
    case "./assets/product-zx9-speaker/mobile/image-product.jpg":
      return require("../assets/product-zx9-speaker/mobile/image-product.jpg");
    // Add more cases as needed for other products

    // Add more cases as needed
    default:
      return require("../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"); // fallback image
  }
}
