import axios from "axios";
export const getAddcate =()=> {
    const config = {
        method: "post",
        url: "https://api.hexarz.com/v1/api/manage/blogadmin/blog/catagories",
        headers: { api_key: window.localStorage.getItem('token') },
        data: {
          name: postname,
          logo: catepost,
        }
      };

    return new Promise((resolve, reject) => {
    axios(config)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}