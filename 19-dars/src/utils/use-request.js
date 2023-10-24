import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://bookztron-server.vercel.app/api',
  headers: {
    'X-Access-Token': localStorage.getItem('access_token'),
  },
})
