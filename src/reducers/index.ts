import { combineReducers } from "redux";
import { newsItem } from "../actions";
import { actionTypes } from "../ENUM";

export interface storeState {
  news: newsItem[]
}

const news = (state: newsItem[] = [], action: any) => {
  switch (action.type) {
    case actionTypes.getNews:
      return action.payload;
    case actionTypes.searchNews:
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers<storeState>({ news });