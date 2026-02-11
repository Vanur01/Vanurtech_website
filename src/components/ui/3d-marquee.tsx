"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split images into 4 columns
  const columnsCount = 4;
  const columns = Array.from({ length: columnsCount }, (_, i) =>
    images.filter((_, index) => index % columnsCount === i)
  );

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <div className="absolute inset-0 z-0 grid grid-cols-4 gap-4 p-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            <motion.div
              initial={{ y: columnIndex % 2 === 0 ? 0 : -1000 }}
              animate={{
                y: columnIndex % 2 === 0 ? -1000 : 0,
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                delay: 0,
              }}
              className="flex flex-col gap-4"
            >
              {/* Repeat images to create seamless loop */}
              {[...column, ...column].map((image, index) => (
                <div
                  key={index}
                  className="relative h-60 w-full overflow-hidden rounded-lg"
                  style={{
                    transform: "perspective(1000px) rotateX(0deg)",
                  }}
                >
                  <Image
                    src={image}
                    alt={`Marquee image ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
