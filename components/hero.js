/** @format */

export default function Hero() {
  return (
    <div
      id="home"
      className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 scroll-smooth"
    >
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              WELCOME TO FIND YOUR BRAND {""}@ ZONE
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              modi, expedita quos doloremque autem ipsum itaque.Aperiam modi,
              expedita quos doloremque autem ipsum itaque.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href=""
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium  bg-black text-white transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block justify-center h-96 lg:w-1/2 xl:w-1/2 lg:absolute lg:justify-start lg:top-0 lg:right-0 ">
        <img
          className="hover:translate-y-1.5 scale-95"
          src="https://www.hotsalemercurial.com/6106-thickbox_default/nike-mercurial-vapor-12-elite-fg-cristiano-ronaldo-cr7-boots-red-silver-black.jpg"
          alt="mockup"
        />
      </div>
    </div>
  );
}
