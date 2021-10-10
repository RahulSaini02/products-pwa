import { formatter } from "../util/currency";

function Product({ title, type, price, image, colors }) {
  return (
    <div>
      <img
        className="h-72 w-80 cursor-pointer mb-8"
        src={`/assets/images/products/${image}.jfif`}
        alt="product"
      />
      <h4 className="text-lg font-semibold text-black">{title}</h4>
      <p className="text-md font-normal text-grey">{type}</p>
      <p className="text-lg font-semibold text-black my-3">
        {formatter.format(price)}
      </p>
      <div className="flex flex-wrap px-2">
        {colors.map((color) => (
          <div
            key={color}
            className="h-8 w-8 rounded-full border-[1px] border-grey cursor-pointer mr-2 mb-2 flex items-center justify-center"
          >
            <div
              className={`h-6 w-6 rounded-full bg-${color} border-[1px] border-grey hover:opacity-80`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
