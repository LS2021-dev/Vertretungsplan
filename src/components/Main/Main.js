import { useEffect, useState } from "react";
import MenuButton from "../Menu/MenuButton";
import Menu from "../Menu/Menu";
import TopSwitch from "../TopSwitch";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import loader from "../../functions/loader";
import Alert from "../Alert";
import fetchVertretungsplan from "../../functions/fetchVertretungsplan";
import { motion } from "framer-motion";

function Main() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const [data_1, setData_1] = useState({});
  const [data_2, setData_2] = useState({});
  const [activeData, setActiveData] = useState({});

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchVertretungsplan().then((r) => {
      setData_1(r[0]);
      setData_2(r[1]);
    });
  }, []);

  useEffect(() => {
    loader();
    setUserData(JSON.parse(localStorage.getItem("userData")));
    setActiveData(active === 0 ? data_1 : data_2);
  }, [active, activeData, data_1, data_2, showMenu]);

  const menu = {
    open: { opacity: 0, display: "block" },
    closed: {
      opacity: 0,
      display: "none",
      transition: { display: { delay: 0.2 } },
    },
  };

  return (
    <div className={"Main"}>
      <MenuButton toggleMenu={() => setShowMenu(!showMenu)} />
      <motion.div animate={showMenu ? "opened" : "closed"} variants={menu}>
        <Menu index={0} showMenu={showMenu} />
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
            activeData={activeData}
          />
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {activeData?.klassen !== undefined ? (
            activeData?.klassen.includes(userData.userKlasse) ||
            (userData.userWahlkurse &&
              activeData?.klassen.includes("Wahlkurs")) ? (
              activeData?.vertretungsplan?.map((value) => {
                if (
                  value.klasse.includes(userData.userKlasse) ||
                  (userData.userWahlkurse && value.klasse.includes("Wahlkurs"))
                ) {
                  return (
                    <Card
                      stunde={value.stunde}
                      fach={value.fach}
                      raum={value.raum}
                      lehrer={value.lehrer}
                      bemerkung={value.bemerkung}
                      wahlkurs={value.klasse.includes("Wahlkurs")}
                      key={crypto.randomUUID()}
                    />
                  );
                } else return null;
              })
            ) : (
              <Alert
                title={"Keine Vertretungen"}
                text={"Es wurden keine Vertretungen gefunden"}
              />
            )
          ) : (
            [...Array(3)].map(() => {
              return <SkeletonCard key={crypto.randomUUID()} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
