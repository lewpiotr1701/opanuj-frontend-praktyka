import axios from 'axios';
import { fetchProxy } from './httpClient';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: new Date() };
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const {config: {url, metadata}} = response;
  
  const endTime = new Date();
  const requestTime = endTime - metadata.startTime;

  console.log(`Request to ${url} completed in ${requestTime}ms`);

  return response;
});

const { data: { articles } } = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;

// Using fetch-proxy

console.log('axios-interceptor with fetch-proxy');

const res = await fetchProxy('/api/data/articles?timeout=3000');
const data = await res.json();

document.querySelector('#data').innerHTML = data.articles[0].content;