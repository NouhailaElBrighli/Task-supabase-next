"use client"
import { env } from "@/lib/env.server";
import Script from "next/script";
import React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const navLink = [
    { name: "sign-up", href: "/sign-up" },
    { name: "Login", href: "/login" },
    // { name: "Forgot Password", href: "/forgot-password"},
]


const RootLayout = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="flex justify-center items-center space-x-6 py-4 bg-gray-500">
          {navLink.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <div key={link.name}>
                <Link href={link.href}>
                  <div className={isActive ? "p-3 rounded-lg bg-violet-600 font-bold text-white" : "text-white-500 hover:text-violet-800"}>
                    {link.name}
                  </div>
                </Link>
              </div>
            )
          })}
        </nav>
        {children}
        {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} /> */}
        {/* <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script> */}
      </body>
    </html>
  );
}

export default RootLayout;
