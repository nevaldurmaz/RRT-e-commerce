import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product.id}`)}
      className="relative w-[400px] p-3 mb-2 mx-2 border rounded-md cursor-pointer"
    >
      <div className="text-2xl top-0 right-0 p-1 m-1 absolute rounded-full bg-blue-400 text-white">
        {product?.price} <span>$</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 my-3 text-xl font-bold ">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
