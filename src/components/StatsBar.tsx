import { motion } from "framer-motion";

const stats = [
  { num: "8", label: "Business Pillars" },
  { num: "7", label: "Stages of Scale" },
  { num: "9+", label: "Hours Live Training" },
  { num: "1", label: "90-Day Sprint Plan" },
  { num: "5+", label: "Live Hot Seats" },
  { num: "3", label: "Referrals to Get In Free" },
];

const marqueeStats = [...stats, ...stats];

const StatsBar = () => {
  return (
    <section
      className="relative overflow-hidden border-y border-border py-6"
      style={{ background: "hsl(240 8% 6%)" }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[hsl(240_8%_6%)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[hsl(240_8%_6%)] to-transparent" />

      <motion.div
        className="flex w-max items-center gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18,
        }}
      >
        {marqueeStats.map((s, index) => (
          <div
            key={`${s.label}-${index}`}
            className="flex items-center gap-2.5 whitespace-nowrap px-2"
          >
            <span className="text-lg font-black text-primary">{s.num}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsBar;