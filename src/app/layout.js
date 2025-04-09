import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import "../style/welcome.css";
import "../style/after-login-home-page.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HeliCoin",
  description: "Created by Shreyan Dey. And designed by Emam Hossain Miraj.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <main className="Manage_The_Width_And_Height">{children}</main>
      </body>
    </html>
  );
}
