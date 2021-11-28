import axios, { AxiosInstance } from "axios";

const API_KEY: string = "90009d14c3e14a68aedffb9629a80052";

function getAll(): AxiosInstance {
    return axios.create({
        baseURL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    })
}

function search(query: string): AxiosInstance {
    return axios.create({
        baseURL: `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=${API_KEY}`,
    })
}

export { getAll, search };