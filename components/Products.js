import Product from "./Product";

function Products({ products }) {
  return (
    <div className="pl-10 py-0 pb-10 cursor-pointer grid gap-x-4 gap-y-10  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          type={product.type}
          price={product.price}
          image={product.image}
          colors={product.colors}
        />
      ))}
    </div>
  );
}

export default Products;
