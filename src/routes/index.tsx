import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";

// נתיבי הבסיס לתמונות
const imgA = "/Kitchen-a.jpg";
const imgB = "/kitchen-b.jpg";
const imgC = "/kitchen-c.jpg";
const imgD = "/kitchen-d.jpg";
const imgE = "/kitchen-e.jpg";

// רכיב תמונה חכם שמטפל בשגיאות טעינה, אותיות גדולות/קטנות וסיומות באופן אוטומטי
function SmartImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [attempt, setAttempt] = useState(0);

  const handleError = () => {
    if (attempt === 0) {
      // ניסיון 1: החלפה בין אות גדולה לקטנה בתחילת השם
      const toggled = imgSrc.includes("/kitchen-")
        ? imgSrc.replace("/kitchen-", "/Kitchen-")
        : imgSrc.replace("/Kitchen-", "/kitchen-");
      setImgSrc(toggled);
      setAttempt(1);
    } else if (attempt === 1) {
      // ניסיון 2: בדיקת סיומת PNG
      setImgSrc(src.replace(/\.jpg$/i, ".png"));
      setAttempt(2);
    } else if (attempt === 2) {
      // ניסיון 3: בדיקת סיומת JPG באותיות גדולות
      setImgSrc(src.replace(/\.jpg$/i, ".JPG"));
      setAttempt(3);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Bespoke Luxury Kitchens in San Diego — 25% Consultation Discount" },
      { name: "description", content: "Custom-designed luxury kitchens for San Diego homes. Claim your exclusive 25% consultation discount today." },
      { property: "og:title", content: "Bespoke Luxury Kitchens in San Diego — 25% Off Consultation" },
      { property: "og:description", content: "Transform your home with custom craftsmanship and timeless design. Claim your exclusive 25% consultation discount." },
      { property: "og:image", content: imgA },
      { name: "twitter:image", content: imgA },
    ],
  }),
});

