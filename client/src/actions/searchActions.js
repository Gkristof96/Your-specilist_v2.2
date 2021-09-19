import {
  SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAIL,
  SEARCH_PROFESSION_REQUEST,
  SEARCH_PROFESSION_SUCCESS,
  SEARCH_PROFESSION_FAIL,
  SEARCH_CATEGORY_REQUEST,
  SEARCH_CATEGORY_SUCCESS,
  SEARCH_CATEGORY_FAIL,
} from "../constants/searchConstants";
import axios from "axios";

export const getCityData = () => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_CITY_REQUEST,
    });

    const { data } = await axios.get("/api/search/city");

    dispatch({
      type: SEARCH_CITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_CITY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProfessionData = () => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_PROFESSION_REQUEST,
    });

    const { data } = await axios.get("/api/search/profession");

    dispatch({
      type: SEARCH_PROFESSION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_PROFESSION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCategoryData = () => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_CATEGORY_REQUEST,
    });

    const { data } = await axios.get("/api/search/category");

    dispatch({
      type: SEARCH_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
