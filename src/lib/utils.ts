import { Metadata } from "next";

export function absoluteUrl(path: String) {
  if (typeof window !== "undefined") return path;
  return `http://www.7grim.com/${path}`;
}
export function constructMetaData({
  title = "7Grim | Home",
  description = "Your New Financial Hub!",
  image = "/android-chrome-512x512.png",
  icons = "/android-chrome-512x512.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: absoluteUrl("/") as string,
      type: "website",
      images: [
        {
          url: image,
          width: 1920,
          height: 1080,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@parstroy",
    },
    icons,
    metadataBase: new URL("https://7grim.com"),
    viewport: "width=device-width, initial-scale=1",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
