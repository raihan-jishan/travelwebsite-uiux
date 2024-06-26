import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/index";
import { hilinklogo, menu, user } from "../utils/images";
import { Button } from './index';

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container w-full bg-white z-30 py-5 fixed top-0  ">
      <Link to={'/'}>
        <img
          src={hilinklogo}
          alt="logo was not found!"
          width={74}
          height={29}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => {
          return (
            <li key={link}>
              <Link
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                to={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type={"button"}
          title={"Login"}
          path={'/account'}
          icon={user}
          variant={"btn_dark_green"}
        />
      </div>

      <img
        src={menu}
        alt="menu icon was not found!"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
