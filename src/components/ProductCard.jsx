


import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [showOffer, setShowOffer] = useState(false);

  const ooStckMsg = (
    <p style={{ color: "red", fontSize: "18px" }}>
      Out of Stock
    </p>
  );

  const ratingDisplay = "⭐".repeat(product.rating);

  const offerPrice =
    product.price -
    (product.price * product.discount) / 100;

  return (
    <div className="card">
      <img
        src={product.imgSrc}
        alt={product.name}
      />

      <h3 className="blue">{product.name}</h3>

      {/* Rating */}
      <p>{ratingDisplay}</p>

      {/* Delivery */}
      <p
        style={{
          color:
            product.delivery === "Free Delivery"
              ? "green"
              : "oklch(54.2% 0.034 322.5)",
          fontWeight: "bold",
        }}
      >
        {product.delivery}
      </p>

      {/* OFFER PRODUCTS */}
      {product.offer ? (
        <>
          <button
            className="offer-btn"
            onClick={() =>
              setShowOffer(!showOffer)
            }
          >
            {showOffer
              ? "Hide Offer"
              : "Show Offer"}
          </button>

          {showOffer ? (
            <>
              <p>
                <del>
                  ₹{product.price}
                </del>
              </p>

              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                ₹{offerPrice}
              </p>

              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {product.discount}% OFF
              </p>

               
            </>
          ) : (
            <p>₹{product.price}</p>
          )}
        </>
      ) : (
        <p>₹{product.price}</p>
      )}

      {/* CART BUTTON */}
      {product.isavailable ? (
        <button
          onClick={() =>
            addToCart(product)
          }
          className="btn button"
        >
          Add to cart
        </button>
      ) : (
        ooStckMsg
      )}
    </div>
  );
};

export default ProductCard;