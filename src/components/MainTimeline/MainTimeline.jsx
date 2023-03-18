import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../features/timeline/timelineSlice";
import "./mainTimeline.scss";

const MainTimeline = () => {
  const posts = useSelector(getAllPosts);
  return (
    <div className="timeline-all-posts">
      {[...posts]
        .reverse()
        .map(
          (
            { auth_name, auth_photo, content, photo, post_time, reactions },
            index
          ) => {
            return (
              <div className="timeline-box" key={index}>
                <div className="auth-info">
                  <img src={auth_photo} alt="" />
                  <div className="auth-details">
                    <h3>{auth_name}</h3>
                    <span>12 min ago</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>{content}</p>
                  <img src={photo} alt="" />
                </div>
                <div className="post-reactions">
                  <div className="reaction-item">
                    <i class="bx bx-heart"></i>
                    <span>10</span>
                  </div>
                  <div className="reaction-item">
                    <i class="bx bx-like"></i>
                    <span>10</span>
                  </div>
                  <div className="reaction-item">
                    <i class="bx bx-dislike"></i>
                    <span>10</span>
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default MainTimeline;
