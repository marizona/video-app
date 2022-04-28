import axios from "axios";

const KEY = "AIzaSyCMkZX3hwo-cNiVHC08hj8C9x2ammj-HA8";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
