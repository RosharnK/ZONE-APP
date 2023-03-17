/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { MdSwipeLeft, MdSwipeRight, MdSwipe } from "react-icons/md";

// Import Swiper styles
import "swiper/css";

export default function Testimonial() {
  return (
    <div>
      <div className="text-center text-3xl font-bold">
        <p>HAPPY CLIENTS</p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/*testimonial 1*/}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <div className="m-4 block rounded-lg bg-white p-6 shadow-lg ">
                <div className="md:flex md:flex-row ">
                  <div className=" mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                    <img
                      src="https://rare-gallery.com/uploads/posts/547274-cristiano-ronaldo.jpg"
                      className="rounded-full shadow-md dark:shadow-black/30"
                      alt="woman avatar"
                    />
                  </div>
                  <div className="md:ml-6">
                    <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id quam sapiente molestiae numquam quas, voluptates omnis
                      nulla
                    </p>
                    <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                      Cristiano Ronaldo
                    </p>
                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                      Sports Person
                    </p>
                  </div>
                  <MdSwipeLeft />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*testimonial 2*/}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <div className="m-4 block rounded-lg bg-white p-6 shadow-lg ">
                <div className="md:flex md:flex-row">
                  <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                    <img
                      src="https://pbs.twimg.com/media/EFLMZOOXkAEwIBi?format=jpg&name=4096x4096"
                      className="rounded-full shadow-md dark:shadow-black/30"
                      alt="woman avatar"
                    />
                  </div>
                  <div className="md:ml-6">
                    <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id quam sapiente molestiae numquam quas, voluptates omnis
                      nulla
                    </p>
                    <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                      Lionel Messi
                    </p>
                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                      Sports Person
                    </p>
                  </div>
                  <MdSwipe />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*testimonial 3*/}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <div className="m-4 block rounded-lg bg-white p-6 shadow-lg ">
                <div className="md:flex md:flex-row">
                  <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                    <img
                      src="https://assets.nst.com.my/images/articles/21nnno_1532051606.jpg"
                      className="rounded-full shadow-md dark:shadow-black/30"
                      alt="woman avatar"
                    />
                  </div>
                  <div className="md:ml-6">
                    <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id quam sapiente molestiae numquam quas, voluptates omnis
                      nulla
                    </p>
                    <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                      Neymar Jr
                    </p>
                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                      Sports Person
                    </p>
                  </div>
                  <MdSwipeRight />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
