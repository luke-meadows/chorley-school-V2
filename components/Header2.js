import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo/ChorleySchoolLogo-nobg.png';

export default function Header2() {
  return (
    <header className="bg-white text-black w-full flex flex-col gap-y-6 pt-6 top-0 left-0 z-50 px-4 md:px-24">
      <Link href="/">
        <div className="mx-0 md:mx-auto w-fit p-0 flex items-center gap-3 md:gap-6">
          <div className="relative w-8 md:w-20 md:mb-3 ">
            <Image src={Logo} layout="responsive" />
          </div>
          <h1 className="text-xl md:text-4xl md:font-medium">
            The Chorley School of Dance
          </h1>
        </div>
      </Link>
      <nav className="flex gap-x-2 justify-between">
        <Link href="/">
          <div className="pb-1 md:px-2 font-medium flex items-center">
            <div className="rotate-180">
              <i className="icon-right-circled2 " />
            </div>
            Home
          </div>
        </Link>
        <div className="">
          <a href="https://www.facebook.com/chorleydance" target="blank">
            <i className="icon-facebook text-xl hover:text-theme-yellow pointer" />
          </a>
          <a
            href="https://www.instagram.com/thechorleyschoolofdance/"
            target="blank"
          >
            <i className="icon-instagram text-xl hover:text-theme-yellow pointer" />
          </a>
        </div>
      </nav>
    </header>
  );
}
