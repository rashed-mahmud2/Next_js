"use client"
function ProductCard({ product }) {

  return (
    <div className="">
      <div className="">
        <figure>
          <img className="h-[300px] w-[400px] " src={product.image} alt={product.title} />
        </figure>
      </div>
      <div className="ingredient__title">
        <h3>{product.title}</h3>
      </div>
      <div className="ingredient__content">
        <p>
          <span>${product.price}</span>
        </p>
      </div>
      <div className="ingredient__btn">
        <button onClick={(e) => {}} className=" border-1 border-white px-4 py-2 rounded-md">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
