import { Link } from "react-router-dom";

function Menu(props) {
  const classActive =
    "block rounded-lg px-4 py-2 text-sm font-medium bg-gray-800 text-gray-200";
  const classInactive =
    "block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-200";

  return (
    <div className={"Menu"}>
      <div
        className={
          "fixed z-10 flex h-screen w-full items-center justify-center bg-gray-950/60 backdrop-blur-md"
        }
      >
        <ul className="space-y-1">
          <li>
            <Link
              to="/"
              className={props.index === 0 ? classActive : classInactive}
            >
              Vertretungsplan
            </Link>
          </li>

          <li>
            <Link
              to="/text"
              className={props.index === 1 ? classActive : classInactive}
            >
              Text
            </Link>
          </li>

          <li>
            <Link
              to="/init"
              className={props.index === 2 ? classActive : classInactive}
            >
              Klasse ändern
            </Link>
          </li>

          <li>
            <Link
              to="https://github.com/LS2021-dev/Vertretungsplan"
              className={props.index === 3 ? classActive : classInactive}
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
