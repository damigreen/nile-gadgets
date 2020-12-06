import axios from "axios";

const baseUrl = "http://localhost:3004/api/products/mobile-phones";

const getAll = async () => {
  return await axios.get(baseUrl);
};

export default {
  getAll,
}