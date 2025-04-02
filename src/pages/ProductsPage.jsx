import { useState } from "react";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, image: "/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 15, image: "/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 20, image: "/lily.jpg" },
];

function ProductsPage({ addToCart }) {
  return (
    <div className="products">
      <h2>Our Plants</h2>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/cart">
        <button>View Cart</button>
      </Link>
    </div>
  );
}

export default ProductsPage;
