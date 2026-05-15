import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Register Free",
    desc: "Sign up with your details. Your seat is confirmed instantly. No payment. Ever.",
    color: "#f97316",
  },
  {
    num: "02",
    title: "Get Your Referral Link",
    desc: "The moment you register, you get a unique referral link. Start referring right away — no need to wait.",
    color: "#f7b500",
    badge: "⚡ INSTANTLY UNLOCKED",
  },
  {
    num: "03",
    title: "Refer 3 Business Owners",
    desc: "Share your link with entrepreneurs and founders you know. 3 register through your link — your audit is confirmed.",
    color: "#34d399",
  },
  {
    num: "04",
    title: "Get Your ₹50,000 Audit Free",
    desc: "Swastik's team does a complete Business Audit for your company — detailed report, specific action items, ready to act on.",
    color: "#a78bfa",
  },
];

const auditPoints = [
  "A complete Business Audit done by Swastik's team",
  "A detailed report covering every gap in your business",
  "Specific action items to fix what's broken and scale what's working",
  "Worth ₹50,000 — yours free, just for referring 3 founders",
];

const HowItWorks = () => (
  <section className="bg-black py-20 sm:py-24 md:py-28">
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[980px]"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="h-[2px] w-8 bg-[#f08a1a]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#f08a1a] sm:text-[12px]">
            HOW IT WORKS
          </span>
        </div>

        <h2 className="max-w-[900px] text-left text-[34px] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-[52px] md:text-[64px]">
          <span className="block">This Bootcamp Is Free.</span>
          <span className="block text-[#f08a1a]">
            And You Can Unlock a ₹50,000 Audit Right
          </span>
          <span className="block text-[#f08a1a]">When You Sign Up.</span>
        </h2>

        <p className="mt-8 max-w-[760px] text-left text-[15px] leading-[1.65] text-[#a1a1aa] sm:text-[17px] sm:leading-[1.75]">
          Register for free. The moment you sign up, you get a unique referral
          link. Share it with 3 business owners — and Swastik&apos;s team will
          do a complete ₹50,000 Business Audit for your company. You don&apos;t
          have to wait. You can start referring immediately after signing up.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="min-h-[220px] rounded-[4px] border border-white/10 bg-black px-4 py-7 sm:px-5"
            style={{ borderTop: `3px solid ${s.color}` }}
          >
            <div
              className="text-[30px] font-black leading-none sm:text-[42px]"
              style={{ color: s.color }}
            >
              {s.num}
            </div>

            {s.badge && (
              <div className="mt-3 inline-flex items-center rounded-[4px] bg-[#17351f] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4ade80]">
                {s.badge}
              </div>
            )}

            <h3 className="mt-4 text-[18px] font-extrabold leading-[1.3] text-white">
              {s.title}
            </h3>

            <p className="mt-2 text-[15px] leading-[1.65] text-[#a1a1aa]">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-[14px] border border-[#f08a1a] bg-[#191000] px-6 py-9 sm:px-8"
      >
        <h3 className="text-[28px] font-black leading-[1.15] tracking-[-0.02em] text-[#f08a1a] sm:text-[36px]">
          Refer 3 Business Owners. Get a Free Business Audit Worth ₹50,000.
        </h3>

        <p className="mt-4 max-w-[920px] text-[15px] leading-[1.7] text-white/90 sm:text-[16px]">
          You get your referral link the moment you sign up. No waiting. Refer 3
          business owners who register — and here&apos;s what you unlock:
        </p>

        <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
          {auditPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="mt-[2px] text-[18px] font-bold text-[#22c55e]">
                ✓
              </span>
              <p className="text-[15px] leading-[1.65] text-white">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;