import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { PageWrapper } from "./page-wrapper";

export const metadata: Metadata = {
  title: "M. Daniel Zuhad",
  description: "Online Portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <div
          aria-hidden="true"
          className=" absolute inset-y-16 inset-x-0 w-[70vw] rounded-full rotate-45 bg-gradient-to-b from-[#956300] to-[#847300] blur-[80px] mx-auto scale-y-[20px] opacity-10 z-0"
        ></div> */}
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
