import Card from "../components/Card";
import Category from "../components/Category";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";

const ProductsPage = () => {
  const products = useProducts();
  console.log(products.length);
  return (
    <div className="container mx-auto flex flex-wrap">
      <div className="grid grid-cols-3 gap-4 mt-36 md:w-4/5 w-full">
        {products.length === 0 && <Loader />}
        {products &&
          products.map((product) => <Card key={product.id} data={product} />)}
      </div>
      <div className="grid mt-36 md:w-1/5 w-full">
        <Category />
      </div>
    </div>
  );
};

export default ProductsPage;
