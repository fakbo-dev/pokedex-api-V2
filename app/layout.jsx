import { Poppins } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/Header";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-poppins" });

export const metadata = {
  title: "Pokedex API",
  description: "Pokedex API made for fakbo Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
