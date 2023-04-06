import { Link } from "react-router-dom";

const MenuButton = (props) => {
  const { to, name, current, setActivePage } = props.data;
  return (
    <Link
      onClick={() => {
        setActivePage(name.toLowerCase() === "home" ? "" : name);
      }}
      to={to}
      key={name}
      className={`relative px-3 py-1 overflow-hidden font-medium text-gray-600 rounded-lg  group ${
        current ? "border-2 border-black " : ""
      }`}
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
        {name}
      </span>
    </Link>
  );
};

export default MenuButton;
