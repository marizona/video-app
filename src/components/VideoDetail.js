import React from "react";

function VideoDetail({ video }) {
  if (!video) {
    return <div>...Loading</div>
    
  }
  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
        style={{borderRadius:'20px'}}
          width="560"
          height="315"
          title="video player"
          src={videoSrc}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
