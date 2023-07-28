import axios from "axios";

export const getData = (url) => {
  return axios.get(url);
};

export const postData = (url, reqBody) => {
  return axios({
    url: url,
    method: "post",
    data: reqBody,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const putData = (url, id, data) => {
  return axios({
    url: `${url}/${id}`,
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
};

export const postAddressToAPI = (url, addressData) => {
  return axios.post(url, addressData);
};

export const getUserAddressesFromAPI = (url) => {
  return axios.get(url);
};
