const BASE_URL = "https://bootcamp-adviters.herokuapp.com";
export const fetchCustom = (url , callback , option ) => {

  const {headers , ...rest } = option;
  console.log(rest);
  const options = {
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    ...rest
  };
  fetch(`${BASE_URL}${url}`,options )
    .then((response) => response.json())
    .then(callback)
    .catch((err) => console.error(err));
};

