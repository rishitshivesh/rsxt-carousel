import { css, keyframes } from "@emotion/css";

const sineWaveSpacing = (index: number, totalVisibleImages: number) => {
  const centerIndex = totalVisibleImages / 2;
  const distanceFromCenter = Math.abs(centerIndex - index);
  const spacingFactor = Math.sin(
    (Math.PI * distanceFromCenter) / totalVisibleImages
  );
  return spacingFactor * 50;
};

export const containerStyles = (isOverflowing: boolean) => css`
  display: flex;
  flex-wrap: nowrap;
  height: 300px;
  justify-content: ${isOverflowing ? "flex-start" : "space-between"};
  align-items: center;
  overflow-x: ${isOverflowing ? "scroll" : "hidden"};
  padding: 100px;
  perspective: 1000px; /* For 3D effect */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const imageContainerStyles = (
  index: number,
  isVisible: boolean,
  size: number,
  isHovered: boolean
) => css`
  position: relative;
  width: 30px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  transform-style: preserve-3d;

  transform: perspective(400px) rotateY(45deg)
    ${isVisible
      ? `translateX(${sineWaveSpacing(index, size)}px)`
      : "translateX(10px)"};

  ${isHovered &&
  css`
    animation: ${hoverLiftRotate(index, size)} 0.6s forwards ease-in-out; /* Play hover animation only if hovered */
  `}

  .padding {
    padding: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    background: #ffffff30;
    border-radius: 12px;
    transform-origin: center;
    transition: transform 0.4s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;

    background-image: linear-gradient(
      100deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 50%
    );

    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.2),
      0px 10px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const imageStyles = (imageSize: number, isVisible: boolean) => css`
  width: ${imageSize}px;
  height: ${imageSize * 0.7}px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${isVisible
    ? "0px 5px 10px rgba(0, 0, 0, 0.15), -3px 5px 5px rgba(0, 0, 0, 0.05)"
    : "none"};
`;

export const hoverLiftRotate = (index: number, size: number) => keyframes`
  0% {
    transform: perspective(400px) rotateY(45deg) translateX(${sineWaveSpacing(
      index,
      size
    )}px); /* Revert to original state */
    z-index: 0; /* Reset z-index */
  }
  50% {
    transform: perspective(400px) translateY(-40px) rotateY(45deg) translateX(${sineWaveSpacing(
      index,
      size
    )}px); /* Revert to original state */
    z-index: 1; /* Reset z-index */
  }
  100% {
    transform: translateY(0px) rotateX(0deg) scale(1.5);
    z-index: 10; /* Highest z-index */
  }
`;
