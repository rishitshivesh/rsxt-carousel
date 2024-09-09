import React, { useState, useEffect, useRef } from "react";
import { cx } from "@emotion/css";
import { containerStyles, imageContainerStyles, imageStyles } from "./styles";

type ImageItem = {
  id: string;
  src: string;
  onClick: () => void;
};

type DynamicImageRowProps = {
  images: ImageItem[];
  parentWidth: number;
  className?: string;
};

const DynamicImageRow: React.FC<DynamicImageRowProps> = ({
  images,
  parentWidth,
  className,
}) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]); // Track which images are currently visible
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track hovered image
  const imageRefs = useRef<any>([]); // Store references to image containers

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...prev, index]);
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        root: null, // Use the viewport
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    imageRefs.current.forEach((ref: any) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref: any) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [images]);

  const isOverflowing = images.length > 5;
  const imageSize = parentWidth / 5 - 10; // Fixed image size

  const handleClick = (index: number) => {
    images[index].onClick();
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={cx(containerStyles(isOverflowing), className)}>
      {images.map((image, index) => (
        <div
          key={image.id}
          data-index={index}
          ref={(el: any) => (imageRefs.current[index] = el)} // Store the ref for each image
          className={cx(
            imageContainerStyles(
              index,
              visibleIndexes.includes(index),
              visibleIndexes.length,
              hoveredIndex === index // Apply hover styles only if this is the hovered element
            )
          )}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="padding">
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className={cx(
                imageStyles(imageSize, visibleIndexes.includes(index))
              )} // Apply styles if visible
              onClick={() => handleClick(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicImageRow;
