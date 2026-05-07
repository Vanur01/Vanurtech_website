"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { CometCard } from '@/components/ui/comet-card';
import { blogApi, Blog, categoryApi, Category } from '@/api';
import blogDataJSON from '@/data/blogData';

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Initialize states directly from hardcoded data
  const [allBlogs] = useState<Blog[]>(blogDataJSON.result.blogs as Blog[]);

  const [categories] = useState<Category[]>(() => {
    const uniqueCategoriesMap = new Map();
    blogDataJSON.result.blogs.forEach(blog => {
      if (blog.category && typeof blog.category === 'object') {
        uniqueCategoriesMap.set(blog.category._id, blog.category);
      }
    });
    return Array.from(uniqueCategoriesMap.values());
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // No longer need useEffect for hardcoded data loading
  useEffect(() => {
    // Keeping this for any future side effects if needed
  }, []);

  /* Commented out API fetching logic
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
  */

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

  const stripHtml = (html: string) =>
    html.replace(/<[^>]*>?/gm, '');

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-7xl mx-auto">
        {/* Category Filter - Hidden */}

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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

                          <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 overflow-hidden hover:border-purple-600 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 group cursor-pointer">
                            {/* Thumbnail */}
                            <div className="relative aspect-video overflow-hidden bg-[#0d0020]">
                              {/* Actual image — cover fill */}
                              <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                              />

                              {/* Dark vignette so text is always readable */}
                              <div className="absolute inset-0 bg-linear-to-t from-[#0A0012] via-[#0A0012]/40 to-transparent"></div>

                              {/* Subtle purple tint on hover */}
                              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-colors duration-500"></div>

                              {/* Category badge — top left */}
                              <div className="absolute top-3 left-3">
                                <span className="px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wide shadow-lg">
                                  {typeof blog.category === 'string' ? blog.category : blog.category?.name || 'Uncategorized'}
                                </span>
                              </div>

                              {/* Reading time badge — top right */}
                              <div className="absolute top-3 right-3">
                                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-gray-300 text-xs font-medium">
                                  <Clock size={11} />
                                  {blog.readingTime} min
                                </span>
                              </div>


                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5">
                              <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 leading-snug group-hover:text-purple-300 transition-colors duration-300">
                                {blog.title}
                              </h3>
                              <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
                                {stripHtml(blog.content).substring(0, 110)}...
                              </p>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {blog.tags.slice(0, 3).map((tag) => (
                                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-900/40 border border-purple-800/40 text-purple-400 text-xs">
                                    <Tag size={10} />
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              {/* Meta Info */}
                              <div className="flex items-center justify-between text-gray-500 text-xs border-t border-purple-900/30 pt-3">
                                <span className="flex items-center gap-1.5">
                                  <Calendar size={13} />
                                  {formatDate(blog.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1.5 text-purple-400 font-medium group-hover:gap-2.5 transition-all duration-300">
                                  Read more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
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
              <div className="flex justify-center items-center gap-2 sm:gap-4 mt-10 sm:mt-12 flex-wrap">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 sm:px-6 py-2 rounded-full bg-purple-900/20 text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-400 text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 sm:px-6 py-2 rounded-full bg-purple-900/20 text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
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
