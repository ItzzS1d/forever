import { products } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Collection = ({search}) => {
  const handleClick = (id) => {
    console.log(id);
  };
  const filteredProducts = search
    ? products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) 
      )
    : products;
  return (
    <div className="flex mt-14 gap-10 ">
      <div className="text-sm hidden md:block">
        <h1>FILTERS</h1>
        <div className="border p-4">
          <p className="text-sm">CATEGORIES</p>
          <ul>
            <li>
              <input
                type="checkbox"
                value="Men"
              
              />
              &nbsp;
              <span>Men</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="Women"
              
              />
              &nbsp;
              <span>Women</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="Kids"
              
              />
              &nbsp;
              <span>Kids</span>
            </li>
          </ul>
        </div>
        <div className="border p-4 mt-4">
          <h1>TYPE</h1>
          <ul>
            <li>
              <input
                type="checkbox"
                value="Topwear"
               
              />
              &nbsp;
              <span>Topwear</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="Bottomwear"
               
              />
              &nbsp;Bottomwear
            </li>
            <li>
              <input
                type="checkbox"
                value="Winterwear"
               
              />
              &nbsp;
              <span>Winterwear</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-5">
          <h1 className="text-2xl font-semibold">ALL COLLECTIONS</h1>
          <select name="" id="" className="outline-none border-2 border-black">
            <option defaultValue={"Sort by: Relavant"}>
              Sort by: Relavent
            </option>
            <option value="">Low to High</option>
            <option value="">High to Low</option>
         
          </select>
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
          {filteredProducts.map((item) => {
            return (
              <div key={item._id}>
                <Link key={item._id} to={`/product/${item._id}`}>
                <img
                  src={item.image[0]}
                  alt=""
                  onClick={() => handleClick(item._id)}
                  className="h-[300px] object-cover"
                />
              </Link>
              <h5 className="tea">{item.name}</h5>
              <p>${item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
