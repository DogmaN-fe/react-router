import { NavLink, Outlet } from "react-router-dom";

const AboutPage = () => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "active-link-in-about-us" : "";

  return (
    <div>
      <h1>О нас</h1>
      <p>Это демонстрационный сайт о библиотеке React-router-dom</p>
      <ul>
        <li>
          <NavLink className={setActive} to="contacts">
            Наши контакты
          </NavLink>
        </li>
        <li>
          <NavLink className={setActive} to="team">
            Наша команда
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default AboutPage;
