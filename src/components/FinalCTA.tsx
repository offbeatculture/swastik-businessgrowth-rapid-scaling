import { motion } from "framer-motion";

const FinalCTA = () => (
  <section id="signup" className="relative overflow-hidden py-24 sm:py-32">
    <div className="section-container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-6 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-6 bg-primary" />
          Your Move
        </p>

        <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
          3 Referrals. 3 Evenings. 8 Pillars.
          <br />
          <span className="text-gradient-orange">
            Prove You&apos;re a Doer. Get In Free.
          </span>
        </h2>

        <p className="mx-auto mb-4 max-w-xl text-[14px] sm:text-[15px] md:text-base leading-[1.65] sm:leading-relaxed text-muted-foreground">
  You&apos;ve read this far. You already know something needs to change.
  The only question is: are you someone who acts — or someone who
  bookmarks things and forgets?
</p>

<p className="mb-10 text-[12px] sm:text-sm md:text-[15px] font-bold text-foreground">
  April 7, 8, 9 · 7 PM Onwards · Free for Doers Who Refer 3.
</p>
        <a
          href="https://forms.queueform.com/311?referrer=412891aa-7335-4ae8-acec-5fc7c9ed8ced"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta mb-4 inline-block text-sm font-black uppercase tracking-[0.1em]"
        >
          Start Referring &amp; Earn Your Spot
        </a>

        <p className="mb-12 text-xs text-muted-foreground">
          Refer 3 entrepreneurs. Unlock your seat. No replays. No spectators.
        </p>

        <div className="mx-auto max-w-xl p-[1px] rounded-xl bg-gradient-to-r from-[#ff6a1a] via-[#8b5cf6] to-[#22c1ff]">
  <div className="rounded-xl bg-[#050816] px-8 py-6 text-center">
    <p className="text-sm sm:text-base font-semibold text-[#bfc3cf] leading-relaxed">
      Talkers read landing pages. Doers refer 3 people and show up. Which one are you?
    </p>
  </div>
</div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;