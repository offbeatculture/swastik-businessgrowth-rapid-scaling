import { motion } from "framer-motion";

const pillars = [
  { num: "01", title: "The Offer Engine", cat: "REVENUE", color: "#ff6b3d" },   // orange
  { num: "02", title: "The Lead Machine", cat: "REVENUE", color: "#ff6b3d" },
  { num: "03", title: "The Conversion System", cat: "REVENUE", color: "#ff6b3d" },

  { num: "04", title: "The Ops Blueprint", cat: "INFRASTRUCTURE", color: "#22d3ee" }, // cyan
  { num: "05", title: "The A-Team", cat: "INFRASTRUCTURE", color: "#22d3ee" },

  { num: "06", title: "The Money Map", cat: "GROWTH", color: "#a855f7" }, // purple (adjusted)
  { num: "07", title: "The Moat", cat: "GROWTH", color: "#a855f7" },

  { num: "08", title: "The Retention Loop", cat: "RETENTION", color: "#f59e0b" }, // yellow/orange
];

const desc = [
  "Most businesses don't have a revenue problem. They have an offer problem. If you can't explain your value in one sentence, your market can't either.",
  "If you rely on one lead source, one bad month kills you. You'll map every source and circle the ones you'd survive without.",
  "A 20% improvement in conversion doubles your Lead Machine output for free. Most founders have never written their 5 diagnosis questions.",
  "A business that depends on you for everything isn't a business. It's a job with extra stress. You'll find how many hours you're wasting.",
  "The difference between a ₹50 lakh and ₹5 Crore business is the team, not the founder. You'll audit yours with uncomfortable honesty.",
  "Can you tell me your exact profit margin right now? Not revenue — profit. You'll calculate your effective hourly rate. If it shocks you, good.",
  "If your customer can't tell the difference between you and your competitor, you have a commodity. You'll write your positioning statement — and narrow until it's uncomfortable.",
  "It costs 5x more to find a new customer than to keep one. You'll design your first 7 days of onboarding and write the actual messages.",
];

const PillarsSection = () => (
  <section className="bg-[#050816] py-24 sm:py-28">
    <div className="mx-auto max-w-[1180px] px-6">

      {/* HEADER */}
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-20 max-w-[820px]"
>
  {/* LABEL */}
  <div className="mb-6 flex items-center gap-3">
    <span className="h-[2px] w-10 bg-[#12cfff]" />
    <p className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-[#12cfff]">
      THE RAPID SCALING FRAMEWORK
    </p>
  </div>

  {/* HEADING */}
  <h2 className="text-left text-[34px] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-[44px] md:text-[58px]">
    8 Pillars. Every Business Runs on Them.
    <br />
    Most Founders Can't Name Theirs.
  </h2>

  {/* PARAGRAPH */}
  <p className="mt-6 max-w-[640px] text-[16px] leading-[1.85] text-[#8b8f9f] sm:text-[17px] md:text-[18px]">
    These are the 8 mechanical systems that determine whether your business scales —
    or stays stuck. You'll learn, score, and rebuild each one across 3 days.
  </p>
</motion.div>
      {/* CARDS */}
     <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {pillars.map((p, i) => (
    <motion.div
      key={p.num}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="group relative border border-[#1b2233] bg-[#070c18] p-5 sm:p-8 transition-all duration-300 hover:border-[#2a3145]"
    >
      {/* TOP LINE */}
      <div
        className="absolute left-0 top-0 h-[2px] w-full scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
        style={{
          backgroundColor: p.color,
          transformOrigin: "left",
        }}
      />

      {/* CATEGORY */}
      <div className="mb-4 sm:mb-6">
        <span
          className="rounded px-2 py-[3px] text-[9px] sm:px-3 sm:py-1 sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em]"
          style={{
            backgroundColor: `${p.color}15`,
            color: p.color,
          }}
        >
          {p.cat}
        </span>
      </div>

      {/* NUMBER */}
      <div
        className="mb-2 text-[32px] sm:text-[46px] font-black"
        style={{
          color: p.color,
          opacity: 0.9,
          textShadow: `0 0 10px ${p.color}55`,
        }}
      >
        {p.num}
      </div>

      {/* TITLE */}
      <h3 className="mb-2 text-[15px] sm:text-[18px] font-bold text-white">
        {p.title}
      </h3>

      {/* DESC */}
      <p className="text-[12px] sm:text-[14px] leading-[1.6] sm:leading-[1.7] text-[#8b8f9f]">
        {desc[i]}
      </p>
    </motion.div>
  ))}
</div>

    </div>
  </section>
);

export default PillarsSection;