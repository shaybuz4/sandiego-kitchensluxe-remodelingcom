import { useState } from "react";

type Step1 = { fullName: string; phone: string; email: string };
type Step2 = { timeline: string };
type Step3 = { zip: string; vision: string };

const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "month", label: "Within the next month" },
  { value: "2-3months", label: "Within the next 2-3 months" },
  { value: "exploring", label: "Just exploring my options" },
];

const GHL_WEBHOOK_URL = "YOUR_GHL_WEBHOOK_URL_HERE";

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [s1, setS1] = useState<Step1>({ fullName: "", phone: "", email: "" });
  const [s2, setS2] = useState<Step2>({ timeline: "" });
  const [s3, setS3] = useState<Step3>({ zip: "", vision: "" });

  const canNext =
    (step === 1 && s1.fullName && s1.phone && s1.email) ||
    (step === 2 && s2.timeline) ||
    (step === 3 && s3.zip && s3.vision);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    const payload = {
      fullName: s1.fullName,
      phone: s1.phone,
      email: s1.email,
      timeline: timelineOptions.find((o) => o.value === s2.timeline)?.label ?? s2.timeline,
      zipCode: s3.zip,
      vision: s3.vision,
      source: "San Diego Luxury Kitchens Landing Page",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setDone(true);
    } catch {
      setError("We couldn't submit your request. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };


  if (done) {
    return (
      <div className="bg-cream border border-border p-10 sm:p-14 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
        <div className="eyebrow mb-4">Thank you</div>
        <h3 className="text-3xl sm:text-4xl mb-4">Your request has been received</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          A senior designer will contact you within 24 hours to schedule a personal, no-obligation
          consultation in your San Diego kitchen.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-cream border border-border text-ink shadow-[0_30px_80px_-30px_rgba(60,40,20,0.25)]">
      {/* Progress */}
      <div className="flex items-center gap-2 px-8 sm:px-12 pt-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex-1">
            <div
              className={`h-[2px] transition-all duration-700 ${
                n <= step ? "bg-gold-deep" : "bg-border"
              }`}
            />
            <div className="mt-2 flex items-center justify-between">
              <span
                className={`text-[0.7rem] tracking-[0.2em] uppercase ${
                  n === step ? "text-ink" : "text-muted-foreground"
                }`}
              >
                Step {n}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 sm:px-12 py-10 sm:py-12">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <div className="eyebrow mb-3">Personal Details</div>
              <h3 className="text-3xl sm:text-4xl">Let's get acquainted</h3>
            </div>
            <Field label="Full Name" value={s1.fullName} onChange={(v) => setS1({ ...s1, fullName: v })} />
            <Field label="Phone Number" type="tel" value={s1.phone} onChange={(v) => setS1({ ...s1, phone: v })} />
            <Field label="Email Address" type="email" value={s1.email} onChange={(v) => setS1({ ...s1, email: v })} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <div className="eyebrow mb-3">Timeline</div>
              <h3 className="text-2xl sm:text-3xl leading-snug">
                What is your timeline for your dream kitchen replacement?
              </h3>
            </div>
            <div className="space-y-3">
              {timelineOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-4 border p-5 cursor-pointer transition-all ${
                    s2.timeline === opt.value
                      ? "border-gold-deep bg-sand/40"
                      : "border-border hover:border-stone"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={opt.value}
                    checked={s2.timeline === opt.value}
                    onChange={(e) => setS2({ timeline: e.target.value })}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 rounded-full border-2 shrink-0 ${
                      s2.timeline === opt.value ? "border-gold-deep bg-gold-deep" : "border-stone"
                    }`}
                  />
                  <span className="text-base">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <div className="eyebrow mb-3">Location & Vision</div>
              <h3 className="text-3xl sm:text-4xl">Tell us about your kitchen</h3>
            </div>
            <Field label="Zip Code" value={s3.zip} onChange={(v) => setS3({ ...s3, zip: v })} />
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                What would you like to change in your current kitchen to get your dream kitchen?
              </label>
              <textarea
                value={s3.vision}
                onChange={(e) => setS3({ ...s3, vision: e.target.value })}
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 text-ink focus:border-gold-deep focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {error && (
          <p className="mt-6 text-sm text-destructive">{error}</p>
        )}

        <div className="flex items-center justify-between gap-4 mt-10">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              disabled={submitting}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-ink transition-colors disabled:opacity-40"
            >
              ← Back
            </button>
          ) : <span />}

          <button
            disabled={!canNext || submitting}
            onClick={() => (step === 3 ? handleSubmit() : setStep(step + 1))}
            className="btn-gold btn-gold-hover disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === 3 ? (submitting ? "Sending…" : "Submit Request") : "Continue"}
          </button>
        </div>

      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-sm text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-border px-4 py-3 text-ink focus:border-gold-deep focus:outline-none transition-colors"
      />
    </div>
  );
}
