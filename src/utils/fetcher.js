// src/utils/fetcher.js
import axiosInstance from './axiosInstance'

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data)

export default fetcher
