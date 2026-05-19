import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    cat: "DIAGNOSIS",
    title: "The Identity Trap",
    desc: "Most owners are running a product, a transaction, or a job title — not a business. Almost every dying business in history died from this single gap. You'll see it on your own paper.",
  },
  {
    num: "02",
    cat: "DIAGNOSIS",
    title: "The X-Factor",
    desc: "Why would a customer choose you over a cheaper, faster, or closer alternative? If your answer uses words like \"quality\" or \"service,\" you don't have one yet — and you'll know it by the end of the hour.",
  },
  {
    num: "03",
    cat: "DIAGNOSIS",
    title: "The Full-Body Scan",
    desc: "A force-by-force diagnostic of every system that runs a business. One sharp truth bomb per force, 30 seconds of silent scoring, and a personalized scorecard showing exactly where the death spiral begins.",
  },
  {
    num: "04",
    cat: "DEMAND",
    title: "The 3-Layer Marketing Stack",
    desc: "Marketing isn't one thing — it's three layers (Positioning, Story, Distribution) stacked in a specific order. Most owners spend 95% of the budget on the wrong layer. That's why the ads don't convert.",
  },
  {
    num: "05",
    cat: "DEMAND",
    title: "The Offer Rebuild",
    desc: "Before any sales conversation, the offer itself has to be re-engineered until saying no feels stupid. Most \"sales problems\" are weak-offer problems wearing a costume.",
  },
  {
    num: "06",
    cat: "DEMAND",
    title: "The Anti-Close Sales Process",
    desc: "Closing isn't a skill — it's the residue of two failures upstream. A sales structure built on disqualification and deep investigation, where the buyer convinces themselves and you stop pressure-selling.",
  },
  {
    num: "07",
    cat: "SCALE",
    title: "Profit, Constraint & Growth Levers",
    desc: "The 4–5 numbers that actually decide survival, a profit allocation system that makes profit unavoidable, and the one constraint holding your business back — plus the three ways to grow, in priority order.",
  },
  {
    num: "08",
    cat: "SCALE",
    title: "Operator → Owner + Owner Energy",
    desc: "The 4-rung ladder out of the bottleneck — what to stop, delegate, systematize, and own. And the hidden force underneath all of it: if you're too scattered or tired to execute, none of the other fixes work.",
  },
];

const PillarsSection = () => {
  return (
    <section className="bg-[#050506] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-[760px] text-center"
        >
          <p className="mb-3 text-[8px] font-extrabold uppercase tracking-[0.32em] text-[#ff5a1f]">
            THE DIAGNOSTIC FRAMEWORK
          </p>

          <h2 className="mx-auto max-w-[700px] text-[34px] font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-[48px] md:text-[58px]">
            The Forces That Decide Whether Your Business Scales — Or Stalls.
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[12px] leading-[1.65] text-[#c6ccd8] sm:text-[13px]">
            Every business runs on a small set of mechanical forces — identity,
            marketing, sales, profit, scale. When one is weak, growth stalls and
            you can't see why. This bootcamp diagnoses each one, in order, and
            hands you the levers to fix them.
          </p>
        </motion.div>

        {/* Cards */}
       <div className="mx-auto max-w-[980px] space-y-4">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {cards.slice(0, 6).map((card, i) => (
      <motion.div
        key={card.num}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: i * 0.04 }}
        className="relative min-h-[190px] rounded-[6px] border border-[#333641] bg-[#17181f] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
      >
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[8px] font-black uppercase tracking-[0.28em] text-[#ff5a1f]">
            {card.cat}
          </p>
          <span className="text-[9px] font-semibold text-[#656b78]">
            {card.num}
          </span>
        </div>
        <h3 className="mb-3 text-[16px] font-extrabold leading-tight text-white">
          {card.title}
        </h3>
        <p className="text-[12px] leading-[1.6] text-[#b7bdca]">{card.desc}</p>
      </motion.div>
    ))}
  </div>

  <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
    {cards.slice(6).map((card, i) => (
      <motion.div
        key={card.num}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: i * 0.04 }}
        className="relative min-h-[190px] w-full rounded-[6px] border border-[#333641] bg-[#17181f] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] lg:max-w-[calc(33.333%-8px)]"
      >
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[8px] font-black uppercase tracking-[0.28em] text-[#ff5a1f]">
            {card.cat}
          </p>
          <span className="text-[9px] font-semibold text-[#656b78]">
            {card.num}
          </span>
        </div>
        <h3 className="mb-3 text-[16px] font-extrabold leading-tight text-white">
          {card.title}
        </h3>
        <p className="text-[12px] leading-[1.6] text-[#b7bdca]">{card.desc}</p>
      </motion.div>
    ))}
  </div>
</div>
</div>
    </section>
  );
};

export default PillarsSection;