"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { CometCard } from '@/components/ui/comet-card';
import { blogApi, Blog, categoryApi, Category } from '@/api';

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch all data once
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        
        // Fetch categories
        const categoriesResponse = await categoryApi.getAllCategories({ limit: 100 });
        if (categoriesResponse.success && categoriesResponse.result && Array.isArray(categoriesResponse.result)) {
          const validCategories = categoriesResponse.result.filter(
            (cat): cat is Category => typeof cat === 'object' && cat !== null && 'name' in cat
          );
          setCategories(validCategories);
        }

        // Fetch all blogs
        const blogsResponse = await blogApi.getAllBlogs({
          page: 1,
          limit: 1000, // Fetch all blogs
        });

        if (blogsResponse.success) {
          setAllBlogs(blogsResponse.result.blogs);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Frontend filtering
  const filteredBlogs = selectedCategory === 'All' 
    ? allBlogs 
    : allBlogs.filter(blog => {
        const categoryId = typeof blog.category === 'string' 
          ? blog.category 
          : blog.category?._id;
        return categoryId === selectedCategory;
      });

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const blogs = filteredBlogs.slice(startIndex, endIndex);

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-900/20 text-gray-400 hover:bg-purple-900/40 hover:text-white'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => {
                  setSelectedCategory(category._id);
                  setCurrentPage(1);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category._id
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/20 text-gray-400 hover:bg-purple-900/40 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!isLoading && !error && (
          <>
            {blogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No blog posts found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogs
                .map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CometCard className="h-full">
                    <Link href={`/blog/${blog.slug}`}>

                        <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 overflow-hidden hover:border-purple-600 transition-all duration-500 group cursor-pointer">
                          {/* Image */}
                          <div className="relative h-48 sm:h-56 overflow-hidden">
                            <img 
                              src={blog.coverImage} 
                              alt={blog.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-[#0A0012]/20"></div>
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-medium">
                                {typeof blog.category === 'string' ? blog.category : blog.category?.name || 'Uncategorized'}
                              </span>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-[#0A0012] via-transparent to-transparent"></div>
                          </div>

                          {/* Content */}
                          <div className="p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                              {blog.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                              {blog.content.substring(0, 100)}...
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {blog.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-purple-900/30 text-purple-400 text-xs">
                                  <Tag size={12} />
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm border-t border-purple-900/30 pt-4">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  {formatDate(blog.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock size={14} />
                                  {blog.readingTime} min read
                                </span>
                              </div>
                              <ArrowRight size={16} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CometCard>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-6 py-2 rounded-full bg-purple-900/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-400">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 rounded-full bg-purple-900/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
