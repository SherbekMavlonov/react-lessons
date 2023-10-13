import axios from 'axios'

export const useHttp = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})
