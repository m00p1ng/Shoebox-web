import axios from 'axios';

const ROOT_URL = 'http://localhost/api';

export const FETCH_ALL_PRODUCT = 'FETCH_ALL_PRODUCT';

export function fetchAllProduct() {
  const url = `${ROOT_URL}/product/all`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_ALL_PRODUCT,
    payload: request,
  };
}
