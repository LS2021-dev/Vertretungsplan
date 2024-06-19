import Skeleton from "react-loading-skeleton";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu/Menu";
import TopSwitch from "./TopSwitch";
import { useEffect, useState } from "react";
import loader from "../functions/loader";
import fetchVertretungsplan from "../functions/fetchVertretungsplan";
import { animate, motion } from "framer-motion";
import LastUpdate from "./LastUpdate";

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
    animate("div", { opacity: 1, y: 0 });
  }, [active, activeData, data_1, data_2]);

  return (
    <div className={"Text"}>
      <MenuButton toggleMenu={() => setShowMenu(!showMenu)} />
      <motion.div
        initial={{ display: "none", opacity: 0 }}
        animate={
          showMenu
            ? { opacity: 1, display: "block" }
            : {
                opacity: 0,
                display: "none",
                transition: { display: { delay: 0.2 } },
              }
        }
      >
        <Menu
          index={1}
          showMenu={showMenu}
          setShowMenu={(bool) => setShowMenu(bool)}
        />
      </motion.div>
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
        <motion.div
          className={
            "TextBox space-y-4 rounded-md border border-gray-800 bg-gray-900 p-4 text-white lg:p-6"
          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={active}
        >
          {activeData?.vertretungsplan !== undefined ? (
            activeData.text.split("\n").map((item, i) => (
              <p key={i} className={"mb-2"}>
                {item}
              </p>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Skeleton
                count={10}
                baseColor={darkColor}
                highlightColor={darkColorHighlight}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
      {localStorage.lastUpdate !== undefined && <LastUpdate />}
    </div>
  );
}

export default Text;
