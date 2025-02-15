import Card from "../components/Card";
import Category from "../components/Category";
import SliderCard from "../components/SliderCard";
import { useProducts } from "../context/ProductsContext";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ProductsPage = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div>
      <div>
        <SliderCard />
      </div>
      <div className="container mx-auto flex flex-wrap">
        <div className="grid grid-cols-3 gap-4 mt-36 md:w-4/5 w-full">
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div className="grid mt-36 md:w-1/5 w-full">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
