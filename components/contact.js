/** @format */
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div id="contact us" className="bg-[#050417]">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-white dark:text-white">
          Contact Us
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light  "
              placeholder="email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-900"
          >
            Submit
          </button>
        </form>
      </div>

      {/* footer*/}
      <div className=" px-14 py-6 bg-black  md:flex  lg:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2023 <a href="">Rdev</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 justify-center md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white ">
            <AiOutlineInstagram />
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <AiOutlineTwitter />
          </a>
          <span className="sr-only">Twitter</span>
          <a href="#" className="text-gray-400 hover:text-white">
            <AiOutlineGithub />
          </a>
          <span className="sr-only">Github</span>
        </div>
      </div>
    </div>
  );
}
