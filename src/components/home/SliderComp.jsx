import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 p-4">
          <div>
            <div className="text-5xl font-bold ">Eşsiz Modeller</div>
            <div className="text-xl my-4">
              Eşsiz Modeller, şıklığı ve kaliteyi bir araya getirerek her zevke
              hitap eden kadın ve erkek giyim koleksiyonları, zarif takılar ve
              son teknoloji ürünlerle hayatınıza değer katıyor. Trendleri
              yakından takip eden tasarımlar, özel detaylarla bezenmiş
              aksesuarlar ve ileri teknolojiyle donatılmış cihazlarla tarzınızı
              ve yaşam kalitenizi yükseltin. Hem şıklığınızı hem de
              fonksiyonelliği keşfedin!
              <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 mt-10">
                İncele
              </div>
            </div>
          </div>
          <img className="w-[700px]" src="./essiz modeller.png" alt="img-1" />
        </div>
        <div className="!flex items-center bg-gray-100 p-4">
          <div>
            <div className="text-5xl font-bold">Kaliteli Ayakkabılar</div>
            <div className="text-xl my-4">
              Eşsiz Modeller’de, her adımda konforu ve şıklığı bir arada sunan
              kaliteli ayakkabılar sizi bekliyor. Günlük kullanımda rahatlık,
              özel anlarda zarafet ve şıklık isteyenler için özenle seçilen
              modeller, tarzınızı tamamlayacak ve her adımınızı daha özel
              kılacak. Hem şık hem de sağlam ayakkabılarla her yere rahatça adım
              atın!
              <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-26 flex items-center justify-center bg-gray-300 mt-5">
                İncele
              </div>
            </div>
          </div>
          <img className="w-[300px]" src="/nike1.png" alt="img-2" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
