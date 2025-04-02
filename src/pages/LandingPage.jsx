import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Discover the beauty of houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
