import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/i18n/LangProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shuhrat-kholiqnazarov.vercel.app"),
  title: "Shuhrat Kholiqnazarov — Front-End Developer",
  description:
    "Front-end developer from Dushanbe, Tajikistan. React, Next.js, TypeScript, Tailwind CSS. Projects: WELFOX, RentArena, Ormed Premium and more.",
  openGraph: {
    title: "Shuhrat Kholiqnazarov — Front-End Developer",
    description: "React · Next.js · TypeScript · Tailwind CSS",
    images: ["/shuhrat.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${jetbrains.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
