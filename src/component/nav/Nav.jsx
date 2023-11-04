import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from './../../AuthProvider/AuthProvider';


const Nav = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);
  const handleLogOut = () => {
    LogOut()
      .then((result) => {})
      .catch((error) => {});
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className={`mt-2 mb-4 flex font-bold flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 
        justify-center items-center`}
    >
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-4 lg:border-t-4 border-cyan-600"
            : ""
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/rooms"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-4 lg:border-t-4 border-cyan-600"
            : ""
        }
      >
        <li>Rooms</li>
      </NavLink>
      <NavLink
        to={`/myBookings`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-4 lg:border-t-4 border-cyan-600"
            : ""
        }
      >
        <li>My Bookings</li>
      </NavLink>
    </ul>
  );

  return (
    <div className="">
      <Navbar
        className={`sticky top-0 border-none z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-2">
            <img
              className="w-[50px]"
              src="https://i.ibb.co/jJCTfSH/lio-logo-removebg-preview.png"
              alt=""
            />
            <h1 className="text-cyan-600 font-bold text-xl md:text-2xl drop-shadow-md">
              LioTech
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <div>
                {user ? (
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <img
                        className="w-[50px] rounded-full border-6 border-blue-600"
                        src={user.photoURL}
                        alt="User Profile"
                      />
                      <p
                        className={` text-blue-500 tracking-[2px] font-semibold`}
                      >
                        {user.displayName}
                      </p>
                    </div>
                    <Button
                      onClick={handleLogOut}
                      type="button"
                      className="text-white font-bold   hidden md:inline-block  bg-gradient-to-r from-blue-500 to-light-blue-200 focus:ring-4 focus:outline-non  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                    >
                      LogOut
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button
                      type="button"
                      className="text-white   hidden md:inline-block  bg-gradient-to-r from-blue-500 to-light-blue-200 focus:ring-4 focus:outline-none]/40 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </div>
 
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex justify-center items-center gap-x-1">
            <Link to="/login">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Login</span>
              </Button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};
export default Nav;
