import productImg from "../assets/product-img.avif";


export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={productImg} alt="Manuka Honey" />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-800">
          Manuka Honey UMF 24+ MGO 1122+
        </h1>
        <p className="text-gray-600 mt-4">
          Premium quality Manuka Honey with high-grade antibacterial properties.
        </p>
        <button className="btn-primary mt-6">Add to Cart</button>
      </div>
    </section>
  );
}
