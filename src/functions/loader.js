const loader = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (
    user === undefined ||
    user?.userKlasse === undefined ||
    user?.userWahlkurse === undefined
  ) {
    window.location.href = "#/init";
  }
  return null;
};

export default loader;
