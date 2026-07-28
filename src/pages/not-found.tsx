import { Link } from "react-router-dom";

import Container from "@/components/layout/container";
import Button from "@/components/ui/button";

function NotFoundPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
      "
    >
      <Container>
        <div className="text-center">
          <h1
            className="
              text-8xl
              font-black
              text-indigo-500
            "
          >
            404
          </h1>

          <h2 className="mt-6 text-3xl sm:text-4xl font-bold">
            Page Not Found
          </h2>

          <p className="mt-4 text-slate-400">
            The page you are looking for does not exist.
          </p>

          <Link to="/">
            <Button className="mt-8">
              Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}

export default NotFoundPage;