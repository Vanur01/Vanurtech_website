import axios from './axios.config';

export interface Category {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: Category[]; // Backend returns array directly, not nested in categories
}

export interface GetCategoriesParams {
  page?: number;
  limit?: number;
}

const categoryApi = {
  // Get all categories
  getAllCategories: async (params?: GetCategoriesParams): Promise<CategoriesResponse> => {
    const { page = 1, limit = 100 } = params || {};
    const response = await axios.get('/category/getAll', {
      params: { page, limit }
    });
    return response.data;
  },
};

export default categoryApi;
