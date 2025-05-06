import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://fanrong-studio-portfolio.vercel.app/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://fanrong-studio-portfolio.vercel.app/toekoe",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://fanrong-studio-portfolio.vercel.app/creabiz",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://fanrong-studio-portfolio.vercel.app/gerbang-naga",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://fanrong-studio-portfolio.vercel.app/tais-timor",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://fanrong-studio-portfolio.vercel.app/grand-batang-city",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://fanrong-studio-portfolio.vercel.app/hooray",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
