import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Dev Hub - Master AI Development",
  description: "Learn AI app development through practical case studies and hands-on examples",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed w-full z-50 glass-effect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary"></div>
                <span className="text-2xl font-bold text-gradient">AI Dev Hub</span>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  {['Home', 'Courses', 'Case Studies', 'Resources'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-text-dim hover:text-text-light hover-glow px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {item}
                    </a>
                  ))}
                  <button className="button-primary">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
