import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-5 flex items.center justify-between">
      <img
        className="w-[200px] h-[200px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[600px] ml-8 ">
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>

      <div className="flex flex-row gap-2 font-semibold">
        <div>{cart?.price} $ </div>
        <div className="font-bold text-blue-600">({cart?.quantity})</div>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[200px] h-16 flex items-center justify-center cursor-pointer rounded-md"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
