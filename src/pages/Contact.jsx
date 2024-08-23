import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <main>
      <h1 className="text-center text-2xl mt-8">CONTACT US____</h1>
      <div className=" flex flex-col md:flex-row mt-8 justify-center gap-10">
        <img src={assets.contact_img} alt=""  className="w-full md:w-[400px]"/>
        <div className="mt-4 md:mt-10">
          <h1 className="font-bold mb-3 text-2xl">Our Store</h1>
          <div>
            <p>5407 Willims Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div className="my-5">
            <p>Phone: +1 123-456-7890</p>
            <p>Email: contact@forever.com</p>
          </div>

          <h1 className="font-bold text-xl">Careers at Forever</h1>
          <p className="my-4">Learn more about our teams and job openings.</p>
          <button className="border-2 px-4 py-2 border-black hover:text-white hover:bg-black transition-all duration-150 ">Explore Jobs</button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
