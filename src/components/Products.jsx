import Loading from "./Loading";
import Product from "./Product";
import { useGlobalContext } from "../utils/context";

const Products = () => {
  const { products, loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div>
      <h2>Products</h2>
      <section className="products">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
