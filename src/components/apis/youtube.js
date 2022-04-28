import axios from "axios";

const KEY = "AIzaSyAWaldhIjEP8a39baTpzYfn-9IcWVG8kwc";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
