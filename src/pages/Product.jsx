import { useParams } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item._id === id);
  const [imgUrl, setImg] = useState(product.image[0]);
  const [sizes, setSize] = useState(null);
  const [cartItems,setCartItems]= useState([]);

  const handleAddToCart = () => {
    
  };

  const handleClick = (imgUrl) => {
    setImg(imgUrl);
  };
  const handleSizeClick = (size) => {
    setSize(size);
  };
  return (
    <div className="flex items-start  mt-10 flex-col md:flex-row">
      <div className="flex gap-5 items-center flex-col-reverse md:flex-row">
        <div className="grid grid-cols-4 gap-4 md:block ">
          {product.image.map((img) => (
            <img
              src={img}
              alt={product.name}
              key={product._id}
              width={100}
              className={`md:my-2`}
              onClick={() => handleClick(img)}
            />
          ))}
        </div>
        <img src={imgUrl} alt="" />
      </div>

      <div className=" md:ml-8 ">
        <h1 className="font-semibold text-2xl">{product.name}</h1>
        <h1 className="my-3">${product.price}</h1>
        <p className="max-w-lg text-sm my-3">{product.description}</p>
        <div>
          <h1 className="mb-3">Select size</h1>
          <div className="flex gap-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={` border px-3 py-1 ${
                  size === sizes && "border-black border-1"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="text-white bg-black px-4 py-1 mt-5" onClick={handleAddToCart}>
          ADD TO CART
        </button>
        <div className="mt-8 text-sm text-gray-500">
          <h1>100% Original product.</h1>
          <h1>Cash on delivery is available on this product.</h1>
          <h1>Easy return and exchange policy within 7 days.</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
