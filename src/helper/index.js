const shortenTitle = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProduct = (products, search) => {
  if (!search) return products;

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return filteredProducts;
};

const filteredCategory = (products, category) => {
  if (!category) return products;

  const filteredProducts = products.filter((p) =>
    p.category.toLowerCase().includes(category.toLowerCase())
  );
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.category === "All") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumProducts = (products) => {
  const itemCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );

  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemCounter, total };
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortenTitle,
  searchProduct,
  filteredCategory,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity
};
