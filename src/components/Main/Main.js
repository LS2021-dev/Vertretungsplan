// src/components/Main/Main.js
import { useEffect, useState } from "react";
import { useVertretungsplan } from "../../context/VertretungsplanContext";
import MenuButton from "../Menu/MenuButton";
import Menu from "../Menu/Menu";
import TopSwitch from "../TopSwitch";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import loader from "../../functions/loader";
import Alert from "../Alert";
import { motion } from "framer-motion";
import moment from "moment";
import * as PropTypes from "prop-types";
import LastUpdate from "../LastUpdate";

LastUpdate.propTypes = { onClick: PropTypes.func };

function Main() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const { data_1, data_2, error } = useVertretungsplan();
  const [activeData, setActiveData] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (data_1?.vertretungsplan !== undefined) {
      localStorage.lastUpdate = moment();
    }
  }, [data_1]);

  useEffect(() => {
    loader();
    setUserData(JSON.parse(localStorage.getItem("userData")));
    setActiveData(active === 0 ? data_1 : data_2);
  }, [active, data_1, data_2, showMenu]);

  return (
    <div className={"Main"}>
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
          index={0}
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
            activeData={activeData}
          />
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {activeData?.vertretungsplan !== undefined ? (
            activeData?.vertretungsplan.some((e) =>
              e.klasse.includes(userData.userKlasse),
            ) ||
            (userData.userWahlkurse &&
              activeData?.vertretungsplan.some((e) =>
                e.klasse.includes("Wahlkurs"),
              )) ? (
              activeData?.vertretungsplan?.map((value, index) => {
                if (
                  value.klasse.includes(userData.userKlasse) ||
                  (userData.userWahlkurse && value.klasse.includes("Wahlkurs"))
                ) {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Card
                        stunde={value.stunde}
                        fach={value.fach}
                        raum={value.raum}
                        lehrer={value.lehrer}
                        bemerkung={value.bemerkung}
                        wahlkurs={activeData?.vertretungsplan.some((e) =>
                          e.klasse.includes("Wahlkurs"),
                        )}
                        key={index}
                      />
                    </motion.div>
                  );
                } else return null;
              })
            ) : (
              <Alert
                title={"Keine Vertretungen"}
                text={"Es wurden keine Vertretungen gefunden"}
                key={active}
              />
            )
          ) : (
            [...Array(3)].map((v, i) => {
              return <SkeletonCard key={i} />;
            })
          )}
        </div>
      </div>
      {localStorage.lastUpdate !== undefined && !showMenu && <LastUpdate />}
    </div>
  );
}

export default Main;
