import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://quizwarriors.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://quizwarriors.com/arena/staffing",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}