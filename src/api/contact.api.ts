import axiosInstance from './axios.config';

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  services: string[];
  message: string;
}

// Contact response interface
export interface ContactResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: {
    name: string;
    email: string;
    phone:string;
    company?: string;
    services: string[];
    message: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

// API error interface
export interface ApiError {
  success: boolean;
  message: string;
  statusCode?: number;
}

/**
 * Submit contact form
 */
export const submitContact = async (data: ContactFormData): Promise<ContactResponse> => {
  try {
    const response = await axiosInstance.post<ContactResponse>('/user/contact', data);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to submit contact form',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

const contactApi = {
  submitContact,
};

export default contactApi;
