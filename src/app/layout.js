import {
  Poppins,
  Montserrat,
  Inter,
  Lato,
  Oswald,
  Roboto,
  Orbitron,
  Rowdies,
} from "next/font/google";

import "./globals.css";
import Providers from "./providers";

// ✅ Font Configs
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

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-rowdies",
});

// ✅ Metadata
export const metadata = {
  title: "Varunam for Victory",
  description:
    "Varunam is a leading coaching institute in Jehanabad, Bihar, helping students from Class 6 to 12 excel in boards and competitive exams with expert faculty, innovative teaching methods, and personal attention.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

// ✅ Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${lato.variable} ${oswald.variable} ${roboto.variable} ${orbitron.variable} ${rowdies.variable} antialiased`}
      >
        {/* ✅ SessionProvider wraps the whole app for NextAuth */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
