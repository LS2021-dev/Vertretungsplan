function Card(props) {
  return (
    <div className={"Card"}>
      <div className="flex flex-col justify-between gap-4 rounded-md border border-gray-800 bg-gray-900 p-4 lg:h-60 lg:p-6">
        <div className={"flex justify-between"}>
          <span className="text-2xl font-medium text-white">
            {props.fach.includes("-") ? (
              <span>
                <s>{props.fach.split("-")[1]}</s>
                {props.fach.split("-")[2]}
              </span>
            ) : (
              props.fach
            )}
          </span>
          <div
            className={`inline-flex gap-2 self-end rounded bg-blue-700 p-1 text-blue-50`}
          >
            <span className="text-xs font-medium">{props.stunde}</span>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className={"my-auto"}>
          <strong className="block text-sm font-medium text-gray-400">
            {props.lehrer.includes("-") ? (
              <span>
                <s>{props.lehrer.split("-")[1]}</s>
                {props.lehrer.split("-")[2]}
              </span>
            ) : (
              props.lehrer
            )}
          </strong>

          <strong className="block text-sm font-medium text-gray-400">
            {props.raum.includes("-") ? (
              <span>
                <s>{props.raum.split("-")[1]}</s>
                {props.raum.split("-")[2]}
              </span>
            ) : (
              props.raum
            )}
          </strong>
        </div>
        {props.bemerkung !== "" && (
          <div
            className={
              "flex items-center rounded-md border border-gray-700 bg-gray-800 p-3 text-sm text-white"
            }
          >
            {props.bemerkung}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
