import axios from 'axios';

const API_URL = 'http://localhost/api';

export function fetchAllProduct() {
  const url = `${API_URL}/product`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_ALL_PRODUCT,
    payload: request,
  };
}
