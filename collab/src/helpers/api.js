import axios from "axios";

export default class ApiCall {
    static async getMethod(url) {
      const response = await axios.get(url);
      if (response.status) {
        return response.data;
      }
  
      return null;
    }
  
    static async postMethod(url, payload) {
      return axios.post(url, payload);
    }
  }

const getError = (err) =>
err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message

export { getError }