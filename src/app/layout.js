'use client'
import localFont from "next/font/local";
import "./globals.css";
import store from "@/store";
import { Provider } from "react-redux";
import { IBM_Plex_Sans } from "next/font/google"

const open = IBM_Plex_Sans({ subsets: ["latin"], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
