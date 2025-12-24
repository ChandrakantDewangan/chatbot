import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { APIResponseFormat, BotPayload, Session } from '../Interfaces/Interfaces';
import { toast } from 'react-toastify';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage = error.response?.data?.message || 'An error occurred';
    toast.error(errorMessage);
    return Promise.reject(error);
  }
);

export const sendPrompt = async (payload: BotPayload): Promise<APIResponseFormat> => {
  try {
    const response: AxiosResponse = await apiClient.post('/chat', payload);
    return {
      status: true,
      data: response.data,
      error: null,
    };
  } catch (error: any) {
    return {
      status: false,
      data: null,
      error: error.response?.data || error.message,
    };
  }
};

export const getChatHistory = async (userId: string): Promise<APIResponseFormat> => {
  try {
    const response: AxiosResponse = await apiClient.get(`/chat/history/${userId}`);
    return {
      status: true,
      data: response.data,
      error: null,
    };
  } catch (error: any) {
    return {
      status: false,
      data: null,
      error: error.response?.data || error.message,
    };
  }
};

export const getSessionDetails = async (sessionId: string): Promise<APIResponseFormat> => {
  try {
    const response: AxiosResponse = await apiClient.get(`/chat/session/${sessionId}`);
    return {
      status: true,
      data: response.data,
      error: null,
    };
  } catch (error: any) {
    return {
      status: false,
      data: null,
      error: error.response?.data || error.message,
    };
  }
};

export const createNewSession = async (userId: string, model: string): Promise<APIResponseFormat> => {
  try {
    const response: AxiosResponse = await apiClient.post('/chat/session', {
      user_id: userId,
      model,
    });
    return {
      status: true,
      data: response.data,
      error: null,
    };
  } catch (error: any) {
    return {
      status: false,
      data: null,
      error: error.response?.data || error.message,
    };
  }
};

export default apiClient;
