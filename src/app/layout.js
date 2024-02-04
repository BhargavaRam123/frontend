"use client";
import { Inter } from "next/font/google";
import "@/app/homecss/home.css";
import Footer from "./components/commoncomponents/footer";
import Navbar from "./components/commoncomponents/navbar";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./redux/provider";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <div>
            <Toaster />
            {children}
          </div>
          <div>{pathname === "/" ? <Footer /> : null}</div>
        </Providers>
      </body>
    </html>
  );
}
