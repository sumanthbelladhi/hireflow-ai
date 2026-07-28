import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-slate-900/70
        transition
        hover:bg-slate-800
      "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-900" />
      )}
    </button>
  );
}

export default ThemeToggle;