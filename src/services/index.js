import axios from 'axios';

import { SERVER_URL } from '../utils/config';


// export const publicRequest = axios.create({
//   baseURL: SERVER_URL
// });


const user =
  localStorage.getItem("persist:root") ?.user &&
    JSON.parse(localStorage.getItem("persist:root")) ?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser && currentUser.accessToken;

const api = axios.create({ baseURL: SERVER_URL });
// const api = axios.create({ baseURL: `http://localhost:8000/api` });

api.defaults.headers.common['Content-Type'] = 'application/json';

export const defaultHeaders = {
  Authorization: TOKEN && `Bearer ${TOKEN}`
};

api.interceptors.request.use(request => {
  console.log("request", request.url)
  if (request.url === "/auth/login" || request.url === "/auth/register") {
    defaultHeaders.Authorization = {}
  } else {
    if (!request.headers.Authorization) {
      const jwt = localStorage.getItem('jwt_token');
      request.headers.Authorization = jwt && `Bearer ${jwt}`;
      defaultHeaders.Authorization = jwt && `Bearer ${jwt}`;
    }
  }
  return request;
});

api.interceptors.response.use(response => {
  console.log('Response', response);
  if (response.data.statusCode < 200 || response.data.statusCode >= 300) throw new Error(response.data.message);
  return response;
});

const http = {
  get: (url, config) =>
    api.get(url, {
      headers: {
        ...defaultHeaders
      },
      ...config
    }),
  post: (url, body, config) =>
    api.post(url, body, {
      headers: {
        ...defaultHeaders
      },
      ...config
    }),
  put: (url, body, config) =>
    api.put(url, body, {
      headers: {
        ...defaultHeaders
      },
      ...config
    }),
  delete: (url, body, config) =>
    api.delete(url, {
      headers: {
        ...defaultHeaders
      },
      ...config,
      data: body
    })
};

export default http;