function Landing() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <ExclusiveOffer />
      <Marquee />
      <About />
      <Detail />
      <Features />
      <MoodyBreak />
      <Process />
      <Compare />
      <FinalDetail />
      <FormSection />
      <FAQ />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="absolute top-0 inset-x-0 z-30">
      <div className="container-lux flex items-center justify-between py-6">
        <div className="text-cream font-serif text-xl tracking-wider">
          San Diego Kitchens
          <span className="mx-2 text-gold">·</span>
          <span className="text-xs tracking-[0.3em] uppercase font-sans">California</span>
        </div>
        <a href="#apply" className="hidden sm:inline-flex text-cream text-xs tracking-[0.2em] uppercase border border-cream/40 hover:border-gold hover:text-gold transition-colors px-5 py-2.5">
          Claim 25% Off
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <SmartImage src={imgA} alt="Luxury kitchen in San Diego" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-vignette" />
      <div className="relative container-lux pb-20 sm:pb-28 pt-32 text-cream">
        <Reveal>
          <div className="eyebrow text-gold mb-6">Limited Edition · San Diego</div>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] max-w-4xl font-light">
            Bespoke Luxury
            <br />
            <span className="italic text-gold">Kitchens</span>
            <br />
            in San Diego
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-xl text-lg text-cream/85 leading-relaxed">
            Transform your home with custom craftsmanship and timeless design.
            Claim your exclusive
            <span className="text-gold"> 25% consultation discount </span>
            today.
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a href="#apply" className="btn-gold btn-gold-hover bg-cream text-ink border-cream hover:bg-gold hover:border-gold">
              Claim 25% Discount
            </a>
            <span className="text-xs tracking-[0.2em] uppercase text-cream/70">
              Free consultation · No obligation
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExclusiveOffer() {
  const benefits = [
    "Only 5 kitchens will be selected in San Diego",
    "Selected homeowners qualify for 25% OFF",
    "Free in-home luxury consultation",
    "Before-and-after showcase opportunity",
    "Premium countertops, custom cabinetry & finishes",
    "Full surface, backsplash & custom upgrades",
  ];
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-lux max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="eyebrow text-gold-deep mb-4">Exclusive Offer · Limited Availability</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
            We're Selecting{" "}
            <span className="text-gold-deep">5 Kitchens</span>{" "}
            in San Diego for a Before & After Transformation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            Selected San Diego homeowners may qualify for 25% OFF their kitchen remodel in exchange for allowing before-and-after project photos.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            Our team is looking for 5 select kitchens this month in San Diego to feature in our luxury remodeling portfolio.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-left max-w-3xl mx-auto mb-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-deep/10 text-gold-deep flex items-center justify-center text-sm font-serif">✓</span>
                <span className="text-charcoal leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <a href="#apply" className="btn-gold btn-gold-hover inline-flex items-center justify-center">
            Check If Your Kitchen Qualifies
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Handcrafted", "Calacatta Stone", "Natural Oak", "Brushed Brass", "Concealed Lighting", "Fully Custom"];
  return (
    <div className="bg-ink text-cream/80 py-6 overflow-hidden border-y border-cream/10">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-xs tracking-[0.35em] uppercase flex items-center gap-16">
            {t} <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-100%); } }`}</style>
    </div>
  );
}

function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="eyebrow mb-4">About · San Diego</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
            Every kitchen tells the <span className="italic text-gold-deep">story</span> of a home
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We guide San Diego families through the entire journey — from the first conversation
            to 3D design, material selection, and the moment your new kitchen becomes the heart
            of the home.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A blend of noble materials, natural light, and quiet proportions that stay with you
            for decades.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="120+" l="Projects" />
            <Stat n="15" l="Years of expertise" />
            <Stat n="25%" l="Consultation off" />
          </div>
        </Reveal>
        <Reveal delay={200} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <SmartImage src={imgB} alt="Walnut kitchen design" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-64 bg-cream/95 backdrop-blur p-6">
              <div className="eyebrow mb-2">Walnut Edition</div>
              <p className="text-sm text-charcoal leading-relaxed">
                American walnut, natural stone, and clean lines for a space that stays timeless.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-3xl sm:text-4xl text-gold-deep">{n}</div>
      <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function Detail() {
  return (
    <section className="bg-sand/40 py-24 sm:py-32">
      <div className="container-lux grid lg:grid-cols-5 gap-14 items-center">
        <Reveal className="lg:col-span-3">
          <div className="relative aspect-[3/4] overflow-hidden">
            <SmartImage src={imgC} alt="Luxury kitchen lighting detail" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={200} className="lg:col-span-2">
          <div className="eyebrow mb-4">The Details</div>
          <h2 className="text-4xl sm:text-5xl leading-[1.1] mb-6">
            The smallest detail — is the <span className="italic">difference</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We pay obsessive attention to every touch — brushed brass, warm under-shelf lighting,
            and natural textures that come alive in the California afternoon sun.
          </p>
          <ul className="space-y-4">
            {["Hand-finished brass and hardware", "Integrated warm lighting", "Concealed handles and soft-close drawers", "Natural stone with one-of-a-kind veining"].map((x, i) => (
              <li key={i} className="flex items-center gap-4 border-b border-border pb-4">
                <span className="text-gold-deep font-serif text-lg">0{i + 1}</span>
                <span className="text-charcoal">{x}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { t: "Architectural Planning", d: "Precise 3D planning tailored to the flow and proportions of your home." },
    { t: "Noble Materials", d: "Calacatta stone, American walnut, brushed brass — every material hand-selected." },
    { t: "Uncompromising Execution", d: "An expert install team guiding your project from the first wall to the final polish." },
    { t: "Full Warranty", d: "Extended warranty on workmanship, materials, and hardware — built to last generations." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-4">Our Approach</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              Why San Diego homeowners choose us
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-background p-8 h-full">
                <div className="font-serif text-3xl text-gold-deep mb-6">0{i + 1}</div>
                <h3 className="text-xl mb-3">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoodyBreak() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <SmartImage src={imgD} alt="Modern dark luxury kitchen" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
      <div className="relative container-lux py-24 text-cream">
        <Reveal>
          <div className="max-w-xl">
            <div className="eyebrow text-gold mb-6">Signature Series</div>
            <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05] mb-6 font-light">
              A kitchen you <span className="italic text-gold">never</span> want to leave
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              Warm lighting, polished stone, and lines that stay relevant twenty years from now.
            </p>
            <a href="#apply" className="btn-gold btn-gold-hover bg-transparent border-cream text-cream hover:bg-gold hover:border-gold hover:text-ink">
              Book Your 25% Off Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discovery Call", d: "A short conversation to understand your needs, style, and budget." },
    { n: "02", t: "In-Home Consultation", d: "A complimentary visit to your San Diego home for planning and measurements." },
    { n: "03", t: "Design & Proposal", d: "3D visualization, material boards, and a detailed proposal." },
    { n: "04", t: "Build & Install", d: "Full project management through to a kitchen you are proud of." },
  ];
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-4">The Process</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              Four steps to your <span className="italic text-gold-deep">dream kitchen</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="border-t border-ink pt-6">
                <div className="font-serif text-5xl text-gold-deep mb-6">{s.n}</div>
                <h3 className="text-xl mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-4">The Difference</div>
            <h2 className="text-4xl sm:text-5xl leading-[1.1]">
              Instead of paying full price — claim your 25% off
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="border border-border p-10 h-full">
              <div className="eyebrow text-muted-foreground mb-4">Standard</div>
              <h3 className="text-2xl mb-6">Typical Kitchen Remodel</h3>
              <ul className="space-y-3 text-muted-foreground">
                {["Full pricing", "No discount", "Standard consultation", "Regular timeline"].map((x) => (
                  <li key={x} className="flex gap-3 items-center"><span className="text-stone">—</span>{x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="border-2 border-gold-deep bg-sand/30 p-10 h-full relative">
              <span className="absolute -top-3 left-8 bg-gold-deep text-cream text-[0.65rem] tracking-[0.25em] uppercase px-3 py-1">
                This Month Only
              </span>
              <div className="eyebrow text-gold-deep mb-4">Limited Edition</div>
              <h3 className="text-2xl mb-6">Premium Consultation Package · 25% Off</h3>
              <ul className="space-y-3 text-charcoal">
                {["25% off design consultation", "Complimentary 3D visualization", "In-home visit, no obligation", "Personal senior designer", "Custom material boards"].map((x) => (
                  <li key={x} className="flex gap-3 items-center"><span className="text-gold-deep">◆</span>{x}</li>
                ))}
              </ul>
              <a href="#apply" className="btn-gold btn-gold-hover mt-8 w-full">See If Your Kitchen Qualifies</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FinalDetail() {
  return (
    <section className="bg-sand/40 py-24 sm:py-32">
      <div className="container-lux grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="eyebrow mb-4">Craft · Detail</div>
          <h2 className="text-4xl sm:text-5xl leading-[1.1] mb-6">
            Handcrafted. <span className="italic text-gold-deep">Natural light.</span>
            <br />Quiet.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We create kitchens you move through effortlessly, cook in with pleasure, and
            gather in with family and friends for many years to come.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="relative aspect-[3/4] overflow-hidden">
            <SmartImage src={imgE} alt="Designed kitchen shelf with warm lighting" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section id="apply" className="py-24 sm:py-32 bg-ink text-cream">
      <div className="container-lux grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <div className="eyebrow text-gold mb-4">The First Step</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 font-light">
            Claim your
            <br /><span className="italic text-gold">25% discount</span>
            <br />on your consultation
          </h2>
          <p className="text-cream/75 text-lg leading-relaxed mb-8 max-w-md">
            Three short steps, less than a minute. A senior designer will be in touch
            within 24 hours to schedule your in-home consultation in San Diego.
          </p>
          <ul className="space-y-3 text-cream/80">
            {["Free, no-obligation consultation", "25% off design and project guidance", "Available this month only"].map((x) => (
              <li key={x} className="flex items-center gap-3"><span className="text-gold">◆</span>{x}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Is the 25% discount guaranteed?", a: "Yes — the discount is reserved for the five San Diego homes selected this month." },
    { q: "Is the consultation really free?", a: "Yes. The in-home visit and initial consultation are complimentary and come with no obligation." },
    { q: "Which areas do you serve?", a: "The greater San Diego area — La Jolla, Del Mar, Coronado, Encinitas, and beyond." },
    { q: "How long does a typical project take?", a: "Between 6 and 12 weeks from plan sign-off, depending on the scope of the project." },
    { q: "Do I need to decide today?", a: "No — but this month is limited to just five homes." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-lux max-w-3xl">
        <Reveal>
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="text-4xl sm:text-5xl">Questions we're asked</h2>
          </div>
        </Reveal>
        <div className="divide-y divide-border border-y border-border">
          {qs.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <details className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-serif text-xl">{item.q}</span>
                  <span className="text-gold-deep text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-16">
      <div className="container-lux grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl text-cream mb-3">San Diego Kitchens</div>
          <p className="text-sm leading-relaxed">
            Bespoke luxury kitchen design and build across San Diego County.
          </p>
        </div>
        <div>
          <div className="eyebrow text-gold mb-3">Contact</div>
          <p className="text-sm">San Diego, California</p>
        </div>
        <div>
          <div className="eyebrow text-gold mb-3">Hours</div>
          <p className="text-sm">Monday–Friday · 9:00–18:00</p>
          <p className="text-sm mt-1">In-home visits by appointment</p>
        </div>
      </div>
      <div className="container-lux mt-12 pt-6 border-t border-cream/10 text-xs tracking-[0.2em] uppercase text-cream/50 flex flex-col md:flex-row flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} San Diego Kitchens</span>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
          <span className="hidden md:inline text-cream/20">·</span>
          <span>Bespoke · Handcrafted · San Diego</span>
        </div>
      </div>
    </footer>
  );
}
