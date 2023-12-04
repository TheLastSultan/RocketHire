import type { Metadata } from "next";

import { fontTheme } from "@/theme/foundations/fonts";
import ThemeProvider from "@/theme";

export const metadata = {
  title: {
    default: "RocketHire",
    template: "%s | RocketHire",
  },
  description:
    "Hire Pre-Vetted Remote Developers with world class technical and communication skills without worrying about crazy fees or the legal hassle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontTheme.className}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
