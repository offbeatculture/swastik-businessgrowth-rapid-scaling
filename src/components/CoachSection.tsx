import { motion } from "framer-motion";

const CoachSection = () => (
  <section className="py-24 sm:py-32">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image placeholder */}
       {/* Left: Image inside box */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative aspect-[4/5] rounded-2xl border border-border overflow-hidden"
>
  {/* IMAGE */}
  <img
    src="/Pic.png"
    alt="Swastik Nandakumar"
    className="w-full h-full object-cover"
  />

  {/* DARK OVERLAY (matches premium look) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

  {/* NAME TEXT */}
  <div className="absolute bottom-6 w-full text-center">
    <div className="text-xs tracking-[0.2em] uppercase text-white/70">
      Swastik Nandakumar
    </div>
  </div>
</motion.div>

        {/* Right: Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-primary" /> Your Coach
          </p>
          <h2 className="text-[26px] sm:text-4xl md:text-5xl font-black mb-6">
  Swastik
  <br />
  Nandakumar
</h2>

<p className="text-[14px] sm:text-base text-foreground font-semibold mb-4">
  Business Growth Strategist & Strategic Acquirer for Service-Based Founders.
</p>

<div className="space-y-4 text-muted-foreground leading-relaxed text-[13px] sm:text-sm md:text-base">
  <p>
    Swastik doesn't speak from theory. He speaks from iterations — from building, acquiring, and scaling businesses. He's diagnosed hundreds of founders stuck in the gap between effort and growth.
  </p>
  <p>
    His approach is direct. He doesn't motivate — he moves. He doesn't coddle — he calls out. If your business has a structural problem, he'll find it. If you're avoiding the real issue, he'll name it.
  </p>
</div>

<p className="text-primary font-bold mt-6 text-[14px] sm:text-base">
  He's not the cheerleader. He's the accelerator.
</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CoachSection;
