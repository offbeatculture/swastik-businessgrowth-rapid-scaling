import { motion } from "framer-motion";

const benefits = [
  {
    num: "01",
    title: "Your 8-Pillar Score",
    desc: "Every pillar scored. You’ll know which 1–2 to attack first and why.",
  },
  {
    num: "02",
    title: "Your Stage & Archetype",
    desc: "Your position on the 7-stage scale and the specific trap your type falls into.",
  },
  {
    num: "03",
    title: "Your 90-Day Sprint",
    desc: "Month 1 Build. Month 2 Execute. Month 3 Optimize. One number every Monday.",
  },
  {
    num: "04",
    title: "Your Offer Rewrite",
    desc: "A sharper, one-sentence offer tested against live feedback in the room.",
  },
  {
    num: "05",
    title: "Your Money Math",
    desc: "Effective hourly rate. Gross margin. CAC. The numbers you’ve been avoiding — confronted.",
  },
  {
    num: "06",
    title: "Your Onboarding System",
    desc: "A 7-day client onboarding sequence with actual messages. Ready to deploy next week.",
  },
];

const WhatYouGet = () => (
  <section className="bg-black px-6 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
    <div className="mx-auto max-w-[1280px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#f08a1a]" />
          <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.28em] sm:tracking-[0.32em] text-[#f08a1a]">
            WHAT CHANGES AFTER 2 DAYS
          </p>
        </div>

        <h2 className="max-w-[1200px] text-[26px] font-black leading-[1.15] tracking-[-0.03em] text-white sm:text-[50px] md:text-[64px]">
          You Leave With Clarity.{" "}
          <span className="text-[#f08a1a]">Not Just Content.</span>
        </h2>
      </motion.div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-[8px] border border-[#24262b] bg-[#0b0b0d] px-6 sm:px-8 py-6 sm:py-7"
          >
            <div className="mb-4 text-[32px] sm:text-[42px] font-black leading-none text-[#f08a1a]">
              {b.num}
            </div>

            <h3 className="mb-2 text-[16px] font-extrabold leading-[1.4] text-white sm:text-[20px]">
              {b.title}
            </h3>

            <p className="text-[14px] leading-[1.7] text-[#8f95a1] sm:text-[16px]">
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[14px] border border-[#d97706] bg-[#191000] px-6 sm:px-9 py-7 sm:py-9"
      >
        <h3 className="max-w-[1100px] text-[22px] font-black leading-[1.3] tracking-[-0.01em] text-[#f08a1a] sm:text-[40px]">
          + A ₹50,000 Business Audit Done For You — If You Refer 3 After Signing Up
        </h3>

        <p className="mt-5 max-w-[1120px] text-[15px] leading-[1.7] text-white/95 sm:text-[17px]">
          You get your referral link the moment you register. Refer 3 business owners right away — and Swastik&apos;s team will do a full diagnostic of your business with a detailed report and specific action items to fix and scale. No waiting. Start referring as soon as you sign up.
        </p>

        <div className="mt-8">
          <a
            // href="https://forms.queueform.com/311?referrer=412891aa-7335-4ae8-acec-5fc7c9ed8ced"
             href="https://app.queueform.com/share/form/332"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] sm:min-h-[58px] items-center justify-center rounded-[4px] bg-[#df7a1c] px-7 sm:px-9 text-[13px] sm:text-[15px] font-black uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white transition-all duration-300 hover:opacity-90"
          >
            Register Free Now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhatYouGet;