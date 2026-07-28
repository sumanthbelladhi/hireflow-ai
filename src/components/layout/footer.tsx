import Container from "./container";
import Logo from "./logo";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            md:flex-row
          "
        >
          <Logo />

          <p className="text-sm text-slate-500">
            © 2026 HireFlow AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;