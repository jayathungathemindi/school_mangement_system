import axios from "axios";
export default {
  getUserDetails: (params) => {
    // localStorage.setItem("token", res.data);
    return new Promise(async (resolve, reject) => {
      try {
        const url = "http://localhost:3000/user/login";
        const data = await axios.post(url, params);

        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  },
};
