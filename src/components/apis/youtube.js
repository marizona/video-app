import axios from "axios";

const KEY = "AIzaSyBpM6aA9VmYgjG1DF3IDDvvDsyH1VBv35k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
