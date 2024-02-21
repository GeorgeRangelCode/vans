import { NavLink, Outlet } from "react-router-dom";

export const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink style={({ isActive }) => (isActive ? activeStyles : {})} end to=".">
          Dashboard
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : {})} to="income">
          Income
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : {})} to="vans">
          Vans
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : {})} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
