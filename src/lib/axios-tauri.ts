import axiosAdapter from 'axios-tauri-http-adapter';
import axios from 'axios';

export const axiosClient = axios.create({
  adapter: axiosAdapter(),
});
