"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  nonBlur?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export const aspectRatio =
  "aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden bg-gray-200";

const AppImage = forwardRef<HTMLImageElement, AppImageProps>(
  (
    {
      title,
      alt,
      src,
      objectFit = "contain",
      className,
      nonBlur,
      onLoad,
      ...props
    },
    ref,
  ) => {
    const [isLoading, setLoading] = useState(false);

    // const handleCombinedLoad = (
    //   event: React.SyntheticEvent<HTMLImageElement>,
    // ) => {
    //   setLoading(false);
    //   if (onLoad) onLoad(event);
    // };

    const baseClass = cn(
      "duration-700 ease-in-out group-hover:opacity-75",
      isLoading && !nonBlur
        ? "scale-110 blur-2xl grayscale"
        : "scale-100 blur-0 grayscale-0",
      className,
      `object-${objectFit}`,
    );

    return (
      <img
        ref={ref}
        alt={alt}
        src={src as string}
        title={title}
        // onLoad={handleCombinedLoad}
        className={baseClass}
        {...props}
      />
    );
  },
);

AppImage.displayName = "AppImage";

export default AppImage;

// // image component with lazy loading implemented
// "use client";

// import React from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// // import { useTheme } from "next-themes";

// interface AppImageProps {
//   title: string;
//   alt: string;
//   src: string;
//   objectFit?: "cover" | "contain" | undefined;
//   fill?: boolean;
//   width?: number;
//   height?: number;
//   className?: string;
//   nonBlur?: boolean
//   // props: any
// }

// export const aspectRatio = `aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden bg-gray-200`;

// const AppImage: React.FC<AppImageProps> = ({
//   title,
//   alt,
//   src,
//   objectFit,
//   fill,
//   className,
//   width,
//   height,
//   nonBlur
//   // ...props
// }) => {
//   const [isLoading, setLoading] = React.useState<boolean>(true);
//   // const {theme} = useTheme();

//   return (
//     // <div className={cn(`)}>
//     <>
//     {fill ? (
//         <Image
//           alt={alt}
//           src={src}
//           title={title}
//           fill
//           className={cn(
//             "duration-700 ease-in-out group-hover:opacity-75",
//             isLoading && !nonBlur
//               ? "scale-110 blur-2xl grayscale"
//               : "scale-100 blur-0 grayscale-0",
//             className || "",
//             `object-${objectFit || "contain"}`,
//           )}
//           onLoad={() => setLoading(false)}
//           // {...props}
//         />
//       ) : (
//         <Image
//           alt={alt}
//           src={src}
//           title={title}
//           width={width}
//           height={height}
//           className={cn(
//             "duration-700 ease-in-out group-hover:opacity-75",
//             isLoading && !nonBlur
//               ? "scale-110 blur-2xl grayscale"
//               : "scale-100 blur-0 grayscale-0",
//               className || "",
//             `object-${objectFit || "contain"}`,
//           )}
//           onLoad={() => setLoading(false)}
//           // {...props}
//         />
//       )}
//     {/* </div> */}
//       </>
//   );
// };

// export default AppImage;
