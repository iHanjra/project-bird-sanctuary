import React from "react";

export default function Birds({ bird, addToCart }) {
  return (
    <div className="birds">
      <div className="card">
        <p>{bird.name}</p>
        <p>Price ${bird.amount}</p>
        <img
          style={{ height: "200px", width: "200px" }}
          src={bird.img}
          alt={bird.name}
        />
        <div>
          <button className="adoptButton" onClick={() => addToCart(bird)}>
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}
