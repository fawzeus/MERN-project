import axios from "axios";

url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
