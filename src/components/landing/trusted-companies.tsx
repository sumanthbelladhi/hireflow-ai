import Container from "@/components/layout/container";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Spotify",
  "OpenAI",
];

function TrustedCompanies() {
  return (
    <section className="py-10">
      <Container>
        <div className="text-center">
          <p className="text-sm text-slate-500">
            Trusted by professionals from
          </p>

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-10
            "
          >
            {companies.map((company) => (
              <div
                key={company}
                className="
                  text-lg
                  font-semibold
                  text-slate-400
                  transition
                  hover:text-white
                "
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TrustedCompanies;