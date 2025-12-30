"use client";

import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">

      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-30">
        <span className="font-bold text-gray-900">Dummy API</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>


      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}


      <aside className={clsx(
        "fixed top-0 left-0 z-50 h-screen w-64 border-r border-gray-200 bg-gray-50 p-6 overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between lg:block mb-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Dummy API</h1>
            <p className="text-sm text-gray-600 mt-1">Documentation</p>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-1">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={clsx(
              "block px-3 py-2 rounded font-medium",
              pathname === "/" ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            Introduction
          </Link>
          <Link 
            href="/playground" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={clsx(
              "block px-3 py-2 rounded font-medium",
              pathname === "/playground" ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            Playground
          </Link>
          <div className="mt-6">
            <p className="px-3 text-xs font-semibold text-gray-500 uppercase">API Reference</p>
            <div className="mt-2 space-y-1">
              {[
                { href: "/docs/products", label: "Products" },
                { href: "/docs/categories", label: "Categories" },
                { href: "/docs/brands", label: "Brands" },
                { href: "/docs/errors", label: "Errors" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "block px-3 py-2 rounded text-sm font-medium",
                    pathname === link.href ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </aside>


      <main className={clsx(
        "p-6 lg:ml-64 lg:p-12 transition-all duration-300",
        isMobileMenuOpen ? "blur-sm lg:blur-0" : ""
      )}>
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
