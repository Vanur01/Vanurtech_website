import axiosInstance from './axios.config';

// Testimonial interface
export interface Testimonial {
  _id: string;
  name: string;
  position: string;
  company: string;
  description: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TestimonialsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: Testimonial[];
}

// API error interface
export interface ApiError {
  success: boolean;
  message: string;
  statusCode?: number;
}

/**
 * Get all testimonials
 */
export const getAllTestimonials = async (): Promise<TestimonialsResponse> => {
  try {
    const response = await axiosInstance.get<TestimonialsResponse>('/testimonial/getAll');
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch testimonials',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

const testimonialApi = {
  getAllTestimonials,
};

export default testimonialApi;
