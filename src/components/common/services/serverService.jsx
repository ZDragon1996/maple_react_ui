import axios from "axios";

const SERVER_URL = "http://127.0.0.1:8000";
const ONLINE = "server-status-green";
const OFFLINE = "server-status-red";

const getServerStatus = async () => {
  try {
    await axios.get(SERVER_URL);
  } catch (ex) {
    if (ex.code === "ERR_BAD_REQUEST") {
      console.log("API server online");
      return ONLINE;
    }
    console.log("API server offline", ex);
    return OFFLINE;
  }
};

export default {
  getServerStatus: getServerStatus,
};
