// const BASE_URL = "https://bootcamp-adviters.herokuapp.com";
// export const fetchCustom = (url , callback , option ) => {

//   const {headers , ...rest } = option;
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//       ...headers
//     },
//     ...rest
//   };
//   fetch(`${BASE_URL}${url}`,options )
//     .then((response) => response.json())
//     .then(callback)
//     .catch((err) => console.error(err));
// };
import axios from "axios";
import camelcaseKeys from "camelcase-keys";
const httpClient = axios.create({
  baseURL: "https://bootcamp-adviters.herokuapp.com",
});
export const Method = {
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  POST: "POST",
  DELETE: "DELETE",
};
export const fetchContent = async (url, config = {}) => {
  console.log(config);
  try {
    const { headers: headersOptions } = config;
    const token = localStorage.getItem("Token");
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...headersOptions,
        }
      : {
          "Content-Type": "application/json",
          ...headersOptions,
        };

    const { body, ...options } = config;
    const source = axios.CancelToken.source();
    const request = {
      cancelToken: source.token,
      method: Method.GET,
      headers,
      ...options,
      url,
    };
    if (body) {
      request.data = body;
    }
    const promise = httpClient.request(request);
    promise.cancel = () => source.cancel("cancelled");
    const { data } = await promise;
    if (data?.error) {
      throw new Error(data.error);
    }
    return camelcaseKeys(data, { deep: true });
  } catch (error) {
    console.info(error);
    throw error;
  }
};
