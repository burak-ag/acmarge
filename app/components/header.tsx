import { useState, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router";

export function Header() {
  const [isDark, setIsDark] = useState(true);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme !== "light";
    setIsDark(shouldBeDark);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      window.dispatchEvent(new CustomEvent("themeChange", { detail: { isDark: newTheme } }));
      return newTheme;
    });
  };

  const navLinks = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Çalışmalar", href: "/projects" },
    { label: "İletişim", href: "/contact" },
  ];

  return (
    <header className="w-full">
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

      <nav 
        style={{
          backgroundColor: isDark ? "#030712" : "#ffffff",
          borderBottomColor: isDark ? "#1f2937" : "#e5e7eb",
          transition: "background-color 0.3s, border-color 0.3s"
        }}
        className="border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img
                src={isDark ? "/arge-logo.png" : "/arge-logo-dark.png"}
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    color: isDark ? "#d1d5db" : "#374151",
                  }}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 hover:bg-gray-100"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDark ? "#ffffff" : "#111827";
                    e.currentTarget.style.backgroundColor = isDark ? "#1f2937" : "#f3f4f6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? "#d1d5db" : "#374151";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              style={{
                backgroundColor: isDark ? "#1f2937" : "#f3f4f6",
                color: isDark ? "#d1d5db" : "#374151",
              }}
              className="p-2 rounded-lg transition-all duration-300 hover:opacity-80"
              aria-label="Toggle theme"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
