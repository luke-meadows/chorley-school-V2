import Image from 'next/image';
import ShowImage from '../public/assets/section-imgs/show1.jpg';

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
          <h3 className="text-4xl md:text-6xl">Diamonds & Pearls</h3>
          <p>
            A performance in celebration of 30 years of the Chorley School of
            Dance
          </p>
          <div>
            <p className="font-bold text-xl mb-2">Albany Theatre, Coventry</p>
            <p>Sunday 13th November @ 3pm</p>
            <p>Monday 14th November @ 7pm</p>
          </div>
          <a
            href="https://www.albanytheatre.co.uk/shows/chorley-dance-school/"
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
