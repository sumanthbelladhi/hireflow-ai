import Container from "./container";
import Logo from "./logo";
import Button from "../ui/button";
import { Link } from "react-router-dom";
// import ThemeToggle from "@/components/shared/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-slate-950/70
        backdrop-blur-xl
      "
    >
      <Container>
        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <Link to="/" className="transition hover:text-white">
            <Logo />
          </Link>

          <nav
            className="
              hidden
              items-center
              gap-8
              text-sm
              text-slate-300
              md:flex
            "
          >
            <Link to="/jobs" className="transition hover:text-white">
              Find Jobs
            </Link>
            <Link to="/saved-jobs" className="transition hover:text-white">
              Saved Jobs
            </Link>

            {/* <a href="#" className="transition hover:text-white">
              Companies
            </a>*/}

            <Link to="/insights">
                <a href="#" className="transition hover:text-white">
                Insights
                </a>
            </Link>

            <Link to="/about">
                <a href="#" className="transition hover:text-white">
              About
            </a> 
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
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
                    md:hidden
                "
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
            {/* <ThemeToggle /> */}
            {/* <Button variant="secondary">Login</Button> */}

            <Link to="/jobs">
              <Button className="hidden md:block">Get Started</Button>
            </Link>
          </div>
        </div>
        {isOpen && (
          <div
            className="
                border-t
                border-white/10
                py-6
                md:hidden
                "
          >
            <div className="flex flex-col gap-4">
              <Link to="/jobs" className="text-slate-300">
                Find Jobs
              </Link>

              <Link to="/saved-jobs" className="text-slate-300">
                Saved Jobs
              </Link>
              <Link
                to="/insights"
                className="text-slate-300"
                >
                Insights
                </Link>
              <Link to="/about" className="text-slate-300">
                About
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
