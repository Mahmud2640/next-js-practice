import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This Is Product Details Id -- {router.query.productId}</h1>
    </div>
  );
};

export default ProductDetails;
