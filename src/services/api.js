import axios from 'axios';

export const key = '86979e976dbaa5b79b55a99e0515c0984245c06a';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
}
})
export default api;



//86979e976dbaa5b79b55a99e0515c0984245c06a