import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchUserInfo, fetchRegister } from "../../useWebAPI";
import { setAuthToken } from "../../utils";

const initialState = {
  userIsLoading: false,
  userInfo: null,
  isLogin: false,
  errorMessage: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserIsLoading: (state, action) => {
      // 這邊應該要用 return { ...state, userIsLoading: action.payload } 以回傳一個新的物件來更新才是正確的
      state.userIsLoading = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setUserIsLoading, setIsLogin, setUserInfo, setErrorMessage } =
  userSlice.actions;

export const getUserInfo =
  (navigate, username, password) => async (dispatch) => {
    // console.log("work");
    dispatch(setErrorMessage(null));
    dispatch(setUserIsLoading(true));
    try {
      const result = await fetchLogin(username, password);
      if (!result.ok) {
        setAuthToken(null);
        return dispatch(setErrorMessage(result.message));
      }
      setAuthToken(result.token);
      const userData = await fetchUserInfo(result.token);
      dispatch(setUserInfo(userData));
      dispatch(setUserIsLoading(false));
      dispatch(setIsLogin(true));
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch(setErrorMessage(err));
    }
  };

export const getRegister =
  (navigate, username, nickname, password) => async (dispatch) => {
    dispatch(setUserIsLoading(true));
    dispatch(setErrorMessage(null));
    try {
      const result = await fetchRegister(username, nickname, password);
      if (!result.ok) return dispatch(setErrorMessage(result.message));
      setAuthToken(result.token);
      const userData = await fetchUserInfo(result.token);
      dispatch(setUserInfo(userData));
      dispatch(setUserIsLoading(false));
      dispatch(setIsLogin(true));
      navigate("/");
    } catch (err) {
      dispatch(setUserIsLoading(false));
      console.log(err);
    }
  };

export default userSlice.reducer;
