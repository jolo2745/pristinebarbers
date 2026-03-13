import { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/prices`,
    },
    {
      url: `${SITE_URL}/info`,
    },
    {
      url: `${SITE_URL}/info/story`,
    },
    {
      url: `${SITE_URL}/info/blog`,
    },
    {
      url: `${SITE_URL}/info/tips`,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
    },
  ];
}
