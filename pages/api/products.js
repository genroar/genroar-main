import productsData from '@/components/data/products.json'

export default (req, res) => {
  const { minPrice, maxPrice } = req.query;

  // Ensure minPrice and maxPrice are numbers
  const min = parseInt(minPrice, 10);
  const max = parseInt(maxPrice, 10);

  const filteredProducts = productsData.filter(
    (product) => product.price >= min && product.price <= max
  );

  res.status(200).json(filteredProducts);
};
