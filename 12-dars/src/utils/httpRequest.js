import axios from 'axios'
export const useRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})
