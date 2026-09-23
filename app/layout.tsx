import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinash Rathod | Product Solution Engineer",
  description:
    "Portfolio of Avinash Rathod — Product Solution Engineer working across AI, automation, APIs, integrations and enterprise applications.",
  keywords: [
    "Avinash Rathod",
    "Product Solution Engineer",
    "AI Engineer",
    "Agentic Workflow Engineer",
    "RAG",
    "Dify",
    "API Integration",
    "Enterprise Applications"
  ],
  openGraph: {
    title: "Avinash Rathod | Product Solution Engineer",
    description:
      "AI, automation, APIs and enterprise application solutions."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
