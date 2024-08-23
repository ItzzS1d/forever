import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <section>
      <h1 className="text-center mt-8 text-2xl">ABOUT US ____</h1>
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-6">
        {/* left */}
        <div>
          <img src={assets.about_img} alt="" className="w-full md:w-[350px]" />
        </div>
        {/* right */}
        <div className="md:max-w-[60%]">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="mt-1">
            Since our inception, we&#39; ve worked tirelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
            <p className="font-bold my-4">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We&#39;re dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
        <div className="flex mt-20 md:flex-row flex-col ">
          <div className="border py-16  ">
            <div className="max-w-[80%] m-auto">
            <h1>Quality Assurance:</h1>
            <p className=" m-auto mt-1">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
            </div>
          </div>
          <div className="border py-16  ">
            <div className="max-w-[80%] m-auto">
            <h1>Quality Assurance:</h1>
            <p className=" m-auto mt-1">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
            </div>
          </div>
          <div className="border py-16  ">
            <div className="max-w-[80%] m-auto">
            <h1>Quality Assurance:</h1>
            <p className=" m-auto mt-1">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
            </div>
          </div>

         
        </div>
    </section>
  );
};

export default About;
