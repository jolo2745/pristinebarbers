import { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: [
                    "OAI-SearchBot",
                    "ChatGPT-User",
                    "Claude-SearchBot",
                    "Claude-User",
                    "PerplexityBot",
                    "Perplexity-User",
                    "DuckAssistBot",
                ],
                allow: "/",
            },
            {
                userAgent: [
                    "GPTBot",
                    "ClaudeBot",
                    "Google-Extended",
                    "Applebot-Extended",
                    "CCBot",
                ],
                disallow: "/",
            },
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
