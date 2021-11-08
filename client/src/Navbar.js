import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>The Musical Review</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="new-button">New Musical</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;