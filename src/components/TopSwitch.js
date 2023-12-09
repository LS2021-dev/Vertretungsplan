import moment from "moment";
import "moment/locale/de";
import Skeleton from "react-loading-skeleton";

function TopSwitch({ active, setActive, data_1, data_2, activeData }) {
  moment.locale("de");
  const darkColor = "#1e293b";
  const darkColorHighlight = "#334155";

  return (
    <div className="TopSwitch">
      {data_1?.date !== undefined && data_2?.date !== undefined ? (
        <div>
          <span className={"text-4xl font-semibold text-white"}>
            {moment(activeData?.date, "DD.MM.YYYY").isSame(moment(), "day")
              ? "Heute"
              : moment(activeData?.date, "DD.MM.YYYY").format("dddd")}
          </span>
          <span className={"text-4xl font-semibold text-white"}> ↔ </span>
          <button
            className={"text-4xl font-semibold text-gray-600"}
            onClick={() => setActive(active === 0 ? 1 : 0)}
          >
            {moment(
              (active === 0 ? data_2 : data_1)?.date,
              "DD.MM.YYYY",
            ).isSame(moment(), "day")
              ? "Heute"
              : moment(
                  (active === 0 ? data_2 : data_1)?.date,
                  "DD.MM.YYYY",
                ).format("dddd")}
          </button>
        </div>
      ) : (
        <Skeleton
          baseColor={darkColor}
          highlightColor={darkColorHighlight}
          width={"20rem"}
          height={"2.25rem"}
        />
      )}
    </div>
  );
}

export default TopSwitch;
