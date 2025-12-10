import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pavel Shpagin | Computer Science Researcher",
  description: "Personal website of Pavel Shpagin - Computer Science student at Taras Shevchenko National University of Kyiv. Research interests: UAV localization, computational geometry, machine learning.",
  keywords: ["Pavel Shpagin", "Computer Science", "Machine Learning", "UAV Localization", "PhD", "Research"],
  authors: [{ name: "Pavel Shpagin" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pavel Shpagin | Computer Science Researcher",
    description: "Personal website of Pavel Shpagin - Computer Science student and researcher.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pavel Shpagin | Computer Science Researcher",
    description: "Personal website of Pavel Shpagin - Computer Science student and researcher.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
