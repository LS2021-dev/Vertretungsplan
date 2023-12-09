import Skeleton from "react-loading-skeleton";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu/Menu";
import TopSwitch from "./TopSwitch";
import { useEffect, useState } from "react";
import loader from "../functions/loader";
import fetchVertretungsplan from "../functions/fetchVertretungsplan";

function Text() {
  const darkColor = "#1e293b";
  const darkColorHighlight = "#334155";

  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const [data_1, setData_1] = useState({});
  const [data_2, setData_2] = useState({});
  const [activeData, setActiveData] = useState({});

  const [error, setError] = useState(false);

  useEffect(() => {
    fetchVertretungsplan().then((r) => {
      setData_1(r[0]);
      setData_2(r[1]);
    });
  }, []);

  useEffect(() => {
    loader();
    setActiveData(active === 0 ? data_1 : data_2);
    setError(data_1?.title === undefined || data_2?.title === undefined);
  }, [active, activeData, data_1, data_2]);

  return (
    <div className={"Text"}>
      <MenuButton toggleMenu={() => setShowMenu(!showMenu)} />
      {showMenu && <Menu index={1} />}
      <div
        className={`flex flex-col p-8 lg:p-14 ${
          showMenu && "h-screen overflow-hidden"
        }`}
      >
        <p className={"mb-5"}>
          <TopSwitch
            setActive={setActive}
            active={active}
            data_1={data_1}
            data_2={data_2}
            error={error}
            activeData={activeData}
          />
        </p>
        <div
          className={
            "rounded-md border border-gray-800 bg-gray-900 p-4 text-white lg:p-6"
          }
        >
          {activeData?.klassen !== undefined ? (
            activeData.text
          ) : (
            <Skeleton
              count={10}
              baseColor={darkColor}
              highlightColor={darkColorHighlight}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Text;
