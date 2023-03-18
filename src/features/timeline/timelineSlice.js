import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchPost } from "./timelineAPI";

// create post slice
export const postSlice = createSlice({
  name: "timeline",
  initialState: {
    posts: [],
    status: "idle" /* loading | successed | failed */,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, { type, payload }) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, { type, payload }) => {
        state.status = "successed";
        state.posts = payload;
        state.message = "All posts loaded";
      })
      .addCase(fetchPost.rejected, (state, { type, payload }) => {
        state.status = "failed";
        state.error = "Data loading failed";
      })
      .addCase(createPost.pending, (state, { type, payload }) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, { type, payload }) => {
        state.status = "successed";
        state.posts.push(payload);
        state.message = "Post created successful";
      })
      .addCase(createPost.rejected, (state, { type, payload }) => {
        state.status = "failed";
        state.error = "Post created failed";
      });
  },
});

// selectors
export const getAllPosts = (state) => state.timeline.posts;

// export
export const {} = postSlice.actions;
export default postSlice.reducer;
