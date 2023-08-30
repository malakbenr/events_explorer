import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@/components/ui/theme-provider";


const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Events Explorer",
  description: "Explorer events",
  author: "Malak BEN ROMDHANE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex flex-col items-end">
            <nav className="space-x-4 p-3">
              <Link
                href="/"
                className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 dark:text-slate-100 dark:hover:bg-slate-500"
              >
                Home
              </Link>
              <Link
                href="https://github.com/malakbenr/events_explorer"
                target="_blank"
                className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-500"
              >
                <picture>
                  <source
                    srcSet="/github-light.png"
                    media="(prefers-color-scheme: dark)"
                  />
                  <Image
                    src="/github.png"
                    width={20}
                    height={20}
                    className="inline"
                    alt="link project to github"
                  />
                </picture>
              </Link>
            </nav>
          </header>
          <main>
            <header className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-[3rem]">Upcoming Events in</h2>
            </header>
            {children}
          </main>
          <footer className="mt-8 text-center">
            <p className="font-light text-slate-700">
              © 2023 Malak BR - A Project Built with Next.js
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
