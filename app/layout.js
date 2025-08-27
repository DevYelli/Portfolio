import { Alice, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const alice = Alice({
  subsets: ["latin"],
  weight: "400", 
  variable: "--font-alice",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-playfair",
});

const michael = localFont({
  src: "./fonts/michael.ttf",
  weight: "700",
  variable: "--font-michael",
});

export const metadata = {
  title: "Marielle's Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${alice.variable} ${michael.variable} ${playfair.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
