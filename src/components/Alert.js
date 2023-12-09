function Alert(props) {
  return (
    <div className="Alert col-span-3">
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
    </div>
  );
}

export default Alert;
