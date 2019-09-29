const {
  NODE_ENV,
  REACT_APP_API_BASE_URL__DEV,
  REACT_APP_API_BASE_URL__PROD
} = process.env;

export const API_ENDPOINT =
  NODE_ENV === "development"
    ? REACT_APP_API_BASE_URL__DEV
    : REACT_APP_API_BASE_URL__PROD;
