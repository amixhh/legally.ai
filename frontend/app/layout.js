import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CursorSpotlight from './components/CursorSpotlight';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legally AI",
  description: "AI-powered legal assistance platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CursorSpotlight />
          {children}
        </Providers>
      </body>
    </html>
  );
}
