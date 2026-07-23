import { createFileRoute } from "@tanstack/react-router";
import imgA from "@/assets/A_Kitchen_12.jpg.asset.json";
import imgB from "@/assets/B_kitchen_14.jpg.asset.json";
import imgC from "@/assets/C_kitchen_16.jpg.asset.json";
import imgD from "@/assets/D_kitchen_23.jpg.asset.json";
import imgE from "@/assets/E_kitchen_17.jpg.asset.json";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "מטבחי יוקרה בסן דייגו — 25% הנחה על ייעוץ | Bespoke Kitchens San Diego" },
      { name: "description", content: "עיצוב ותכנון מטבחי יוקרה בהתאמה אישית בסן דייגו. הבטיחו 25% הנחה על ייעוץ הבית." },
      { property: "og:title", content: "מטבחי יוקרה בסן דייגו — 25% הנחה" },
      { property: "og:description", content: "Bespoke Luxury Kitchens in San Diego. Claim your 25% consultation discount." },
      { property: "og:image", content: imgA.url },
      { name: "twitter:image", content: imgA.url },
    ],
  }),
});

function Landing() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
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
          מטבחי סן דייגו
          <span className="mx-2 text-gold">·</span>
          <span className="text-xs tracking-[0.3em] uppercase font-sans">San Diego</span>
        </div>
        <a href="#apply" className="hidden sm:inline-flex text-cream text-xs tracking-[0.2em] uppercase border border-cream/40 hover:border-gold hover:text-gold transition-colors px-5 py-2.5">
          הבטיחו 25% הנחה
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img src={imgA.url} alt="Luxury kitchen in San Diego" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-vignette" />
      <div className="relative container-lux pb-20 sm:pb-28 pt-32 text-cream">
        <Reveal>
          <div className="eyebrow text-gold mb-6">מהדורה מוגבלת · סן דייגו</div>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] max-w-4xl font-light">
            מטבחי יוקרה
            <br />
            <span className="italic text-gold">בהתאמה אישית</span>
            <br />
            בסן דייגו
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-xl text-lg text-cream/85 leading-relaxed">
            לורם איפסום דולור סיט אמט, בעיצוב שמזמין אתכם להישאר.
            אנחנו בוחרים חמישה בתים בסן דייגו לתהליך עיצוב מלווה — ומעניקים
            <span className="text-gold"> 25% הנחה </span>
            על הייעוץ האישי.
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a href="#apply" className="btn-gold btn-gold-hover bg-cream text-ink border-cream hover:bg-gold hover:border-gold">
              הבטיחו 25% הנחה
            </a>
            <span className="text-xs tracking-[0.2em] uppercase text-cream/70">
              ייעוץ חינם · ללא התחייבות
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["עבודת יד", "אבן קלקטה", "עץ אלון טבעי", "פליז מוברש", "תאורה מוסתרת", "בהתאמה אישית"];
  return (
    <div className="bg-ink text-cream/80 py-6 overflow-hidden border-y border-cream/10">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-xs tracking-[0.35em] uppercase flex items-center gap-16">
            {t} <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(100%); } }`}</style>
    </div>
  );
}

function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="eyebrow mb-4">אודות · San Diego</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
            כל מטבח הוא <span className="italic text-gold-deep">סיפור</span> של הבית
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. אנו מלווים משפחות בסן דייגו
            בתהליך שלם — משיחת ההיכרות הראשונה, דרך תכנון תלת־ממדי, בחירת חומרים
            ועד לרגע שבו המטבח החדש הופך למרכז הבית.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            שילוב של חומרים אצילים, אור טבעי, ופרופורציות שקטות שמלוות אתכם עשרות שנים.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="120+" l="פרויקטים" />
            <Stat n="15" l="שנות מומחיות" />
            <Stat n="25%" l="הנחת ייעוץ" />
          </div>
        </Reveal>
        <Reveal delay={200} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={imgB.url} alt="עיצוב מטבחים מעץ אגוז" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-64 bg-cream/95 backdrop-blur p-6">
              <div className="eyebrow mb-2">מהדורת אגוז</div>
              <p className="text-sm text-charcoal leading-relaxed">
                עץ אגוז אמריקאי, אבן טבעית וקווים נקיים לחלל שנשאר עדכני לאורך זמן.
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
            <img src={imgC.url} alt="פרט תאורה במטבח יוקרה" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={200} className="lg:col-span-2">
          <div className="eyebrow mb-4">הפרטים</div>
          <h2 className="text-4xl sm:text-5xl leading-[1.1] mb-6">
            הפרט הקטן — הוא <span className="italic">ההבדל</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            לורם איפסום דולור סיט אמט. אנו מקדישים תשומת לב אובססיבית לכל נגיעה — פליז מוברש,
            תאורה חמה מתחת למדף, וטקסטורות טבעיות שמתעוררות לחיים באור הצהריים של קליפורניה.
          </p>
          <ul className="space-y-4">
            {["פליז ופרזול בגימור יד", "תאורה חמה משולבת", "ידיות חבויות ומגירות שקטות", "אבן טבעית עם וריאציות ייחודיות"].map((x, i) => (
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
    { t: "תכנון אדריכלי", d: "לורם איפסום — תכנון תלת ממדי מדויק שמותאם לחלל ולזרימה של הבית שלכם." },
    { t: "חומרים אצילים", d: "אבן קלקטה, עץ אגוז אמריקאי, פליז מוברש — כל חומר נבחר ידנית." },
    { t: "ביצוע ללא פשרות", d: "צוות מתקינים מומחה שמלווה את הפרויקט מהקיר הראשון ועד הניקיון האחרון." },
    { t: "אחריות מלאה", d: "אחריות מורחבת על עבודה, חומרים ופרזול — כי מטבח יוקרה נבנה לדורות." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-4">הגישה שלנו</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              מדוע משפחות בסן דייגו בוחרות בנו
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
      <img src={imgD.url} alt="מטבח יוקרה מודרני כהה" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-ink/55 to-transparent" />
      <div className="relative container-lux py-24 text-cream">
        <Reveal>
          <div className="max-w-xl">
            <div className="eyebrow text-gold mb-6">Signature Series</div>
            <h2 className="font-serif text-4xl sm:text-6xl leading-[1.05] mb-6 font-light">
              מטבח שאתם <span className="italic text-gold">לעולם לא</span> רוצים לעזוב
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              לורם איפסום דולור סיט אמט. תאורה חמה, אבן מלוטשת, וקווים
              שנשארים רלוונטיים גם בעוד עשרים שנה.
            </p>
            <a href="#apply" className="btn-gold btn-gold-hover bg-transparent border-cream text-cream hover:bg-gold hover:border-gold hover:text-ink">
              קבעו ייעוץ בהנחת 25%
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "שיחת היכרות", d: "שיחה קצרה להבנת הצרכים, הסגנון וטווח התקציב." },
    { n: "02", t: "ייעוץ בבית", d: "ביקור ללא עלות במטבח שלכם בסן דייגו לתכנון ומדידות." },
    { n: "03", t: "תכנון ועיצוב", d: "הדמיה תלת ממדית, לוחות חומרים והצעה מפורטת." },
    { n: "04", t: "ביצוע והתקנה", d: "ליווי מלא עד למסירה של מטבח שאתם גאים בו." },
  ];
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-4">התהליך</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              ארבעה שלבים אל <span className="italic text-gold-deep">מטבח החלומות</span>
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
            <div className="eyebrow mb-4">ההבדל</div>
            <h2 className="text-4xl sm:text-5xl leading-[1.1]">
              במקום לשלם מחיר מלא — הבטיחו את הנחת ה־25%
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="border border-border p-10 h-full">
              <div className="eyebrow text-muted-foreground mb-4">רגיל</div>
              <h3 className="text-2xl mb-6">שיפוץ מטבח סטנדרטי</h3>
              <ul className="space-y-3 text-muted-foreground">
                {["תמחור מלא", "ללא הנחה", "ייעוץ סטנדרטי", "לוח זמנים רגיל"].map((x) => (
                  <li key={x} className="flex gap-3 items-center"><span className="text-stone">—</span>{x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="border-2 border-gold-deep bg-sand/30 p-10 h-full relative">
              <span className="absolute -top-3 right-8 bg-gold-deep text-cream text-[0.65rem] tracking-[0.25em] uppercase px-3 py-1">
                החודש בלבד
              </span>
              <div className="eyebrow text-gold-deep mb-4">מהדורה מוגבלת</div>
              <h3 className="text-2xl mb-6">חבילת ייעוץ פרימיום · 25% הנחה</h3>
              <ul className="space-y-3 text-charcoal">
                {["25% הנחה על ייעוץ עיצוב", "הדמיה תלת ממדית ללא עלות", "ביקור בבית ללא התחייבות", "ליווי אישי של מעצב בכיר", "לוחות חומרים בהתאמה"].map((x) => (
                  <li key={x} className="flex gap-3 items-center"><span className="text-gold-deep">◆</span>{x}</li>
                ))}
              </ul>
              <a href="#apply" className="btn-gold btn-gold-hover mt-8 w-full">בדקו אם המטבח שלכם מתאים</a>
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
            עבודת יד. <span className="italic text-gold-deep">אור טבעי.</span>
            <br />שקט.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סד דו איוסמוד
            טמפור אינסידונט. אנו יוצרים מטבחים שנעים בהם בטבעיות, מבשלים בהם בהנאה,
            ומארחים בהם משפחה וחברים לאורך שנים.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={imgE.url} alt="מדף מטבח מעוצב עם תאורה חמה" className="w-full h-full object-cover" />
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
          <div className="eyebrow text-gold mb-4">הצעד הראשון</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 font-light">
            הבטיחו את
            <br /><span className="italic text-gold">25% ההנחה</span>
            <br />על הייעוץ שלכם
          </h2>
          <p className="text-cream/75 text-lg leading-relaxed mb-8 max-w-md">
            שלושה שלבים קצרים, פחות מדקה. נציג בכיר יחזור אליכם תוך 24 שעות
            לתיאום ייעוץ אישי בבית שלכם בסן דייגו.
          </p>
          <ul className="space-y-3 text-cream/80">
            {["ייעוץ חינם ללא התחייבות", "25% הנחה על תכנון וליווי", "זמין החודש בלבד"].map((x) => (
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
    { q: "האם ההנחה של 25% מובטחת?", a: "לורם איפסום דולור סיט אמט. ההנחה בתוקף לחמשת הבתים שייבחרו החודש בסן דייגו." },
    { q: "האם הייעוץ באמת חינם?", a: "כן, הביקור בבית והייעוץ הראשוני ניתנים ללא עלות וללא התחייבות." },
    { q: "אילו אזורים אתם משרתים?", a: "כל אזור סן דייגו רבתי — לה חויה, דל מאר, קורונדו, אנסיניטאס ועוד." },
    { q: "כמה זמן לוקח פרויקט טיפוסי?", a: "בין 6 ל־12 שבועות מרגע החתימה על התוכנית — תלוי בהיקף הפרויקט." },
    { q: "האם צריך להחליט היום?", a: "לא — אבל מספר המקומות החודש מוגבל לחמישה בתים בלבד." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="container-lux max-w-3xl">
        <Reveal>
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">שאלות נפוצות</div>
            <h2 className="text-4xl sm:text-5xl">שאלות שנשאלנו</h2>
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
          <div className="font-serif text-2xl text-cream mb-3">מטבחי סן דייגו</div>
          <p className="text-sm leading-relaxed">
            עיצוב וביצוע מטבחי יוקרה בהתאמה אישית ברחבי מחוז סן דייגו.
          </p>
        </div>
        <div>
          <div className="eyebrow text-gold mb-3">יצירת קשר</div>
          <p className="text-sm">San Diego, California</p>
          <p className="text-sm mt-1">hello@sd-kitchens.example</p>
        </div>
        <div>
          <div className="eyebrow text-gold mb-3">שעות</div>
          <p className="text-sm">ראשון–חמישי · 9:00–18:00</p>
          <p className="text-sm mt-1">ביקורי בית בתיאום מראש</p>
        </div>
      </div>
      <div className="container-lux mt-12 pt-6 border-t border-cream/10 text-xs tracking-[0.2em] uppercase text-cream/50 flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} San Diego Kitchens</span>
        <span>Bespoke · Handcrafted · San Diego</span>
      </div>
    </footer>
  );
}
