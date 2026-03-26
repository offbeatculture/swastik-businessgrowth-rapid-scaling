import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes — if you refer 3 entrepreneurs or business owners. No payment, no credit card, no hidden upsell. Your referrals are your ticket. The content stands on its own. If you want to work with Swastik after, that conversation happens separately.",
  },
  {
    q: "Why do I need to refer 3 people?",
    a: "Two reasons. First, if you can't get 3 business owners to register for something that's free, that's a signal about your network and execution speed — both of which matter for scaling. Second, the best rooms are built by the people in them. When everyone earns their way in, the quality of the room goes up. No passengers.",
  },
  {
    q: "Who counts as a valid referral?",
    a: "Entrepreneurs and business owners. Anyone who runs a business — at any stage, any size. They need to register using your unique referral link. Once 3 people sign up through your link, your seat is confirmed.",
  },
];

const FAQSection = () => (
  <section className="bg-[#050816] py-20 sm:py-32 px-5 md:px-6">
    <div className="mx-auto w-full max-w-[900px]">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 sm:mb-16 text-center md:text-left"
      >
        {/* Label */}
        <div className="mb-5 flex items-center justify-start gap-3">
  <span className="h-[1px] w-8 bg-[#12cfff]" />
  <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#12cfff]">
    COMMON QUESTIONS
  </span>
</div>

<h2 className="text-left text-[28px] sm:text-[42px] md:text-[52px] font-black tracking-[-0.02em] text-white">
  Before You Decide.
</h2>
      </motion.div>

      {/* FAQ List */}
      <div>
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border-b border-[#1a1d2a] py-6 sm:py-8"
          >
            {/* Question */}
            <h3 className="mb-2 text-[14px] sm:text-[16px] md:text-[17px] font-semibold text-white">
              {f.q}
            </h3>

            {/* Answer */}
            <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-[1.6] sm:leading-[1.7] text-[#9aa0ad]">
              {f.a}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default FAQSection;