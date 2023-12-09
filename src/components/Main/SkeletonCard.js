import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  const darkColor = "#1e293b";
  const darkColorHighlight = "#334155";

  return (
    <div className={"SkeletonCard"}>
      <SkeletonTheme baseColor={darkColor} highlightColor={darkColorHighlight}>
        <div className="flex h-full flex-col gap-4 rounded-md border border-gray-800 bg-gray-900 p-4 lg:p-6">
          <div className={"flex"}>
            <span className="w-1/2 text-2xl font-medium text-white">
              <Skeleton />
            </span>
          </div>
          <div className={"my-auto"}>
            <strong className="block text-sm font-medium text-gray-400">
              <Skeleton />
            </strong>
            <strong className="block text-sm font-medium text-gray-400">
              <Skeleton />
            </strong>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default SkeletonCard;
