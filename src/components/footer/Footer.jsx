import { FaLock, FaRegCreditCard } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isBasket = location.pathname === "/cart";

  return (
    <footer className={isBasket ? "hide-footer" : ""}>
      <div className="flex flex-row justify-around items-center mt-5 bg-blue-400 h-32 text-slate-200 cursor-pointer">
        <div className="flex items-center gap-2">
          <ImTruck className="w-16 h-16" />
          <h1 className="font-bold text-2xl ">Ücretsiz Kargo</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaLock className="w-16 h-16" />

          <h1 className="font-bold text-2xl ">Güvenli Alışveriş</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaRegCreditCard className="w-16 h-16" />

          <h1 className="font-bold text-2xl ">Ödeme Seçenekleri</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between text-gray-600 cursor-pointer">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Kurumsal</h1>
          <span>Hakkımızda</span>
          <span>Vizyon ve Misyonumuz</span>
          <span>Kariyer</span>
          <span>Blog</span>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Hizmetler</h1>
          <span>Ürün Satışı</span>
          <span>Ürün Destek</span>
          <span>Danışmanlık</span>
          <span>Diğer Hizmetler</span>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Geri Dönüşüm</h1>
          <span>Geri Dönüşüm Süreci</span>
          <span>Çevre Politikamız</span>
          <span>Kullanılmış Ürünle</span>
          <span>Geri Dönüşüm Noktalar</span>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Bize Ulaşın</h1>
          <span>Adres: Diyarbakır, Türkiye</span>
          <span>Telefon: +90 (412) *** ** **</span>
          <span>Email: info@trendytech.com</span>
          <span></span>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2025 E-Ticaret Sitesi. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
