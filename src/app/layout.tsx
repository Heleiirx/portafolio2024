import type { Metadata } from "next";
import {Providers} from "./providers";
import { inter, montserrat } from '../app/ui/fonts'
import "./globals.css";


export const metadata: Metadata = {
  title: "Portafolio Itzel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} light`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
