import { useState } from "react";

type Step1 = { fullName: string; phone: string; email: string };
type Step2 = { timeline: string };
type Step3 = { zip: string; vision: string };

const timelineOptions = [
  { value: "asap", label: "בהקדם האפשרי" },
  { value: "month", label: "במהלך החודש הקרוב" },
  { value: "2-3months", label: "בעוד 2-3 חודשים" },
  { value: "exploring", label: "רק בודק/ת אפשרויות" },
];

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [s1, setS1] = useState<Step1>({ fullName: "", phone: "", email: "" });
  const [s2, setS2] = useState<Step2>({ timeline: "" });
  const [s3, setS3] = useState<Step3>({ zip: "", vision: "" });

  const canNext =
    (step === 1 && s1.fullName && s1.phone && s1.email) ||
    (step === 2 && s2.timeline) ||
    (step === 3 && s3.zip && s3.vision);

  if (done) {
    return (
      <div className="bg-cream border border-border p-10 sm:p-14 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
        <div className="eyebrow mb-4">תודה רבה</div>
        <h3 className="text-3xl sm:text-4xl mb-4">בקשתך התקבלה</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          נציג בכיר יחזור אליך תוך 24 שעות לתיאום ייעוץ אישי וללא התחייבות במטבח שלך בסן דייגו.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-cream border border-border shadow-[0_30px_80px_-30px_rgba(60,40,20,0.25)]">
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
                שלב {n}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 sm:px-12 py-10 sm:py-12">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <div className="eyebrow mb-3">פרטים אישיים</div>
              <h3 className="text-3xl sm:text-4xl">בואו נכיר</h3>
            </div>
            <Field label="שם מלא" value={s1.fullName} onChange={(v) => setS1({ ...s1, fullName: v })} />
            <Field label="מספר טלפון" type="tel" value={s1.phone} onChange={(v) => setS1({ ...s1, phone: v })} />
            <Field label="כתובת אימייל" type="email" value={s1.email} onChange={(v) => setS1({ ...s1, email: v })} />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <div className="eyebrow mb-3">לוח זמנים</div>
              <h3 className="text-2xl sm:text-3xl leading-snug">
                מה לוח הזמנים שלך להחלפת מטבח החלומות?
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
              <div className="eyebrow mb-3">מיקום וחזון</div>
              <h3 className="text-3xl sm:text-4xl">ספרו לנו על המטבח</h3>
            </div>
            <Field label="מיקוד" value={s3.zip} onChange={(v) => setS3({ ...s3, zip: v })} />
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                מה תרצו לשנות במטבח הנוכחי כדי לקבל את מטבח החלומות שלכם?
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

        <div className="flex items-center justify-between gap-4 mt-10">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-ink transition-colors"
            >
              ← חזרה
            </button>
          ) : <span />}

          <button
            disabled={!canNext}
            onClick={() => (step === 3 ? setDone(true) : setStep(step + 1))}
            className="btn-gold btn-gold-hover disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === 3 ? "שליחת בקשה" : "המשך"}
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
