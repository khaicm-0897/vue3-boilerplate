import { getAccessToken } from '@/utils';
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const handleError = (error: any) => {
  if (error?.response) {
    return error.response?.message;
  }

  return {
    error: true,
    message: 'Something went wrong',
  };
};

export const Get = async <T = any>(
  url: string,
  queryParams?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, { ...config, params: queryParams });

    return response?.data;
  } catch (error: any) {
    handleError(error);

    throw error;
  }
};

export const Post = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    if (data) {
      data instanceof FormData ? data : (data = JSON.stringify(data));
    }
    const response = await axiosInstance.post<T>(url, data, config);

    return response?.data;
  } catch (error: any) {
    handleError(error);

    throw error;
  }
};

export const Put = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    if (data) {
      data instanceof FormData ? data : (data = JSON.stringify(data));
    }
    const response = await axiosInstance.put<T>(url, data, config);

    return response?.data;
  } catch (error: any) {
    handleError(error);

    throw error;
  }
};

export const Delete = async <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axiosInstance.delete<T>(url, config);

    return response?.data;
  } catch (error: any) {
    handleError(error);

    throw error;
  }
};
