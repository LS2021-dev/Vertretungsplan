import { motion } from "framer-motion";

function Alert(props) {
  return (
    <motion.div
      className="Alert col-span-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div
        className={
          "rounded-md border border-gray-800 bg-gray-900 p-4 text-white lg:p-6"
        }
      >
        <p className={"text-center"}>
          <span className={"text-2xl font-medium text-white"}>
            {props.title}
          </span>
        </p>
        <p className={"text-center"}>
          <span className={"text-sm font-medium text-gray-400"}>
            {props.text}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default Alert;
