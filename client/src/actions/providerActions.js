import {
  PROVIDER_LIST_REQUEST,
  PROVIDER_LIST_SUCCESS,
  PROVIDER_LIST_FAIL,
  PROVIDER_DATA_REQUEST,
  PROVIDER_DATA_SUCCESS,
  PROVIDER_DATA_FAIL,
  PROVIDER_ADD_PROFESSION_REQUEST,
  PROVIDER_ADD_PROFESSION_SUCCESS,
  PROVIDER_ADD_PROFESSION_FAIL,
  PROVIDER_CREATE_REVIEW_REQUEST,
  PROVIDER_CREATE_REVIEW_SUCCESS,
  PROVIDER_CREATE_REVIEW_FAIL,
  PROVIDER_UPDATE_REQUEST,
  PROVIDER_UPDATE_SUCCESS,
  PROVIDER_UPDATE_FAIL,
  PROVIDER_DELETE_PROFESSION_REQUEST,
  PROVIDER_DELETE_PROFESSION_FAIL,
  PROVIDER_DELETE_PROFESSION_SUCCESS,
} from "../constants/providerConstans";
import axios from "axios";
import { logout } from "./userActions";

export const listProviders =
  (pageNumber = "", keyword = {}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PROVIDER_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/api/provider?pageNumber=${pageNumber}&city=${keyword.city}&profession=${keyword.profession}`
      );

      dispatch({
        type: PROVIDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PROVIDER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listProviderData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROVIDER_DATA_REQUEST,
    });

    const { data } = await axios.get(`/api/provider/${id}`);

    dispatch({
      type: PROVIDER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROVIDER_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProviderReview = (id, review) => async (dispatch) => {
  try {
    dispatch({
      type: PROVIDER_CREATE_REVIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(`/api/provider/${id}/reviews`, review, config);

    dispatch({
      type: PROVIDER_CREATE_REVIEW_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PROVIDER_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProvider = (provider) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROVIDER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put("/api/provider/profile", provider, config);

    dispatch({
      type: PROVIDER_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: PROVIDER_DATA_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROVIDER_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const addProfession = (profession) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROVIDER_ADD_PROFESSION_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.post("/api/provider/profile/professions", profession, config);

    dispatch({
      type: PROVIDER_ADD_PROFESSION_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROVIDER_ADD_PROFESSION_FAIL,
      payload: message,
    });
  }
};

export const deleteProfession = (profession) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROVIDER_DELETE_PROFESSION_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.post(
      "/api/provider/profile/professions/delete",
      profession,
      config
    );

    dispatch({
      type: PROVIDER_DELETE_PROFESSION_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROVIDER_DELETE_PROFESSION_FAIL,
      payload: message,
    });
  }
};
