import axios from 'axios'

export const useRequest = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})
