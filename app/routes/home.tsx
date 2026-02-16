import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main 
      style={{
        backgroundColor: isDark ? "#030712" : "#ffffff",
        color: isDark ? "#f3f4f6" : "#111827",
      }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 
          style={{ color: isDark ? "#ffffff" : "#111827" }}
          className="text-4xl font-bold mb-4"
        >
          ACM Hacettepe Ar-Ge
        </h1>
        <p 
          style={{ color: isDark ? "#d1d5db" : "#374151" }}
          className="text-lg"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor aliquid neque, reiciendis vitae soluta accusamus at ut debitis aspernatur qui nostrum, harum aperiam laborum quia expedita voluptatibus corporis? Nihil, repudiandae.
        </p>
      </div>
    </main>
  );
}
