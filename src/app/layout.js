// app/layout.js or app/layout.tsx
import {
  Poppins,
  Montserrat,
  Inter,
  Lato,
  Oswald,
  Roboto,
  Orbitron,
} from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});


// app/layout.js or layout.tsx
export const metadata = {
  title: "Varunam for Victory",
  description:
    "This is the official site of Varunam where all information about us is shared and updated over time. This site is created by a student of Varunam Institute, Aditya Raj.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${lato.variable} ${oswald.variable} ${roboto.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

