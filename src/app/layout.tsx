import React from "react";
import { Stack } from "@mui/material";

import { fontTheme } from "@/theme/foundations/fonts";
import Header from "@/components/global/Header";
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
        <ThemeProvider>
          <Header />
          <Stack component="main" px={2}>
            {children}
          </Stack>
        </ThemeProvider>
      </body>
    </html>
  );
}
