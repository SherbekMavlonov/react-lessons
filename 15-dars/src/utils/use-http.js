import axios from 'axios'

export const useHttp = axios.create({
  baseURL: 'http://localhost:3000/',
})
