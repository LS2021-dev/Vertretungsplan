import moment from "moment/moment";
import { FaArrowRotateRight } from "react-icons/fa6";

function LastUpdate() {
  return (
    <div className="LastUpdate">
      <div
        className={
          "fixed bottom-0 right-0 z-40 flex items-center space-x-2 rounded-md bg-gray-950/60 px-2 py-1 text-gray-400 backdrop-blur-md"
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
