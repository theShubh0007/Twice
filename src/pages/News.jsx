import NewsSection from "../components/NewsSection";
import SectionHeading from "../components/SectionHeading";

export default function News() {
  return (
    <div id="news" className="py-16 bg-purple-500 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-1 lg:col-span-2">
            <SectionHeading title="news" textColor="white" />
          </div>
          <div className="col-span-1 lg:col-span-10">
            <p className="text-white text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              enim quisquam aliquam autem officia cum sint, dicta, quaerat amet
              incidunt, soluta reprehenderit. Cupiditate pariatur ipsa, possimus
              ab autem rem voluptatem repudiandae placeat fugiat blanditiis,
              perspiciatis repellat natus minus beatae laudantium optio illo?
              Ducimus magnam error accusantium numquam reiciendis excepturi
              nostrum.
            </p>
          </div>
        </div>
          <NewsSection />
      </div>
    </div>
  );
}
