import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/assets/logo/ChorleySchoolLogo-nobg.png';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <header className="px-4 bg-white text-black w-full flex items-center justify-between md:flex-col gap-y-6 py-4 md:py-0 md:pt-6 top-0 left-0 z-50">
      <Link href="/">
        <div className="mx-0 md:mx-auto w-fit p-0 flex items-center gap-3 md:gap-6">
          <div className="relative w-8 md:w-20 md:mb-3 ">
            <Image src={Logo} layout="responsive" />
          </div>
          <h1 className="text-lg md:text-4xl md:font-medium">
            The Chorley School of Dance
          </h1>
        </div>
      </Link>
      <nav className="w-fit mx-auto gap-x-10 hidden md:flex">
        <a
          href="#timetable"
          className="pb-1 px-2 border-b-4 font-medium hover:border-theme-yellow"
        >
          Class Timetable
        </a>
        <a
          href="#principal"
          className="pb-1 px-2 border-b-4 font-medium hover:border-theme-yellow"
        >
          The Principal
        </a>
        <a
          href="#adult-tap"
          className="pb-1 px-2 border-b-4 font-medium hover:border-theme-yellow"
        >
          Adult Tap
        </a>
        <a
          href="#contact"
          className="pb-1 px-2 border-b-4 font-medium hover:border-theme-yellow"
        >
          Contact
        </a>
        <a
          href="#testimonials"
          className="pb-1 px-2 border-b-4 font-medium hover:border-theme-yellow"
        >
          Testimonials
        </a>
        <Link href="/gallery">
          <div className="pb-1 px-2 border-b-4 font-medium hover:border-theme-yellow">
            Gallery
          </div>
        </Link>
      </nav>
      <button className="md:hidden" onClick={() => setMobileNavActive(true)}>
        <i className="icon-menu text-3xl pointer" />
      </button>
      <div className="hidden md:block md:absolute top-4 right-4 ">
        <a href="https://www.facebook.com/chorleydance" target="blank">
          <i className="icon-facebook text-2xl hover:text-theme-yellow pointer" />
        </a>
        <a
          href="https://www.instagram.com/thechorleyschoolofdance/"
          target="blank"
        >
          <i className="icon-instagram text-2xl hover:text-theme-yellow pointer" />
        </a>
      </div>
      {mobileNavActive && <MobileNav setMobileNavActive={setMobileNavActive} />}
    </header>
  );
}
