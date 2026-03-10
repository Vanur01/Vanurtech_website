"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  BookOpen,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import CTASection from "@/components/CTASection";
import { useParams } from "next/navigation";
import { blogApi, Blog } from "@/api";
import BlogContent from "@/components/Blog/BlogContent"; // ← NEW IMPORT

/* ─────────────────────────────────────────
   Recent-Activity sidebar data shape
───────────────────────────────────────── */
interface RecentActivity {
  id: string;
  title: string;
  slug: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  trending: boolean;
}

/* ─────────────────────────────────────────
   Recent Activity Sidebar
───────────────────────────────────────── */
const RecentActivitySidebar = ({
  currentSlug,
}: {
  currentSlug: string;
}) => {
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await blogApi.getAllBlogs({ page: 1, limit: 10 });

        if (res.success && res.result?.blogs?.length > 0) {
          setActivities(
            res.result.blogs.map((b: Blog) => ({
              id: b._id,
              title: b.title,
              slug: b.slug,
              category:
                typeof b.category === "string"
                  ? b.category
                  : (b.category as any)?.name || "General",
              readingTime: b.readingTime || 3,
              publishedAt: b.publishedAt || b.createdAt,
              trending: false,
            }))
          );
        } else {
          setFetchError("No blogs found");
        }
      } catch (err: any) {
        console.error("RecentActivity fetch error:", err);
        setFetchError(err?.message || "Failed to load recent blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchRecent();
  }, []);

  const timeAgo = (dateStr: string) => {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 7 * 86400) return `${Math.floor(diff / 86400)}d ago`;
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatPublishedDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }) + " · " + d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <aside className="w-full">
      <div className="sticky top-24 space-y-3">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
          </span>
          <h2
            className="text-[13px] font-semibold tracking-[0.18em] uppercase text-purple-300"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Recent Activity
          </h2>
        </div>

        {/* Activity list */}
        <div className="space-y-[6px]">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-[78px] rounded-xl bg-purple-900/20 animate-pulse" />
            ))
          ) : fetchError ? (
            <div className="text-[11px] text-red-400 bg-red-900/20 border border-red-800/40 rounded-xl p-3">
              ⚠ {fetchError}
            </div>
          ) : activities.filter((a) => a.slug !== currentSlug).length === 0 ? (
            <div className="text-[11px] text-gray-500 text-center py-4">No recent blogs found.</div>
          ) : (
            activities
              .filter((a) => a.slug !== currentSlug)
              .slice(0, 10)
              .map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.35 }}
                >
                  <Link href={`/blog/${item.slug}`}>
                    <div
                      className="
                        group relative flex items-start gap-3 p-3 rounded-xl
                        bg-[#120020]/60 border border-purple-900/30
                        hover:border-purple-500/50 hover:bg-purple-900/20
                        transition-all duration-200 cursor-pointer
                      "
                    >
                      <span
                        className="
                          absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full
                          bg-purple-600/40 group-hover:bg-purple-400
                          transition-colors duration-200
                        "
                      />
                      <span
                        className="shrink-0 text-[11px] font-bold text-purple-600/60 group-hover:text-purple-400 mt-0.5 w-4 text-center transition-colors"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-800/50 text-purple-300 font-medium tracking-wide">
                            {item.category}
                          </span>
                          {item.trending && (
                            <span className="flex items-center gap-0.5 text-[10px] text-orange-400 font-medium">
                              <Flame size={9} /> Hot
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] text-gray-200 font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5 text-[11px] text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock size={10} /> {item.readingTime}m read
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-[10px] text-purple-500/70">
                          <Calendar size={9} />
                          <span>{formatPublishedDate(item.publishedAt)}</span>
                          <span className="ml-auto text-gray-600">{timeAgo(item.publishedAt)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
          )}
        </div>

        {/* Footer CTA */}
        <Link
          href="/blog"
          className="
            mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
            border border-purple-700/40 text-purple-400 text-[12px] font-semibold
            tracking-wide hover:bg-purple-900/30 hover:border-purple-500
            transition-all duration-200
          "
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <BookOpen size={13} /> View All Posts
        </Link>
      </div>
    </aside>
  );
};

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
const BlogDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await blogApi.getBlogBySlug(slug);
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
  }, [slug]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0012]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" />
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

      {/* ── HERO ── */}
      <div className="relative w-full overflow-hidden bg-[#0A0012]">
        <div className="absolute inset-0 pointer-events-none">
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

        <div className="relative top-20 z-10 max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* LEFT: blog meta */}
            <div className="flex-1 min-w-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-purple-400 mb-8"
              >
                <ArrowLeft size={20} /> Back to Blog
              </Link>

              <div className="block">
                <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm">
                  {typeof post.category === "string"
                    ? post.category
                    : post.category?.name || "Uncategorized"}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-white mt-6 mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-400 mb-8 flex-wrap">
                <div>
                  <div className="text-white font-medium">
                    {post.author?.name || "Unknown Author"}
                  </div>
                  <div className="text-sm">{post.author?.email || "No Email"}</div>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {post.readingTime} min read
                </span>
              </div>

              <div className="flex gap-2 flex-wrap">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 rounded-md bg-purple-900/30 text-purple-400 text-sm"
                  >
                    <Tag size={14} /> {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* RIGHT: sidebar */}
            <div className="w-full lg:w-[340px] shrink-0">
              <RecentActivitySidebar currentSlug={slug} />
            </div>

          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="flex-1 min-w-0 py-10">
            {/* ↓ ONLY CHANGE: replaced dangerouslySetInnerHTML div with BlogContent */}
            <BlogContent content={post.content} slug={post.slug} />
          </article>
          <div className="hidden lg:block w-[340px] shrink-0" />
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default BlogDetailPage;