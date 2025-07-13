import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, isPending } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
