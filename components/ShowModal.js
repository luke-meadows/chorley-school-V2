import Image from 'next/image';
import ShowImage from '../public/assets/section-imgs/show2.jpg';

export default function ShowModal({ setShowModalVisible }) {
  return (
    <div className="fixed top-0 z-20 bg-black bg-transparent/70 h-full w-full">
      <div className="h-[90vh] w-[90vw] fixed top-[5vh] left-[5vw] rounded-md bg-theme-grey text-white flex flex-col md:flex-row z-20 overflow-hidden">
        <div className="hidden md:block relative h-full md:w-1/2">
          <Image src={ShowImage} layout="fill" objectFit="cover" />
        </div>
        <div className="px-12  h-full relative flex flex-col text-center items-center justify-center md:w-1/2 gap-y-8">
          <h2 className="text-xl md:text-2xl">
            The Chorley School of Dance Presents....
          </h2>
          <h3 className="text-4xl md:text-6xl">Chapter 33</h3>
          <p>
            An evening of entertainment for the whole family. A fantastic
            selection of music, song and dance. Come and see the pupils of
            Chorley perform from age 4years to 70years!
          </p>
          <div>
            <p className="font-bold text-xl mb-2">Albany Theatre, Coventry</p>
            <p>Sunday 2nd February 2025 @ 3pm</p>
            <p>Monday 3rd February 2025 @ 7pm</p>
          </div>
          <a
            href="https://www.albanytheatre.co.uk/shows/chorley-school-of-dance-presents-chapter-33/"
            target="blank"
            className="underline font-bold text-xl hover:text-theme-yellow"
          >
            <div className="flex items-center">
              <i className="icon-ticket" />
              <p>Buy Tickets Here</p>
            </div>
          </a>
        </div>
        <div className="close absolute top-4 right-4">
          <i
            className="pointer icon-cancel-circled text-2xl"
            onClick={() => setShowModalVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}
