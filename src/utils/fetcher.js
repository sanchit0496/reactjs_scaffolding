// src/utils/fetcher.js
const fetcher = (url) => fetch(url).then((res) => res.json())
export default fetcher
