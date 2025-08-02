import ProductCard from "@/app/components/ProductCard";

const Shop = async () => {
  const res = await fetch(`http://localhost:8000/products`, {
    next: { tags: ["products"] },
  });
  const products = await res.json();
  console.log("I am being rendered");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="page-banner">
        <div className="page-banner__details">
          <div className=" bg-green-600 p-5">
            <h1 className="text-8xl font-semibold text-white text-center">
              Our E-commerce Website
            </h1>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="section__head">
            <div className="product__details__title">
              <h2 className="text-white bg-amber-700 text-4xl text-center p-6">
                All Products
              </h2>
            </div>
          </div>
          {products?.length > 0 && (
            <div className="section__content">
              <div className=" grid grid-cols-3 gap-5">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
