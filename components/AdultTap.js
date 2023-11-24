import Image from 'next/image';
import Tap1 from '../public/assets/adult-tap-imgs/84411164_2746835548686149_7292932151681482752_n.jpeg';
import Tap2 from '../public/assets/adult-tap-imgs/86669100_2746835065352864_5370026060052168704_n.jpeg';
import Tap3 from '../public/assets/adult-tap-imgs/86727657_2746834738686230_4234547512851038208_n.jpeg';
import Tap4 from '../public/assets/adult-tap-imgs/86864378_2746835448686159_1494899453688020992_n.jpeg';

export default function AdultTap() {
  return (
    <div id="adult-tap" className="py-10 md:py-16 px-8 sm:px-24">
      <h1 className="text-center text-5xl font-medium mb-16">Adult Tap</h1>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="grid grid-cols-2 gap-2 md:w-1/2">
          <div className="relative">
            <Image src={Tap1} layout="responsive" />
          </div>
          <div className="relative">
            <Image src={Tap2} layout="responsive" />
          </div>
          <div className="relative">
            <Image src={Tap3} layout="responsive" />
          </div>
          <div className="relative">
            <Image src={Tap4} layout="responsive" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 mt-4">
          <p className="text-lg">
            This class is for all those avid tap dancers out there!
          </p>
          <p className="text-lg">
            This class is suitable for all abilities from the beginner to the
            advanced tapper.
          </p>
          <p className="text-lg">
            Classes are held at Wyken Community Centre on Tuesdays 8-9pm £5 per
            class (paid in 6 week blocks after a settling in period).
          </p>
          <p className="text-lg">
            Tap is an excellent form of exercise and strengthens the legs and
            ankles.
          </p>
          <p className="text-lg">
            A friendly welcome is assured. Age 14 to 74! Come and join the fun!
          </p>
          <a
            href="#contact"
            className="w-fit bg-theme-yellow text-black py-2 px-4 rounded-lg font-medium"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
