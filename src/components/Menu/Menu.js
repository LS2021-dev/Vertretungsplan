import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { animate, stagger } from "framer-motion";

function Menu({ index, showMenu }) {
  const classActive =
    "block rounded-lg px-4 py-2 text-sm font-medium bg-gray-800 text-gray-200";
  const classInactive =
    "block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-200";

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(showMenu);
    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );
  }, [isOpen, showMenu, staggerMenuItems]);

  return (
    <div className={"Menu"}>
      <div
        className={
          "fixed z-10 flex h-screen w-full items-center justify-center bg-gray-950/60 backdrop-blur-md"
        }
      >
        <ul className="space-y-1">
          <li>
            <Link to="/" className={index === 0 ? classActive : classInactive}>
              Vertretungsplan
            </Link>
          </li>

          <li>
            <Link
              to="/text"
              className={index === 1 ? classActive : classInactive}
            >
              Text
            </Link>
          </li>

          <li>
            <Link
              to="/init"
              className={index === 2 ? classActive : classInactive}
            >
              Klasse ändern
            </Link>
          </li>

          <li>
            <Link
              to="https://github.com/LS2021-dev/Vertretungsplan"
              className={index === 3 ? classActive : classInactive}
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
