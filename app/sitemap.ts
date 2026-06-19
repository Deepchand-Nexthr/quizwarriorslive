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
      url: "https://quizwarriors.com/q/ramayan-001",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://quizwarriors.com/q/staffing-001",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://quizwarriors.com/q/salesforceadmin-001",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://quizwarriors.com/q/pmp-001",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://quizwarriors.com/q/ba-001",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://quizwarriors.com/q/cybersecurity-001",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://quizwarriors.com/q/developer-001",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
  url: "https://quizwarriors.com/privacy",
},
{
  url: "https://quizwarriors.com/contact",
},
{
  url: "https://quizwarriors.com/about",
},
{
  url: "https://quizwarriors.com/terms",
},
  ];
}