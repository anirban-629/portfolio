import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./styles/navbar.css";
import MenuButton from "./helpers/MenuButton";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    {
      id: 0,
      name: "Home",
      to: "/",
      current: location.pathname.split("/")[1] === "" ? true : false,
    },
    {
      id: 1,
      name: "About",
      to: "/about",
      current: location.pathname.split("/")[1] === "about" ? true : false,
    },
    {
      id: 2,
      name: "Skills",
      to: "/skills",
      current: location.pathname.split("/")[1] === "skills" ? true : false,
    },
    {
      id: 3,
      name: "Projects",
      to: "/projects",
      current: location.pathname.split("/")[1] === "projects" ? true : false,
    },
    {
      id: 4,
      name: "Blogs",
      to: "/blogs",
      current: location.pathname.split("/")[1] === "blogs" ? true : false,
    },
    // {
    //   id: 5,
    //   name: "Guided Paths",
    //   to: "/guidedpaths",
    //   current:
    //     location.pathname.split("/")[1] === "guided paths" ? true : false,
    // },
    {
      id: 6,
      name: "Contact",
      to: "/contact",
      current: location.pathname.split("/")[1] === "contact" ? true : false,
    },
    // {
    //   id: 7,
    //   name: "Reviews",
    //   to: "/reviews",
    //   current: active === "reviews" ? true : false,
    // },
  ];

  // ! {PROFILE MENU}
  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }
  // ! {PROFILE MENU}
  return (
    <Disclosure as="nav" className="bg-white  sticky top-0 z-50 border-b-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-4 w-auto lg:hidden"
                      src="/images/logo.png"
                      alt="Your Company"
                    />
                  </Link >
                  <Link to="/">
                    <img
                      className="hidden h-4 w-auto lg:block"
                      src="/images/logo.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <MenuButton
                        key={item.name}
                        data={{
                          id: item.id,
                          to: item.to,
                          name: item.name,
                          current: item.current,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <BellIcon active={true} /> */}
                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/images/icon.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <MenuButton
                  key={item.name}
                  data={{
                    id: item.id,
                    to: item.to,
                    name: item.name,
                    current: item.current,
                  }}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
