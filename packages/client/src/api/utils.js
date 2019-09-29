import qs from "qs";

export const makeRequest = async ({
  url,
  apiRequestData,
  method = "GET",
  headers = {}
}) => {
  if (method === "GET" && apiRequestData) {
    url = `${url}?${qs.stringify(apiRequestData)}`;
  }

  const response = await fetch(url, {
    method,
    data: apiRequestData,
    headers
  });

  return await response.json();
};
