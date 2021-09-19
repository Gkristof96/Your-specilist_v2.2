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

export const getCityDataReducer = (state = { cities: [] }, action) => {
  switch (action.type) {
    case SEARCH_CITY_REQUEST:
      return {
        loading: true,
        cities: [],
      };
    case SEARCH_CITY_SUCCESS:
      return {
        loading: false,
        cities: action.payload,
      };
    case SEARCH_CITY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProfessionDataReducer = (
  state = { professions: [] },
  action
) => {
  switch (action.type) {
    case SEARCH_PROFESSION_REQUEST:
      return {
        loading: true,
        professions: [],
      };
    case SEARCH_PROFESSION_SUCCESS:
      return {
        loading: false,
        professions: action.payload,
      };
    case SEARCH_PROFESSION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCategoryDataReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case SEARCH_CATEGORY_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case SEARCH_CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case SEARCH_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
