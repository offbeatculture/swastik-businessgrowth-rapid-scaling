import { motion } from "framer-motion";

const badges = [
  { icon: "📅", label: "April 7, 8, 9", sub: "3 EVENINGS" },
  { icon: "⏱️", label: "7 PM Onwards", sub: "3 HOURS / EVENING" },
  { icon: "🔥", label: "FREE", sub: "REFER 3 TO UNLOCK" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
    <div
      className="absolute top-0 left-0 right-0 h-[500px] opacity-30"
      style={{
        background:
          "radial-gradient(ellipse at top center, hsl(18 100% 40% / 0.25), transparent 70%)",
      }}
    />
    <div
      className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
      style={{
        background:
          "radial-gradient(circle, hsl(220 100% 60% / 0.4), transparent 70%)",
      }}
    />

    <div className="section-container relative z-10 text-center">
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mb-10 sm:mb-12 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5"
>
  <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
  <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
    Refer 3 Entrepreneurs · Attend Free · No Replays
  </span>
</motion.div>

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="mb-8 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-[5.5rem]"
>
  Stop Working Harder,
  <br />
  <span className="text-gradient-orange">On The Wrong Thing.</span>
</motion.h1>

     <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="mx-auto mb-8 max-w-[680px] px-2 text-center text-[14px] sm:text-[16px] md:text-[18px] leading-[1.7] sm:leading-[1.8] text-[#a1a1aa] sm:mb-10 sm:max-w-[720px]"
>
  In 3 days, I&apos;ll show you the exact bottleneck that&apos;s capping your
  business at ₹30 Lakh, ₹1 Crore, or ₹5 Crore —{" "}
  <span className="font-semibold text-[#ff9d2f]">and how to fix it.</span>{" "}
  Refer 3 entrepreneurs.{" "}
  <span className="font-extrabold tracking-[0.03em] text-[#ff9d2f]">
    GET IN FREE.
  </span>
</motion.p>

     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  className="mb-12 flex flex-col items-center gap-5"
>
  {badges.map((b) => (
    <div
      key={b.label}
      className="flex w-[260px] items-center gap-4 border border-[#1b2233] bg-[#0a0f1b] px-7 py-5"
    >
      {/* ICON */}
      <span className="text-[20px]">{b.icon}</span>

      {/* TEXT */}
      <div className="text-left">
        <div className="text-[15px] font-extrabold leading-[1.2] text-white">
          {b.label}
        </div>
        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7d7f8b]">
          {b.sub}
        </div>
      </div>
    </div>
  ))}
</motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <a
          href="https://forms.queueform.com/311?referrer=412891aa-7335-4ae8-acec-5fc7c9ed8ced"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta px-10 py-5 text-sm font-black uppercase tracking-[0.1em] sm:text-base"
        >
          Start Referring &amp; Earn Your Spot
        </a>
        <p className="text-xs text-muted-foreground">
          Limited seats. No replays. Doers only.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;