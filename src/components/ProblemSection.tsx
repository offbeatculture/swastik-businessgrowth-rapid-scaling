import { motion } from "framer-motion";

const bullets = [
  {
    bold: "Great offer",
    text: " — but zero system to generate leads consistently",
  },
  {
    bold: "Revenue growing",
    text: " — but profits somehow shrinking",
  },
  {
    bold: "Team hired",
    text: " — but YOU still do everything that matters",
  },
  {
    bold: "Clients coming in",
    text: " — but leaving just as fast",
  },
];

const ProblemSection = () => (
  <section className="bg-black px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
    <div className="mx-auto max-w-[1280px]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        {/* Label */}
        <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
          <span className="h-[2px] w-6 bg-[#f08a1a] sm:w-8" />
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f08a1a] sm:text-[11px] sm:tracking-[0.32em]">
            THE REAL PROBLEM
          </p>
        </div>

        {/* Heading */}
        <h2 className="max-w-[92%] text-[28px] font-black leading-[1.08] tracking-[-0.035em] text-white sm:max-w-[95%] sm:text-[36px] md:text-[68px] lg:text-[74px]">
          You&apos;re Not Stuck Because
          <br />
          You&apos;re Not Working Hard Enough.
        </h2>

        {/* Paragraphs */}
        <div className="mt-7 max-w-full space-y-6 text-[15px] leading-[1.7] text-[#9ea3ad] sm:mt-10 sm:max-w-[860px] sm:space-y-8 sm:text-[17px] md:text-[20px]">
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
            <span className="font-bold text-white">
              That&apos;s a structural problem.
            </span>{" "}
            And no amount of harder work fixes structure.
          </p>
        </div>

        {/* Quote Box */}
        <div className="relative mt-8 overflow-hidden border border-white/10 bg-[#0d0d0f] sm:mt-12">
          <div className="absolute left-0 top-0 h-full w-[3px] bg-[#f08a1a] sm:w-[4px]" />
          <div className="px-5 py-6 sm:px-10 sm:py-8">
            <p className="text-[17px] italic leading-[1.6] text-white sm:text-[22px] md:text-[28px]">
              “Revenue without infrastructure is just stress that scales.”
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bullets */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2"
      >
        {bullets.map((b, i) => (
          <div
            key={i}
            className="rounded-[6px] border border-white/10 bg-[#0d0d0f] px-5 py-5 sm:px-7 sm:py-7"
          >
            <p className="text-[14px] leading-[1.6] text-[#c3c7cf] sm:text-[16px] md:text-[18px]">
              <span className="font-bold text-white">{b.bold}</span>
              <span>{b.text}</span>
            </p>
          </div>
        ))}
      </motion.div>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 max-w-full text-[15px] leading-[1.75] text-[#9ea3ad] sm:mt-12 sm:max-w-[1120px] sm:text-[18px] md:text-[20px]"
      >
        Every business — whether it&apos;s doing ₹3 lakh/month or ₹3 crore/year —
        runs on the same{" "}
        <span className="font-bold text-white">8 pillars.</span> When one
        breaks, growth stalls. This bootcamp tears open all 8 across 2 full
        days.
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;