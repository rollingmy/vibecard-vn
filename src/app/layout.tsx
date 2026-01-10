import type { Metadata } from "next";
import { Be_Vietnam_Pro, VT323 } from "next/font/google"; // Import VT323
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["vietnamese"],
  variable: "--font-be-vietnam-pro",
  display: 'swap',
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-vt323",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VibeCard VN - Tạo thẻ Flex cực cháy",
  description: "Trang web tạo thẻ Flex chuẩn Gen Z 2026. Mẫu thẻ độc lạ, style Neubrutalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.variable} ${vt323.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
