import axios from 'axios';
import axiosTauriApiAdapter from 'axios-tauri-api-adapter';

export const client = axios.create({ adapter: axiosTauriApiAdapter });
