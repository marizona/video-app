import React from "react";
import "./videoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //destructure prop
  return (
    <div onClick={()=>onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{ borderRadius: "10px" }}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
