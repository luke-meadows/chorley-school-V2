export default function Contact() {
  return (
    <div
      id="contact"
      className="py-8 md:py-16 px-8 sm:px-24 bg-theme-grey text-white"
    >
      <h1 className="text-center text-5xl font-medium mb-16">Contact</h1>
      <div className="flex flex-col-reverse items-center gap-16 md:flex-row">
        <div className="w-full md:w-1/2 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38937.10056869595!2d-1.445822!3d52.414491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa69f5cf3bb13d737!2sWyken%20Community%20Association!5e0!3m2!1sen!2suk!4v1667582787877!5m2!1sen!2suk"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-12 w-full md:w-1/2">
          <div className="flex items-center gap-6">
            <i className="icon-phone text-theme-yellow text-2xl" />
            <p className="text-xl md:text-3xl">07917207789</p>
          </div>
          <div className="flex items-center gap-6">
            <i className="icon-mail-alt text-theme-yellow text-2xl" />
            <p className="text-xl md:text-3xl">clairemeadows68@yahoo.co.uk</p>
          </div>
          <div className="flex items-center gap-6">
            <i className="icon-location text-theme-yellow text-2xl" />
            <p className="text-xl md:text-3xl">
              Wyken Community Centre, Ennerdale Lane, Coventry, CV2 5PY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
