"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import CTASection from "@/components/CTASection";
import { useParams } from "next/navigation";
import { blogApi, Blog } from "@/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string; // ✅ CHANGED (id → slug)

  const [post, setPost] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ FETCH BLOG BY SLUG
  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await blogApi.getBlogBySlug(slug); // ✅ CHANGED

        if (response.success) {
          setPost(response.result);
        } else {
          setError("Blog not found");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch blog post");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]); // ✅ CHANGED

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0012]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0012]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {error || "Blog Post Not Found"}
          </h1>
          <Link href="/blog" className="text-purple-500 hover:text-purple-400">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0011]">
      {/* Hero Section */}
      <div className="relative w-full py-10 overflow-hidden bg-[#0A0012]">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-400 mb-8"
          >
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm">
            {typeof post.category === "string"
              ? post.category
              : post.category?.name || "Uncategorized"}
          </span>

          <h1 className="text-4xl font-bold text-white mt-6 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <div>
              <div className="text-white font-medium">
                {post.author?.name || "Unknown Author"}
              </div>
              <div className="text-sm">
                {post.author?.email || "No Email"}
              </div>
            </div>

            <span className="flex items-center gap-1">
              <Calendar size={16} /> {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {post.readingTime} min read
            </span>
          </div>

          <div className="flex gap-2 mb-8">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 rounded-md bg-purple-900/30 text-purple-400 text-sm"
              >
                <Tag size={14} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default BlogDetailPage;
