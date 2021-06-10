import { ADD_ARTICLE, SET_BUSY, CLEAR_LIST } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function setBusy(payload){
  return { type: SET_BUSY, payload };
}

export function clearQuotes(){
  return { type: CLEAR_LIST };
}