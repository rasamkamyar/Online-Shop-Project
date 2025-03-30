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

export { shortenTitle, searchProduct, filteredCategory, createQueryObject };
