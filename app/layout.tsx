import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Avinash Rathod | AI Engineer",
    description:
      "AI Engineer specializing in Generative AI, RAG, intelligent workflows, automation, APIs, and enterprise applications.",
    type: "website",
    url: "https://avinash-portfolio-v2.vercel.app/",
    siteName: "Avinash Rathod Portfolio",
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