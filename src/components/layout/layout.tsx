import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "active-link" : "";

  
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/posts" className={setActive}>
          Blog
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About us
        </NavLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2024</footer>
    </>
  );
};

export default Layout;
