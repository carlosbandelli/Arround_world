import axios from "axios";

const apiUrl = process.env.REACT_APP_BASE_URL
export const getCountryData = async (name:string) => {
  return axios.get(`${apiUrl}translation/${name}`);
};
