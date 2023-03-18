import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import MainTimeline from "../../components/MainTimeline/MainTimeline";

import "./Timeline.scss";
import { fetchPost } from "./timelineAPI";

const Timeline = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className="timeline-wraper">
      <div className="timeline-middle">
        <CreatePost />
        <MainTimeline />
      </div>
    </div>
  );
};

export default Timeline;
