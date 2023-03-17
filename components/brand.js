/** @format */

export default function Brand() {
  return (
    <div id="brands" className="md:py-28">
      <div className="text-center text-3xl font-bold">
        <p>BRANDS</p>
        <p className=" text-center font-semibold pt-6">
          TOP BRANDS PRODUCT WE PROVIDE
        </p>
      </div>

      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap ">
          <div className="p-4 sm:w-1/2 lg:w-1/3 rounded-lg ">
            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-72 md:h-40 w-full object-cover object-center transform  hover:scale-75 transition duration-300"
                src="https://www.swimmingworldmagazine.com/news/wp-content/uploads/2015/06/Nike_Swoosh_Logo_Black_original.jpg"
                alt="blog"
              />
              <div className="p-6 bg-gray-500">
                <h1 className="text-2xl font-semibold mb-3 text-white">NIKE</h1>
                <div className="flex items-center flex-wrap ">
                  <button
                    type="button"
                    className="inline-block bg-blue-800 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    check out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-72 md:h-40 w-full object-cover object-center transform  hover:scale-75 transition duration-300"
                src="https://about.puma.com/-/media/images/this-is-puma/history/m-18_1979_puma-no1-logo.ashx?as=1&h=300&iar=1&w=400&hash=A66EAB568775C1CE469C4199726C1CC447542B00"
                alt="blog"
              />
              <div className="p-6 bg-blue-500">
                <h1 className="text-2xl font-semibold mb-3 text-white">PUMA</h1>
                <div className="flex items-center flex-wrap ">
                  <button
                    type="button"
                    className="inline-block bg-blue-800 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    check out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-72 md:h-40 w-full object-cover object-center transform  hover:scale-75 transition duration-300"
                src="https://www.vippng.com/png/detail/18-183226_adidas-logo-png.png"
                alt="blog"
              />
              <div className="p-6 bg-gray-800">
                <h1 className="text-2xl font-semibold mb-3 text-white">
                  ADIDAS
                </h1>

                <div className="flex items-center flex-wrap ">
                  <button
                    type="button"
                    className="inline-block bg-blue-800 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
