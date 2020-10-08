import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://react-my-burger-fc47a.firebaseio.com',
})

export default axiosInstance
