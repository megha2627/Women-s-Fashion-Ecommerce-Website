/*import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      style={{ width: "80%", justifyContent: "center", margin: "auto" }}
    >
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96  md:h-64 w-full  hover:scale-105 transtition-all duration-300"
              ></img>
            </Link>
            <div className="hover:block absolute text-white top-2 right-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <i className="ri-shopping-cart-2-line bg-primary p-2 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              ${product.price}{" "}
              {product?.oldPrice ? <s>${product?.oldPrice}</s> : null}
            </p>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;*/



import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddToCart = (product) => {
    if (!user) {
      alert("Please log in to add items to the cart.");
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      style={{ width: "80%", justifyContent: "center", margin: "auto" }}
    >
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96  md:h-64 w-full  hover:scale-105 transtition-all duration-300"
              ></img>
            </Link>
            <div className="hover:block absolute text-white top-2 right-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <i className="ri-shopping-cart-2-line bg-primary p-2 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              ${product.price}{" "}
              {product?.oldPrice ? <s>${product?.oldPrice}</s> : null}
            </p>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;