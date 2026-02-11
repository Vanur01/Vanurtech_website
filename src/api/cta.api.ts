import axiosInstance from './axios.config';

// CTA form data interface
export interface CTAFormData {
  mobile: string;
  message: string;
}

// CTA response interface
export interface CTAResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: {
    mobile: string;
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
 * Submit CTA form
 */
export const submitCTA = async (data: CTAFormData): Promise<CTAResponse> => {
  try {
    const response = await axiosInstance.post<CTAResponse>('/cta/create', data);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to submit CTA request',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

const ctaApi = {
  submitCTA,
};

export default ctaApi;
