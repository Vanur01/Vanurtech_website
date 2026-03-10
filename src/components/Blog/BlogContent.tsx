"use client";
import DOMPurify from "dompurify";
import React, { useEffect, useRef, useMemo } from "react";

interface BlogContentProps {
  content: string;
  slug: string;
}

const BlogContent = ({ content, slug }: BlogContentProps) => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  // 1. Extract <style> blocks and scope all CSS rules
  const { css, html } = useMemo(() => {
    const styleMatches = [...content.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
    const rawCss = styleMatches.map((m) => m[1]).join("\n");

    // Scope every CSS rule with #blog-{slug} to avoid leaking into the page
    const scopedCss = rawCss.replace(
      /([^\r\n,{}]+)(,(?=[^}]*{)|\s*\{)/g,
      (match, selector, suffix) => {
        if (selector.trim().startsWith("@")) return match;
        const scoped = selector
          .split(",")
          .map((s: string) => `#blog-${slug} ${s.trim()}`)
          .join(", ");
        return `${scoped}${suffix}`;
      }
    );

    // Remove <style> tags from HTML
    const html = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

    return { css: scopedCss, html };
  }, [content, slug]);

  // 2. Inject scoped CSS into <head> as a real <style> element
  useEffect(() => {
    if (!css) return;

    // Remove any previous style tag for this slug
    const existing = document.querySelector(`style[data-blog-slug="${slug}"]`);
    if (existing) existing.remove();

    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-blog-slug", slug);
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
    styleRef.current = styleEl;

    return () => {
      styleEl.remove();
    };
  }, [css, slug]);

  // 3. Sanitize HTML (style tags already extracted above)
  const sanitizedHtml = useMemo(
    () =>
      DOMPurify.sanitize(html, {
        ADD_ATTR: ["style", "class"],
        FORBID_TAGS: ["script"],
      }),
    [html]
  );

  return (
    <div
      id={`blog-${slug}`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default BlogContent;