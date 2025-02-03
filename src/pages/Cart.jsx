import { useSelector } from "react-redux";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const { carts } = useSelector((state) => state.carts);

  const totalAmount = carts
    .reduce((cartTotal, cartItem) => {
      return (cartTotal += cartItem.price * cartItem.quantity);
    }, 0)
    .toFixed(2);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex justify-end text-2xl font-bold ">
            TOPLAM TUTAR :
            <span className="text-green-600 text-2xl ml-2">
              {totalAmount} $
            </span>
          </div>
        </div>
      ) : (
        <div className="h-[calc(612px-3rem)] flex items-center justify-center ">
          <h1 className="text-3xl font-bold shadow-2xl">
            Sepetinizde ürün bulunamadı...
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
