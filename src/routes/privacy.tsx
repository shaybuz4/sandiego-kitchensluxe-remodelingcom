import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — San Diego Kitchens" },
      { name: "description", content: "Privacy Policy for San Diego Kitchens. Learn how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy — San Diego Kitchens" },
      { property: "og:description", content: "Privacy Policy for San Diego Kitchens. Learn how we collect, use, and protect your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Privacy() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="bg-ink text-cream py-6">
        <div className="container-lux flex items-center justify-between">
          <Link to="/" className="font-serif text-xl tracking-wider">
            San Diego Kitchens
            <span className="mx-2 text-gold">·</span>
            <span className="text-xs tracking-[0.3em] uppercase font-sans">California</span>
          </Link>
          <Link to="/" className="hidden sm:inline-flex text-cream text-xs tracking-[0.2em] uppercase border border-cream/40 hover:border-gold hover:text-gold transition-colors px-5 py-2.5">
            Back Home
          </Link>
        </div>
      </header>

      <main className="py-20 sm:py-28">
        <div className="container-lux max-w-3xl">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-10 text-charcoal">
            <section>
              <h2 className="font-serif text-2xl mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed text-muted-foreground">
                We collect the information you provide when you submit our consultation form, including your name, phone number, email address, zip code, project timeline, and details about your kitchen renovation vision. We may also collect technical data such as your browser type and IP address to improve our website experience.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed text-muted-foreground">
                We use your information to respond to your consultation request, schedule in-home visits, communicate project updates, and improve our services. We do not sell or rent your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">3. Sharing Your Information</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may share your information with trusted service providers who assist us in operating our business, such as scheduling and customer communication platforms. These providers are contractually obligated to protect your data and use it only for the services we request.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">4. Data Security</h2>
              <p className="leading-relaxed text-muted-foreground">
                We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">5. Your Choices</h2>
              <p className="leading-relaxed text-muted-foreground">
                You may opt out of receiving marketing communications at any time by following the unsubscribe instructions in our emails or by contacting us directly. You may also request access to, correction of, or deletion of your personal data.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">6. Changes to This Policy</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">7. Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at our San Diego, California office during business hours, Monday through Friday, 9:00 AM to 6:00 PM Pacific Time.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/"
              className="btn-gold btn-gold-hover inline-flex items-center justify-center"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-ink text-cream/70 py-12">
        <div className="container-lux flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs tracking-[0.2em] uppercase text-cream/50">
            © {new Date().getFullYear()} San Diego Kitchens
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-cream/50">
            Bespoke · Handcrafted · San Diego
          </span>
        </div>
      </footer>
    </div>
  );
}
