import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is this really free to attend?",
    a: "Yes. Register, show up, do the work. No referrals needed to get in. No payment. No credit card. The bootcamp is completely free.",
  },
  {
    q: "When do I get my referral link?",
    a: "The moment you sign up. You don't have to wait until after the bootcamp — your referral link is available instantly after registration. You can start referring right away and get your audit confirmed before the event even begins.",
  },
  {
    q: "What's the ₹50,000 Business Audit about?",
    a: "Refer 3 business owners who register through your link — and Swastik's team will do a complete Business Audit for your company. You get a detailed report with specific action items to fix what's broken and scale what's working. This is what founders pay ₹50,000 for. Yours free for referring 3.",
  },
  {
    q: "Who counts as a valid referral?",
    a: "Entrepreneurs and business owners at any stage, any size. They need to register using your unique referral link. Once 3 register through your link, your audit is confirmed.",
  },
  {
    q: "Why should I refer people?",
    a: "Because the ₹50,000 audit is the real unlock. The bootcamp gives you the framework. The audit gives you Swastik's team doing the diagnostic work for your specific business. If you know 3 founders who need this — and you do — it costs you nothing and gains you everything.",
  },
];

const auditPoints = [
  "A clear diagnosis of the biggest bottleneck stopping your business growth",
  "Specific action items to fix what is broken and scale what is already working",
  "A detailed business audit report from Swastik’s team",
  "Clarity on what to focus on next so you stop wasting effort in the wrong places",
];

const FAQSection = () => (
  <section className="bg-black px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
    <div className="mx-auto max-w-[1280px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12"
      >
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span className="h-[2px] w-6 bg-[#f08a1a] sm:w-8" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f08a1a] sm:text-[11px] sm:tracking-[0.32em]">
            COMMON QUESTIONS
          </span>
        </div>

        <h2 className="text-[28px] font-black leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[64px]">
          Before You Decide.
        </h2>
      </motion.div>

      <div>
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border-b border-[#1a1d22] py-5 sm:py-8"
          >
            <h3 className="mb-2 text-[17px] font-extrabold leading-[1.4] text-white sm:mb-3 sm:text-[20px] md:text-[22px]">
              {f.q}
            </h3>

            <p className="max-w-[1180px] text-[15px] leading-[1.75] text-[#9ea3ad] sm:text-[17px] sm:leading-[1.85] md:text-[18px]">
              {f.a}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 rounded-[18px] border border-[#f08a1a]/70 bg-[#191000] px-6 py-9 shadow-[0_22px_70px_rgba(240,138,26,0.12)] sm:px-8 md:mt-16"
      >
        <h3 className="text-[28px] font-black leading-[1.15] tracking-[-0.02em] text-[#f08a1a] sm:text-[36px]">
          Refer 3 Business Owners. Get a Free Business Audit Worth ₹50,000.
        </h3>

        <p className="mt-4 max-w-[920px] text-[15px] leading-[1.7] text-white/90 sm:text-[16px]">
          You get your referral link the moment you sign up. No waiting. Refer 3
          business owners who register — and here's what you unlock:
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

export default FAQSection;