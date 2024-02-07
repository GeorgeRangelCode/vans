import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
};
