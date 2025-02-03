import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  const totalAmount = carts.reduce((cartTotal, cartItem) => {
    return (cartTotal += cartItem.quantity);
  }, 0);

  return (
    //* Main Navbar
    <div className="flex justify-between items-center my-2 py-2">
      {/* Left Navbar */}
      <div
        className="text-6xl mx-12 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1 className="text-blue-400 font-bold"> TrendyTech</h1>
      </div>
      {/* Right Navbar */}
      <div className="flex items-center gap-8 mx-12">
        <div
          className="flex items-center border
        p-3 rounded-full bg-gray-100"
        >
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Arama Yapınız..."
          />
          <BiSearch size={28} className="hover:animate-pulse" />
        </div>
        <AiOutlineHeart size={28} className="cursor-pointer" />
        <div onClick={() => navigate("cart")} className="relative">
          <div
            className="absolute -top-3 -right-3 bg-red-500
          text-white rounded-full w-5 h-5 flex items-center justify-center "
          >
            {totalAmount}
          </div>
          <SlBasket size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
