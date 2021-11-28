import { getAll, search } from "../API";
import { Dispatch } from "redux";
import { actionTypes } from "../ENUM";

export interface newsItem {
    title: string,
    author: string,
    description: string,
    publishedAt: string,
    url: string,
    urlToImage: string
    source: {
        id: string | null;
        name: string
    }
}

export interface getNewsAction {
    type: actionTypes.getNews,
    payload: newsItem[]
}

export interface searchNewsAction {
    type: actionTypes.searchNews,
    payload: newsItem[]
}

interface GetNewsResponseInterface {
    articles: newsItem[]
}

export const getNews = () => async (dispatch: Dispatch) => {

    const { data } = await getAll().get<GetNewsResponseInterface>("");

    console.log(data.articles);
    dispatch<getNewsAction>({ type: actionTypes.getNews, payload: data.articles })
};

export const searchNews = (query: string) => async (dispatch: Dispatch) => {

    const { data } = await search(query).get<GetNewsResponseInterface>("");

    console.log(data.articles);
    dispatch<searchNewsAction>({ type: actionTypes.searchNews, payload: data.articles })
}
