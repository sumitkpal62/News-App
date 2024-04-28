import axios from "axios";

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (category = 'business', country = 'in') => {
  // Update the params object with the new category and country
  const params = {
    'apiKey': API_KEY,
    'category': category,
    'country': country,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    const data = await response.data.articles;
    return data;
  } catch (error) {
    console.log('Error fetching news:', error);
  }

  // Make the API request with the updated params
  // return axios.get(BASE_URL, { params })
  //   .then(response => {
  //     console.log(response.data);
  //     return response.data; // Return the data for further processing if needed
  //   })
  //   .catch(error => {
  //     console.error('Error fetching news:', error);
  //     throw error; // Throw the error to handle it in the calling code
  //   });
};
