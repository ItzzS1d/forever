import React from "react";
import { assets, products } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="cursor-pointer hover:shadow-md mt-5 overflow-hidden flex flex-col md:flex-row items-center justify-between border-2">
        <div className="md:translate-x-3/4 mt-4">
          <h5 className="font-semibold">______OUR BESTSELLERS</h5>
          <h1 className="text-4xl">Latest Arrivals</h1>
          <h6 className="font-semibold mt-2">SHOP NOW______</h6>
        </div>
        <img
          src={assets.hero_img}
          alt=""
          width={450}
          className="mt-5 md:mt-0 w-full md:w-[450px]"
        />
      </div>
      {/* mid section */}

      <main className="mt-8">
        <div className="text-center">
          <h1 className="text-3xl mb-2">
            <span className="text-gray-400 ">LATEST</span>{" "}
            <span className="font-semibold">COLLECTION____</span>
          </h1>
          <p>
            Lorem Ipsum is simplay dummy text of the priting and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center mt-5">
          {products.filter((item)=>!item.bestseller).slice(0,10).map((item) => {
            return (
              <Link key={item._id} to={`/product/${item._id}`}>
                <img
                  src={item.image[0]}
                  alt=""
                  onClick={() => handleClick(item._id)}
                  className="w-full object-cover"
                />
                <h5 className="text-xl font-semibold mt-2">{item.name}</h5>
                <p className="text-xl font-semibold">${item.price}</p>
              </Link>
            );
          })}
        </div>
      </main>
      {/* best sellers */}
      <main className="mt-8">
        <h1 className="text-center text-3xl font-semibold">BEST SELLERS ----</h1>
        <p className="text-center">
          Lorem Ipsum is simplay dummy text of the priting and typesetting
          industry. Lorem Ipsum has been the.
        </p>
        <div className="mt-5  md:flex md:justify-center  md:flex-wrap ">
          {products.map((item) => {
            return (
              <div key={item._id}  >
                {item.bestseller && (
                  <Link key={item._id} to={`/product/${item._id}`}>
                    <img
                      src={item.image[0]}
                      alt=""
                      onClick={() => handleClick(item._id)}
                      className=" w-full md:w-80 object-cover md:mx-3 md:mt-4"
                    />
                    <h5 className="mt-2 font-bold text-xl mlt-3">{item.name}</h5>
                    <p className="font-bold">${item.price}</p>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* policy */}
      <main className="flex items-center md:flex-row flex-col justify-center mt-16 gap-10 md:gap-32 text-center">
        <div className="flex items-center flex-col">
          <img src={assets.exchange_icon} alt="" width={40} />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400 text-sm">
            We offer hassle free exchange policy
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img src={assets.quality_icon} alt="" width={40} />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400 text-sm">
            We provide 7 days free return policy
          </p>
        </div>
        <div className="flex items-center flex-col">
          <img src={assets.support_img} alt="" width={40} />
          <p className="font-semibold">Best customer support</p>
          <p className="text-gray-400 text-sm">
            we provide 24/7 customer support
          </p>
        </div>
      </main>

      <div className="mt-20">
        <h1 className="text-center text-lg font-semibold">
          Subscribe now & get 20% off
        </h1>
        <p className="text-center text-sm text-gray-400 mb-3">
          Lorem Ipsum is simplay dummy text of the priting and typesetting
          industry.
        </p>
        <div className="flex  justify-center mb-5">
          <input
            type="text"
            className="outline-none bg-gray-200 w-[45%] py-1.5 px-2"
          />
          <button className="bg-black text-white px-4">SUBSCRIBE</button>
        </div>
      </div>

      {/* footer */}
      
    </>
  );
};

export default Home;
