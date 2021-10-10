import { useEffect, useState } from "react";

function Sidebar({ maxPrice, minPrice }) {
  const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);

  return (
    <aside className="w-[25%] max-w-sm border-t-2 border-opacity-20 border-customGrey">
      <div>
        <h3 className="text-xl font-semibold text-black py-3">Price</h3>
        <div className="text-black font-semibold flex flex-col lg:space-x-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p>
              Min: <span>{currentMinPrice}</span>
            </p>
            <input
              id="min"
              className="w-[80%]"
              type="range"
              min={minPrice}
              max={minPrice * 2}
              value={currentMinPrice}
              onChange={(e) => setCurrentMinPrice(e.target.value)}
            />
          </div>
          <div>
            <p>
              Max: <span>{currentMaxPrice}</span>
            </p>
            <input
              id="max"
              className="w-[80%]"
              type="range"
              min={minPrice * 2}
              max={maxPrice}
              value={currentMaxPrice}
              onChange={(e) => setCurrentMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-black py-3">Gender</h3>
        <div className="text-black font-semibold flex space-x-2 items-center">
          <input type="checkbox" name="checkbox" value="men" />
          <p className="checkbox-name">Men</p>
        </div>
        <div className="text-black font-semibold flex space-x-2 items-center">
          <input type="checkbox" name="checkbox" value="women" />
          <p className="checkbox-name">Women</p>
        </div>
        <div className="text-black font-semibold flex space-x-2 items-center">
          <input type="checkbox" name="checkbox" value="unisex" />
          <p className="checkbox-name">Unisex</p>
        </div>
      </div>
      <div>
        <button className="text-xs font-semibold cursor-pointer px-2 py-2 lg:px-6 lg:py-3 lg:text-lg mt-7 text-center rounded-lg border-2 border-customGrey hover:bg-black hover:text-white transition-all duration-200 ease-in-out">
          Apply Filters
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
