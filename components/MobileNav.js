import Link from 'next/link';

export default function MobileNav({ setMobileNavActive }) {
  return (
    <div className="fixed h-full w-full left-0 top-0 bg-white z-20">
      <div
        className="flex justify-end pt-4 pr-4"
        onClick={() => setMobileNavActive(false)}
      >
        <i className="icon-cancel-circled text-2xl text-theme-grey" />
      </div>
      <nav className="mt-12 ml-2 gap-y-6 flex flex-col text-black">
        <a
          href="#timetable"
          className="pb-1 px-2 font-medium text-2xl"
          onClick={() => setMobileNavActive(false)}
        >
          Class Timetable{' '}
          <i className="icon-right-circled2 text-theme-grey text-lg" />
        </a>
        <a
          href="#principal"
          className="pb-1 px-2  font-medium text-2xl"
          onClick={() => setMobileNavActive(false)}
        >
          The Principal{' '}
          <i className="icon-right-circled2 text-theme-grey text-lg" />
        </a>
        <a
          href="#adult-tap"
          className="pb-1 px-2  font-medium text-2xl"
          onClick={() => setMobileNavActive(false)}
        >
          Adult Tap{' '}
          <i className="icon-right-circled2 text-theme-grey text-lg" />
        </a>
        <a
          href="#contact"
          className="pb-1 px-2  font-medium text-2xl"
          onClick={() => setMobileNavActive(false)}
        >
          Contact <i className="icon-right-circled2 text-theme-grey text-lg" />
        </a>
        <a
          href="#testimonials"
          className="pb-1 px-2  font-medium text-2xl"
          onClick={() => setMobileNavActive(false)}
        >
          Testimonials{' '}
          <i className="icon-right-circled2 text-theme-grey text-lg" />
        </a>
        <Link href="/gallery">
          <div
            className="pb-1 px-2  font-medium text-2xl"
            onClick={() => setMobileNavActive(false)}
          >
            Gallery{' '}
            <i className="icon-right-circled2 text-theme-grey text-lg" />
          </div>
        </Link>
      </nav>
    </div>
  );
}
