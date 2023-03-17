/** @format */

import Nav from "./Nav";
import Hero from "./hero";
import Brand from "./brand";
import Testimonial from "./testimonial";
import Product from "./product";
import Contact from "./contact";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Hero />
      <Brand />
      <Testimonial />
      <Product />
      <Contact />
      <main>{children}</main>
    </div>
  );
}
