import Image from 'next/image';
import HeroImg from '../public/assets/section-imgs/hero.JPG';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-[100vw] px-0">
      <div className="z-10 relative flex flex-col justify-between h-full">
        <h2 className="text-xl text-center py-3 md:py-8 bg-black bg-transparent/60 px-3 sm:px-24 md:text-2xl">
          The dance school with a modern and exciting approach to dance!
        </h2>
        <p className=" bg-black bg-transparent/80 px-12 sm:px-24 py-3 md:py-8 text-sm font-normal leading-8 md:text-xl">
          The Chorley School of Dance is based at{' '}
          <span className="text-theme-yellow">
            Wyken Community Centre, Westmorland Road, Wyken, Coventry, CV2 5PY
          </span>
          . We are now enrolling children age 3 and above. Is your child always
          dancing? Why not bring them along to learn Tap, Ballet, Acrobatics and
          Modern. Call the Principal Claire on{' '}
          <span className="text-theme-yellow">07917207789</span>.
        </p>
      </div>

      <div className="absolute top-0 left-0 h-[80vh] w-[100vw] z-0">
        <div className="relative h-full w-full">
          <Image src={HeroImg} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
