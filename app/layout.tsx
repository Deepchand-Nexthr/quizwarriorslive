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
    "Battle through knowledge with quizzes on US Staffing, Technology, Geography, Countries and more. Think critically. Question everything. Become a Warrior of Knowledge at QuizWarriors.",

  keywords: [
    "QuizWarriors",
    "Quiz",
    "Knowledge Quiz",
    "US Staffing Quiz",
    "Technology Quiz",
    "Geography Quiz",
    "Country Quiz",
    "Learn Through Play",
    "Warrior of Knowledge",
  ],

  authors: [
    {
      name: "QuizWarriors",
      url: "https://quizwarriors.com",
    },
  ],

  creator: "QuizWarriors",
  publisher: "QuizWarriors",

  openGraph: {
    title: "QuizWarriors | Knowledge is War",

    description:
      "Battle through knowledge with quizzes on US Staffing, Technology, Geography, Countries and more. Think critically. Question everything.",

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
      "Battle through knowledge with quizzes on US Staffing, Technology, Geography, Countries and more.",

    images: ["/og-image.png"],

    creator: "@QuizWarriors",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PHB2WRR0JS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-PHB2WRR0JS');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5189235812319135"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}