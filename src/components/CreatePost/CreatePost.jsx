import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/timeline/timelineAPI";
import Modal from "../Modal/Modal";
import "./CreatePost.scss";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    auth_name: "",
    auth_photo: "",
    content: "",
    photo: "",
  });

  const handleCreatePost = () => {
    dispatch(createPost(input));
    setModal(false);
  };

  // input hanle
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="timeline-create-post">
      {modal && (
        <Modal>
          <div className="post-form">
            <input
              type="text"
              name="auth_name"
              value={input.auth_name}
              onChange={handleInput}
              placeholder="name"
            />
            <input
              type="text"
              name="auth_photo"
              value={input.auth_photo}
              onChange={handleInput}
              placeholder="Auth Photo"
            />
            <input
              type="text"
              name="content"
              value={input.content}
              onChange={handleInput}
              placeholder="Post Content"
            />
            <input
              type="text"
              name="photo"
              value={input.photo}
              onChange={handleInput}
              placeholder="Post Photo"
            />
            <div className="btns">
              <button onClick={handleCreatePost}>Create Post</button> <br />
              <button onClick={() => setModal(!modal)}>Close</button>
            </div>
          </div>
        </Modal>
      )}
      <button onClick={() => setModal(!modal)}>
        <i class="bx bx-plus-medical"></i>
        Create new Post
      </button>
    </div>
  );
};

export default CreatePost;
