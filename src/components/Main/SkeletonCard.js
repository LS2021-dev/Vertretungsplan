import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  const darkColor = "#1e293b";
  const darkColorHighlight = "#334155";

  return (
    <motion.div
      className={"SkeletonCard"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SkeletonTheme baseColor={darkColor} highlightColor={darkColorHighlight}>
        <div className="flex h-60 flex-col gap-4 rounded-md border border-gray-800 bg-gray-900 p-4 lg:p-6">
          <div className={"flex"}>
            <span className="w-1/2 text-2xl font-medium text-white">
              <Skeleton />
            </span>
          </div>
          <hr className="border-gray-700" />
          <div className={"my-auto"}>
            <strong className="block text-sm font-medium text-gray-400">
              <Skeleton />
            </strong>
            <strong className="block text-sm font-medium text-gray-400">
              <Skeleton />
            </strong>
            <strong className="block text-sm font-medium text-gray-400">
              <Skeleton />
            </strong>
            <strong className="block text-sm font-medium text-gray-400">
              <Skeleton />
            </strong>
            <strong className="block text-sm font-medium text-gray-400">
              <Skeleton />
            </strong>
          </div>
        </div>
      </SkeletonTheme>
    </motion.div>
  );
}

export default SkeletonCard;
