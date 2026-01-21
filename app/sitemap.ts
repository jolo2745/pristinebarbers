import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pristinebarbers.co.uk",
      lastModified: new Date(),
    },
    {
      url: "https://pristinebarbers.co.uk/prices",
      lastModified: new Date(),
    },
    {
      url: "https://pristinebarbers.co.uk/info",
      lastModified: new Date(),
    },
    {
      url: "https://pristinebarbers.co.uk/info/story",
      lastModified: new Date(),
    },
    {
      url: "https://pristinebarbers.co.uk/info/blog",
      lastModified: new Date(),
    },
    {
      url: "https://pristinebarbers.co.uk/info/tips",
      lastModified: new Date(),
    },
  ];
}
