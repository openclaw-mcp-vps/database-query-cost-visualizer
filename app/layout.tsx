import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Database Query Cost Visualizer",
  description: "Visualize database query costs in real-time. Analyze execution plans, get optimization suggestions, and reduce database expenses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="465a4b39-5ef3-4bc2-ae92-60280c28dbe9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
