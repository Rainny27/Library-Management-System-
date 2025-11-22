import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Exhibition · Library Management System",
  description: "A modern dark-mode interface for managing the library catalogue, members, and loans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-body">
        <div className="app-shell">
          {/* HEADER / NAV */}
          <header className="header">
            <div className="header-inner">
              <div className="brand">
                <div className="brand-mark" />
                <div className="brand-text">
                  <span className="brand-title">The Exhibition</span>
                  <span className="brand-subtitle">
                    Delta Library Management System
                  </span>
                </div>
              </div>

              <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/credits">Credits</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="main">
            <div className="main-inner">{children}</div>
          </main>

          {/* FOOTER */}
          <footer className="footer">
            <div className="footer-inner">
              <div className="footer-left">
                <p className="footer-title">The Exhibition</p>
                <p className="footer-subtitle">
                  A dark-mode interface for the Delta Library System · CSC-131
                </p>
              </div>
              <div className="footer-right">
                <p className="footer-meta">
                  © {new Date().getFullYear()} Team Delta · All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
