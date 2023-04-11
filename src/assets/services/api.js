import axios from "axios";

const randomQuote = axios.create({
  baseURL: process.env.REACT_APP_API_QUOTE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false
});
export default randomQuote;