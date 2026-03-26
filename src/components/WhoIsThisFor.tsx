import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const items = [
  "Entrepreneurs at any stage — solopreneurs, service founders, agency owners, product builders, coaches, consultants",
  "Working hard but not seeing proportional growth in revenue, freedom, or both",
  "Feeling like the business depends entirely on you — and you know that's a problem",
  "A doer — someone who takes action, not someone who collects free content and does nothing",
  "Want to move from self-employed to running a business that operates without you",
  "Connected enough to refer 3 business owners — because strong networks are how real businesses grow",
];

const WhoIsThisFor = () => (
  <section className="py-24 sm:py-32">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.35em] text-[#8b5cf6]">
  <span className="h-[2px] w-10 bg-[#8b5cf6]" />
  WHO THIS IS FOR
</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
          This Room Is For Doers.
          <br />
          Not Dreamers. Not Spectators.
        </h2>
      </motion.div>

      <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-muted-foreground max-w-3xl mb-12 text-[14px] sm:text-[15px] md:text-base leading-[1.65] sm:leading-relaxed"
>
  Whether you just started or you're running a ₹10 crore operation — the 8 pillars apply at every stage. But this room is earned, not given. You referred 3 people to get here. That already says something about you.
</motion.p>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
          >
            <CheckSquare className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <span className="text-sm leading-relaxed">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoIsThisFor;
