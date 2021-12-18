import { createSlice } from "@reduxjs/toolkit";
import { fetchPost, fetchPostList, fetchCreateNewPost } from "../../useWebAPI";

// const [posts, setPosts] = useState(initialState);
const initialState = {
  isLoading: false,
  postList: [],
  postPage: ["1"],
  post: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPostList: (state, action) => {
      state.postList = action.payload;
    },
    setPostPage: (state, action) => {
      state.postPage[0] = action.payload.currentPage;
      state.postPage[1] = action.payload.totalPage;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setIsLoading, setPostList, setPostPage, setPost } =
  postSlice.actions; // action 從這邊先拿出來，下面才能使用dispatch 搭配 action;

export const getPostList = (page) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { totalPage, pageList } = await fetchPostList(page);
    dispatch(setPostPage({ currentPage: page, totalPage }));
    dispatch(setPostList(pageList));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const getPost = (id) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await fetchPost(id);
    dispatch(setPost(response));
    dispatch(setIsLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export default postSlice.reducer;
