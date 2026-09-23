import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   metadataBase: new URL("https://avinash-portfolio-v2.vercel.app/"),

  title: "Avinash Rathod | AI Engineer | GenAI, RAG & Automation",
  description:
    "AI Engineer specializing in Generative AI, RAG, intelligent workflows, automation, APIs, and enterprise applications.",
  keywords: [
    "Avinash Rathod",
    "AI Engineer",
    "Generative AI",
    "GenAI",
    "RAG",
    "AI Automation",
    "LLM",
    "Dify",
    "AI Workflows",
    "REST APIs",
    "Enterprise Applications",
  ],
  authors: [{ name: "Avinash Rathod" }],
  creator: "Avinash Rathod",

  verification: {
    google: "f-FHOQQfCNKxT3P8gbz_yEczqAEVMt27MboF1c0rGf8",
  },
  
  openGraph: {
    title: "Avinash Rathod | AI Engineer",
    description:
      "AI Engineer specializing in Generative AI, RAG, intelligent workflows, automation, APIs, and enterprise applications.",
    type: "website",
    url: "https://avinash-portfolio-v2.vercel.app/",
    siteName: "Avinash Rathod Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avinash Rathod - AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Rathod | AI Engineer",
    description:
      "AI Engineer specializing in Generative AI, RAG, intelligent workflows, automation, APIs, and enterprise applications.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}