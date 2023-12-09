import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function Init() {
  const [userData, setUserData] = useState({});
  const updateUser = (data) => {
    setUserData(data);
    window.location.href = "/Vertretungsplan";
  };

  useEffect(() => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userKlasse:
          userData.userKlasse !== undefined &&
          userData.userKlasse.toUpperCase(),
        userWahlkurse: userData.userWahlkurse,
      }),
    );
  }, [userData]);

  const { register, handleSubmit } = useForm();

  return (
    <div className={"Init"}>
      <div className={"flex h-screen items-center justify-center"}>
        <div className={"w-full max-w-xs space-y-5"}>
          <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Halloo
          </h1>
          <div className={"space-y-4"}>
            <div>
              <label
                htmlFor="userKlasse"
                className="block text-sm font-medium text-gray-200"
              >
                Deine Klasse
              </label>

              <input
                type="text"
                id="userKlasse"
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-800 text-sm text-gray-200 shadow-sm"
                {...register("userKlasse", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="userWahlkurse" className="flex gap-4">
                <input
                  type="checkbox"
                  id="userWahlkurse"
                  className="h-5 w-5 rounded-md border-gray-700 bg-gray-800 shadow-sm focus:ring-offset-gray-900"
                  {...register("userWahlkurse", {
                    required: false,
                    value: false,
                  })}
                />

                <span className="text-sm font-medium text-gray-200">
                  Wahlkurse anzeigen
                </span>
              </label>
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit(updateUser)}
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-blue-500"
            >
              Abschließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Init;
