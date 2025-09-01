import manukaHoney from "../assets/manuka-honey-video.mp4";
import honeyProcess from "../assets/honey-process.jpg";


export default function VideoSection() {
  return (
    <section className="px-6 md:px-16 py-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Watch Uses of Manuka Honey</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <video className="w-1/2 md:w-1/2  aspect-[4/3] rounded-lg shadow-md" controls>
          <source src={manukaHoney} type="video/mp4" />
        </video>
        <img src={honeyProcess} alt="Honey Process" className="w-full md:w-1/2 rounded-lg shadow-md" />
      </div>
    </section>
  );
}
