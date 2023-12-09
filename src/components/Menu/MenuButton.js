import { FaBars } from "react-icons/fa";

function MenuButton({ toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className={
        "fixed right-3 top-3 z-20 rounded-md border border-gray-800 bg-gray-900 p-2 focus:ring-offset-gray-900"
      }
    >
      <FaBars className={"text-2xl text-white"} />
    </button>
  );
}

export default MenuButton;
