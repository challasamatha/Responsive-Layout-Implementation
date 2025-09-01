import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductDetails from "../components/ProductDetails";
import VideoSection from "../components/VideoSection";
import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductDetails />
      <VideoSection />
      <RelatedProducts />
      <Footer />
    </>
  );
}
