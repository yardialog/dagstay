import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DAGSTAY — Прямые бронирования для отелей и глэмпингов Дагестана",
  description:
    "Увеличиваем прямые бронирования для отелей, гостевых домов и глэмпингов Дагестана: современный сайт, реклама в Яндекс и VK, AI-помощник, CRM и аналитика под ключ.",
  keywords: [
    "DAGSTAY",
    "прямые бронирования Дагестан",
    "сайт для отеля Дагестан",
    "глэмпинг Дагестан",
    "маркетинг отелей",
    "AI-помощник бронирование",
    "реклама Яндекс Директ туризм",
  ],
  authors: [{ name: "DAGSTAY" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DAGSTAY — Прямые бронирования для отелей Дагестана",
    description:
      "Современный сайт, реклама, AI-помощник и CRM под ключ. Снижаем зависимость от агрегаторов и увеличиваем прямые бронирования.",
    siteName: "DAGSTAY",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAGSTAY — Прямые бронирования для отелей Дагестана",
    description:
      "Снижаем зависимость от агрегаторов и увеличиваем прямые бронирования.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
