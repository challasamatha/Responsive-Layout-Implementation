import img1 from "../assets/related-img-1.jpg";
import img2 from "../assets/related-img-2.jpg";
import img3 from "../assets/related-img-3.jpg";
import img4 from "../assets/related-img-4.jpg";
import img5 from "../assets/related-img-5.jpg";

const products = [
  { id: 1, name: "Manuka UMF 15+", img: img1 },
  { id: 2, name: "Manuka UMF 20+", img: img2 },
  { id: 3, name: "Manuka UMF 10+", img: img3 },
  { id: 4, name: "Manuka UMF 25+", img: img4 },
  { id: 5, name: "Manuka UMF 35+", img: img5 },
];

export default function RelatedProducts() {
  return (
    <section className="px-6 md:px-16 py-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-32 flex object-contain mb-2"
            />
            <p className="text-sm font-medium">{p.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}










































































