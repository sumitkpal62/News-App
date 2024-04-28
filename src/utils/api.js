import axios from "axios";

const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us';

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`,
};

export const fetchNews = () => axios.get(BASE_URL, { headers })