// SimpleNavbar.js
import { Link } from "react-router-dom";
import "./Navbar.css";

const SimpleNavbar = () => {
    return (
        <nav>
      <ul>
        <div style={ {display:"flex", justifyContent:"100%" }}>
        <li>
          <Link to="/add">Add Article</Link>
        </li>
        <li>
          <Link to="/search">Search Articles</Link>
        </li>
      </div>
      </ul>
    </nav>
    );
};

export default SimpleNavbar;
