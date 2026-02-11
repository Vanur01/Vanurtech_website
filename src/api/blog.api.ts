import axiosInstance from './axios.config';

// Blog interfaces
export interface Category {
  _id: string;
  name: string;
  description?: string;
  slug?: string;
}

export interface BlogAuthor {
  _id: string;
  name: string;
  email: string;
}

export interface Blog {
  _id: string;
  title: string;
   slug: string;
  content: string;
  category: string | Category; // Can be string (ID) or populated Category object
  tags: string[];
  coverImage: string;
  readingTime: number;
  status: string;
  author: BlogAuthor;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
/**
 * Get blog by slug
 */
export const getBlogBySlug = async (slug: string): Promise<BlogResponse> => {
  try {
    const response = await axiosInstance.get<BlogResponse>(
      `/blog/slug/${slug}`
    );
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch blog',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

export interface BlogsPagination {
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: {
    pagination: BlogsPagination;
    blogs: Blog[];
  };
}

export interface BlogResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: Blog;
}

export interface GetBlogsParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

// API error interface
export interface ApiError {
  success: boolean;
  message: string;
  statusCode?: number;
}

/**
 * Get all blogs with optional filters
 */
export const getAllBlogs = async (params: GetBlogsParams = {}): Promise<BlogsResponse> => {
  try {
    const { page = 1, limit = 10, category, search } = params;
    
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (category && category !== 'All') {
      queryParams.append('category', category);
    }

    if (search) {
      queryParams.append('search', search);
    }

    const response = await axiosInstance.get<BlogsResponse>(
      `/blog/getAll?${queryParams.toString()}`
    );
    console.log(response.data)
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch blogs',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

/**
 * Get blog by ID
 */
export const getBlogById = async (id: string): Promise<BlogResponse> => {
  try {
    const response = await axiosInstance.get<BlogResponse>(`/blog/get/${id}`);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch blog',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

const blogApi = {
  getAllBlogs,
  getBlogById,
  getBlogBySlug
};
export default blogApi;

