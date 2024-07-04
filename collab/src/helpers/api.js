import axios from "axios";

export default class ApiCall {
    static async getMethod(url) {
      const response = await axios.get(url);
      if (response.status) {
        return response.data;
      }
  
      return null;
    }
  
    static async postMethod(url, data, options = {}) {
          const response = await axios.post(url, data, options);
          if (response.status) {
            return response.data;
          }
      
          return null;
      }
  }

const getError = (err) => {
    if (err.response && err.response.data && err.response.data.detail) {
      return err.response.data.detail;
    }
    return err.message;
}
  

export { getError }