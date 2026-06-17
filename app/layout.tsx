import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quizwarriors.com"),

  title: "QuizWarriors | Knowledge is War",

  description:
    "Play fun quizzes on US Staffing, Technology, Countries and more. Learn in 2 minutes.",

  openGraph: {
    title: "QuizWarriors | Knowledge is War",
    description:
      "Become a Warrior of Knowledge. Think critically. Question everything.",
    url: "https://quizwarriors.com",
    siteName: "QuizWarriors",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuizWarriors - Knowledge is War",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "QuizWarriors | Knowledge is War",
    description:
      "Become a Warrior of Knowledge. Think critically. Question everything.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};