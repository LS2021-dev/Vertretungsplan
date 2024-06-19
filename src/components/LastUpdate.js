import moment from "moment/moment";
import { FaArrowRotateRight } from "react-icons/fa6";

function LastUpdate() {
  return (
    <div className="LastUpdate">
      <div
        className={
          "absolute bottom-2 right-2 flex items-center space-x-2 text-gray-400"
        }
      >
        <span>{moment(localStorage.lastUpdate).fromNow()}</span>
        <button onClick={() => window.location.reload()}>
          <FaArrowRotateRight />
        </button>
      </div>
    </div>
  );
}

export default LastUpdate;