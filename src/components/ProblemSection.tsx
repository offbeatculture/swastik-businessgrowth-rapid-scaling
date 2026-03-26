import { motion } from "framer-motion";

const bullets = [
  {
    emoji: "🎯",
    bold: "Great offer",
    text: " — but zero system to generate leads consistently",
    bar: "#ff7a1a",
  },
  {
    emoji: "📊",
    bold: "Revenue growing",
    text: " — but profits somehow shrinking",
    bar: "#18c3ff",
  },
  {
    emoji: "⏰",
    bold: "Team hired",
    text: " — but YOU still do everything that matters",
    bar: "#7c4dff",
  },
  {
    emoji: "🔁",
    bold: "Clients coming in",
    text: " — but leaving just as fast",
    bar: "#ffb400",
  },
];

const ProblemSection = () => (
  <section className="bg-[#050816] py-20 sm:py-24 px-5 md:px-6">
    <div className="mx-auto max-w-[1500px]">
      <div className="grid items-start gap-20 xl:grid-cols-[1.08fr_0.92fr]">

        {/* LEFT */}
       <motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="w-full text-left"
>
        {/* label */}
{/* label */}
<div className="w-full text-left">
  {/* label */}
  <div className="mb-5 flex items-center justify-start gap-3">
    <span className="h-[2px] w-8 bg-[#ff6a1a]" />
    <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#ff6a1a]">
      THE REAL PROBLEM
    </p>
  </div>

  {/* heading */}
  <h2 className="max-w-[440px] text-left text-[24px] sm:text-[36px] md:text-[64px] font-black leading-[1.1] sm:leading-[1.06] tracking-[-0.04em] text-white sm:max-w-[560px] md:max-w-[760px]">
  You&apos;re Not Stuck
  <br />
  Because
  <br />
  You&apos;re Not Working
  <br />
  Hard Enough.
</h2>
</div>

{/* paragraphs */}
<div className="mt-9 max-w-[440px] space-y-7 text-left text-[14px] leading-[1.65] text-[#8e8a97] sm:max-w-[520px] sm:text-[16px] md:max-w-[560px] md:text-[18px] md:leading-[1.72]">
  <p>
    You&apos;re putting in the hours. Clients are coming in. From the
    outside, it looks like growth.
  </p>

  <p>
    But you know the truth. You can&apos;t take a week off without
    things falling apart. You ARE the business. If you stop, revenue
    stops.
  </p>

  <p>
    That&apos;s not a revenue problem.{" "}
    <span className="font-semibold text-white">
      That&apos;s a structural problem.
    </span>{" "}
    And no amount of harder work fixes structure.
  </p>
</div>

          {/* quote */}
          <div className="relative mt-12 max-w-[620px] mx-auto md:mx-0 overflow-hidden border border-[#1b2233] bg-[#0a0f1b]">
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#ff6a1a]" />
            <div className="absolute right-6 top-1 text-[78px] font-black leading-none text-[#4a1e16]/40">
              ”
            </div>

            <div className="px-12 py-10">
  <p className="max-w-[470px] text-[17px] sm:text-[19px] md:text-[21px] font-semibold italic leading-[1.45] text-white">
    "Revenue without infrastructure is just stress that scales."
  </p>
</div>
          </div>
        </motion.div>

        {/* RIGHT */}
        {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="space-y-4 pt-10 md:pt-[88px]"
>
  {bullets.map((b, i) => (
    <div
      key={i}
      className="relative overflow-hidden border border-[#1b2233] bg-[#0a0f1b]"
    >
      <div
        className="absolute left-0 top-0 h-full w-[4px]"
        style={{ backgroundColor: b.bar }}
      />

      <div className="flex items-start gap-4 px-6 py-6 sm:px-7 sm:py-7 md:items-center md:gap-6 md:px-10 md:py-8">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[28px] sm:h-12 sm:w-12 sm:text-[30px] md:text-[32px]">
          {b.emoji}
        </div>

        <p className="max-w-[420px] text-left text-[14px] leading-[1.45] text-[#9a97a3] sm:max-w-[460px] sm:text-[15px] md:max-w-[620px] md:text-[18px] md:leading-[1.48]">
          <span className="font-semibold text-white">{b.bold}</span>
          <span>{b.text}</span>
        </p>
      </div>
    </div>
  ))}
</motion.div>

      </div>

      {/* BOTTOM TEXT */}
    <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mt-14 max-w-[1380px] mx-auto text-left text-[15px] md:text-[19px] leading-[1.75] text-[#8e8a97]"
>
  Every business — whether it&apos;s doing ₹3 lakh/month or ₹3 crore/year —
  runs on the same <span className="font-semibold text-white">8 pillars.</span>{" "}
  When one breaks, growth stalls. This bootcamp tears open all 8 across 3
  evenings. But only for people who prove they belong — by referring 3
  fellow entrepreneurs to earn their seat.
</motion.p>
    </div>
  </section>
);

export default ProblemSection;