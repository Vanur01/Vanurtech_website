import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: 'https://vanurtech-backend-admin-2-8vsl.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Store active controllers (optional: for global cancel)
const controllers = new Map<string, AbortController>();

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const customConfig = config as InternalAxiosRequestConfig & { requestId?: string };

    // Create controller for each request
    const controller = new AbortController();
    config.signal = controller.signal;

    // Optional: attach unique requestId to track/cancel later
    if (customConfig.requestId) {
      controllers.set(customConfig.requestId, controller);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (cleanup controllers)
axiosInstance.interceptors.response.use(
  (response) => {
    const requestId = (response.config as any).requestId;
    if (requestId) controllers.delete(requestId);
    return response;
  },
  (error) => {
    const requestId = error.config?.requestId;
    if (requestId) controllers.delete(requestId);
    return Promise.reject(error);
  }
);

// Function to cancel specific request
export const cancelRequest = (requestId: string) => {
  const controller = controllers.get(requestId);
  if (controller) {
    controller.abort();
    controllers.delete(requestId);
  }
};

// OPTIONAL: Cancel all requests
export const cancelAllRequests = () => {
  controllers.forEach((controller) => controller.abort());
  controllers.clear();
};

// Your sanitize function (unchanged)
const sanitizeStrings = (obj: any): any => {
  if (typeof obj === 'string') {
    return obj.replace(/—/g, '').replace(/–/g, '');
  } else if (Array.isArray(obj)) {
    return obj.map(sanitizeStrings);
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: any = {};
    for (const key in obj) {
      newObj[key] = sanitizeStrings(obj[key]);
    }
    return newObj;
  }
  return obj;
};

// Response sanitizer
axiosInstance.interceptors.response.use(
  (response) => {
    response.data = sanitizeStrings(response.data);
    return response;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;