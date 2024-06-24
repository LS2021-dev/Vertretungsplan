import moment from "moment/moment";
import { FaArrowRotateRight } from "react-icons/fa6";

function LastUpdate() {
  return (
    <div className="LastUpdate">
      <div
        className={
          "fixed bottom-3 right-3 z-40 flex cursor-pointer items-center space-x-2 rounded-md border border-gray-800 bg-gray-950/60 px-2 py-1 text-gray-400 backdrop-blur-md"
        }
        onClick={() => window.location.reload()}
      >
        <span>{moment(localStorage.lastUpdate).fromNow()}</span>
        <FaArrowRotateRight />
      </div>
    </div>
  );
}

export default LastUpdate;
