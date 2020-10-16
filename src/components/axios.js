import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f0e6f.cloudfunctions.net/api", // THE API (cloud function) URL

  // http://localhost:5001/clone-f0e6f/us-central1/api
});

export default instance;
