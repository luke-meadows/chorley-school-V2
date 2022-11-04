export default function Timetable() {
  return (
    <div id="timetable" className=" py-8 md:py-16 px-8 sm:px-24">
      <h1 className="text-center text-5xl font-medium mb-6">Class Timetable</h1>
      <p className="text-lg text-center text-theme-yellow mb-8 md:mb-16">
        Competition classes and Private lessons are also available for the avid
        dancer. Please ask Claire for details.
      </p>
      <div className="grid  gap-8 sm:grid-cols-1 md:grid-cols-3">
        <div className="bg-theme-grey rounded-md p-6 md:p-12 ">
          <h3 className="text-3xl font-medium">
            Baby Class <br />
            <span className="font-normal text-xl">(Age 3 - 7) - £5.50</span>
          </h3>
          <br />
          <p>
            <span className="text-lg font-medium text-theme-yellow">
              Tuesday 5-6pm
            </span>{' '}
            - Wyken Community Centre, Coventry, CV2 5PY
          </p>
          <br />
          <p className="text-lg font-medium text-theme-yellow">Pupils learn:</p>
          <ul className="flex flex-wrap gap-4 mt-4">
            <li className="border border-slate-200 p-2 rounded-md"> Tap</li>
            <li className="border border-slate-200 p-2 rounded-md"> Ballet</li>
            <li className="border border-slate-200 p-2 rounded-md">
              Acrobatics
            </li>
            <li className="border border-slate-200 p-2 rounded-md">
              Modern Dance
            </li>
          </ul>
        </div>
        <div className="bg-theme-grey rounded-md p-6 md:p-12 ">
          <h3 className="text-3xl font-medium">
            Junior / Inter Class <br />
            <span className="font-normal text-xl">(Age 7+) - £7.50</span>
          </h3>
          <br />
          <p>
            <span className="text-lg font-medium text-theme-yellow">
              Tuesday 6-8pm
            </span>{' '}
            - Wyken Community Centre, Coventry, CV2 5PY
          </p>
          <br />
          <p className="text-lg font-medium text-theme-yellow">Pupils learn:</p>
          <ul className="flex flex-wrap gap-4 mt-4">
            <li className="border border-slate-200 p-2 rounded-md"> Tap</li>
            <li className="border border-slate-200 p-2 rounded-md"> Ballet</li>
            <li className="border border-slate-200 p-2 rounded-md">
              Acrobatics
            </li>
            <li className="border border-slate-200 p-2 rounded-md">
              Modern Dance
            </li>
            <li className="border border-slate-200 p-2 rounded-md">
              Street Dance
            </li>
            <li className="border border-slate-200 p-2 rounded-md">Jazz</li>
            <li className="border border-slate-200 p-2 rounded-md">
              Contemporary
            </li>
            <li className="border border-slate-200 p-2 rounded-md">
              Commercial
            </li>
          </ul>
        </div>
        <div className="bg-theme-grey rounded-md p-6 md:p-12 ">
          <h3 className="text-3xl font-medium">
            Adult Tap <br />
            <span className="font-normal text-xl">(Age 14+) - £5.00</span>
          </h3>
          <br />
          <p>
            <span className="text-lg font-medium text-theme-yellow">
              Tuesday 8-9pm
            </span>{' '}
            - Wyken Community Centre, Coventry, CV2 5PY
          </p>
          <br />
          <p className="text-lg font-medium text-theme-yellow">Pupils learn:</p>
          <ul className="flex flex-wrap gap-4 mt-4">
            <li className="border border-slate-200 p-2 rounded-md"> Tap</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
