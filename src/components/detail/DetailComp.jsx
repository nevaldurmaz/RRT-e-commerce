import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  // Ürün miktarını azaltma
  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Ürün miktarını arttırma
  const increment = () => {
    if (quantity < productDetail?.rating.count) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  // Sepete ekleme
  const addBasket = () => {
    if (quantity > 0) {
      dispatch(
        addToCart({
          id: productDetail?.id,
          title: productDetail?.title,
          image: productDetail?.image,
          quantity: quantity,
          price: productDetail?.price,
        })
      );
    } else {
      alert("Lütfen sepete eklemek için miktar seçiniz!");
    }
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[650px] h-[650px] object-contain my-12"
        src={productDetail?.image}
        alt={productDetail?.title}
      />
      <div className="flex flex-col gap-4 my-auto mx-3">
        <h1 className="text-4xl font-bold">{productDetail?.title}</h1>
        <p className="my-2">{productDetail?.description}</p>
        <div className="text-red-500 text-lg">
          {/* Rating : {productDetail?.rating.rate} */}
        </div>
        {/* <div>Count : {productDetail?.rating.count}</div> */}
        <div className="text-4xl font-extrabold text-green-600">
          {productDetail?.price} <span className="text-2xl">$</span>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={decrement}
            className="text-4xl text-gray-600 hover:text-black transition cursor-pointer"
            aria-label="Azalt"
          >
            <FaMinus />
          </button>
          <input
            type="text"
            value={quantity}
            className="w-12 text-center text-4xl font-semibold rounded-full border border-gray-300"
            disabled
          />
          <button
            onClick={increment}
            className="text-4xl text-gray-600 hover:text-black transition cursor-pointer"
            aria-label="Arttır"
          >
            <FaPlus />
          </button>
        </div>
        <button
          className="border w-[150px] text-xl rounded-lg my-2 bg-gray-50 cursor-pointer h-16 flex items-center justify-center text-black font-bold hover:bg-gray-100 transition"
          onClick={addBasket}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default DetailComp;
