import Image from 'next/image';
import Header2 from '../components/Header2';
import { galleryImages } from '../lib/galleryImages';
export default function Gallery() {
  return (
    <div>
      <Header2 />
      <div className=" pt-8 md:pt-16 pb-8 px-2 sm:px-24">
        <h1 className="text-center text-5xl font-medium mb-8 md:mb-16">
          Gallery
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {galleryImages.map((img, i) => (
            <div className="relative aspect-square" key={i}>
              <Image src={img} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
