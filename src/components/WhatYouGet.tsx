import { motion } from "framer-motion";

const benefits = [
  {
    num: "01",
    title: "Your 8-Pillar Score",
    desc: "Every pillar scored and prioritised. You'll know which 1-2 to attack first and why.",
    color: "#ff6a3d",
  },
  {
    num: "02",
    title: "Your Stage & Archetype",
    desc: "Your position on the 7-stage scale, your founder archetype, and the specific trap your type falls into.",
    color: "#12cfff",
  },
  {
    num: "03",
    title: "Your 90-Day Sprint",
    desc: "Month 1 Build. Month 2 Execute. Month 3 Optimize. One number to track every Monday.",
    color: "#8b5cf6",
  },
  {
    num: "04",
    title: "Your Offer Rewrite",
    desc: "A sharper, one-sentence offer tested against live feedback in the room.",
    color: "#22c55e",
  },
  {
    num: "05",
    title: "Your Money Math",
    desc: "Effective hourly rate. Gross margin. CAC. The numbers you've been avoiding — confronted.",
    color: "#06b6d4",
  },
  {
    num: "06",
    title: "Your Onboarding System",
    desc: "A 7-day client onboarding sequence with actual messages. Ready to deploy next week.",
    color: "#f59e0b",
  },
];

const WhatYouGet = () => (
  <section className="py-20 sm:py-24 md:py-32 bg-[#050816]">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16"
      >
        {/* mobile + desktop label */}
        <p className="mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#ff6a3d] sm:text-xs sm:tracking-[0.2em]">
          <span className="h-[2px] w-9 bg-[#ff6a3d] sm:h-px sm:w-6" />
          WHAT CHANGES AFTER 3 DAYS
        </p>

        {/* mobile heading like screenshot, desktop unchanged feel */}
        <h2 className="max-w-[340px] text-[30px] font-black leading-[1.08] tracking-[-0.03em] text-white sm:max-w-none sm:text-4xl md:text-5xl">
          You Leave With Clarity.
          <br className="sm:hidden" />
          {" "}
          <span className="text-white sm:bg-gradient-to-r sm:from-[#f97316] sm:via-[#fb923c] sm:to-[#f7b500] sm:bg-clip-text sm:text-transparent">
            Not Just Content.
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="
              relative overflow-hidden border border-[#1b2233] bg-[#070c18]
              px-6 py-10
              sm:rounded-2xl sm:bg-card sm:border-border sm:p-6
            "
          >
            {/* mobile exact style: visible colored top line */}
            <div
              className="absolute left-0 top-0 h-[2px] w-full sm:h-0.5"
              style={{ backgroundColor: b.color }}
            />

            {/* mobile centered like screenshot / desktop unchanged enough */}
            <div className="text-center sm:text-left">
              <span
                className="mb-5 block text-[44px] font-black leading-none sm:mb-3 sm:text-4xl"
                style={{ color: b.color }}
              >
                {b.num}
              </span>

              <h3 className="mb-3 text-[18px] font-extrabold leading-[1.25] text-white sm:font-bold">
                {b.title}
              </h3>

              <p className="mx-auto max-w-[290px] text-[15px] leading-[1.6] text-[#8b8f9f] sm:mx-0 sm:max-w-none sm:text-sm sm:text-muted-foreground sm:leading-relaxed">
                {b.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a
  href="https://forms.queueform.com/311?referrer=412891aa-7335-4ae8-acec-5fc7c9ed8ced"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-cta text-sm tracking-[0.1em] uppercase font-black"
>
  Start Referring &amp; Earn Your Spot
</a>
      </div>
    </div>
  </section>
);

export default WhatYouGet;