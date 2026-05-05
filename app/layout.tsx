import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HighlightAI – Auto-organize Instagram Story Highlights",
  description: "Automatically categorize and organize your Instagram story highlights using AI. Built for influencers and social media managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5cf64a9d-a39b-4cb6-a8b9-f2e8452652ac"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
