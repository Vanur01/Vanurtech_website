import axiosInstance from './axios.config';

// Project interfaces
export interface Category {
  _id: string;
  name: string;
  description?: string;
  slug?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string | Category; // Can be string (ID) or populated Category object
  tags: string[];
  website?: string; // Optional website URL
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProjectsPagination {
  currentPage: number;
  totalPages: number;
  totalProjects: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ProjectsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: {
    projects: Project[];
    pagination: ProjectsPagination;
  };
}

export interface ProjectResponse {
  success: boolean;
  statusCode: number;
  message: string;
  result: Project;
}

export interface GetProjectsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

// API error interface
export interface ApiError {
  success: boolean;
  message: string;
  statusCode?: number;
}

/**
 * Get all projects with optional filters
 */
export const getAllProjects = async (params: GetProjectsParams = {}): Promise<ProjectsResponse> => {
  try {
    const { page = 1, limit = 10, search, category } = params;
    
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (search) {
      queryParams.append('search', search);
    }

    if (category && category !== 'All') {
      queryParams.append('category', category);
    }

    const response = await axiosInstance.get<ProjectsResponse>(
      `/project/getAll?${queryParams.toString()}`
    );
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch projects',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

/**
 * Get project by ID
 */
export const getProjectById = async (id: string): Promise<ProjectResponse> => {
  try {
    const response = await axiosInstance.get<ProjectResponse>(`/project/get/${id}`);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch project',
      statusCode: error.response?.status,
    } as ApiError;
  }
};

const projectApi = {
  getAllProjects,
  getProjectById,
};

export default projectApi;
