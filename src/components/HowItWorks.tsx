import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Sign Up",
    desc: "Register with your details. You'll get a unique referral link instantly.",
    color: "#f97316",
  },
  {
    num: "02",
    title: "Refer 3 Entrepreneurs",
    desc: "Share your link with business owners and founders you know. 3 sign up through your link.",
    color: "#f7b500",
  },
  {
    num: "03",
    title: "You're In. Free.",
    desc: "3 referrals confirmed = your seat is locked. Show up April 7. No payment. Ever.",
    color: "#22c55e",
  },
];

const HowItWorks = () => (
  <section className="bg-[#050816] py-20 sm:py-24 md:py-28">
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-[2px] w-10 bg-[#f7b500]" />
          <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.35em] text-[#f7b500]">
            HOW YOU GET IN
          </span>
        </div>

       <h2 className="mx-auto max-w-[980px] text-[26px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-black leading-[1.05] sm:leading-[0.95] tracking-[-0.03em] text-white">
  <span className="block">This Bootcamp Is Free.</span>
  <span className="mt-2 block bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f7b500] bg-clip-text text-transparent">
    But You Have to Earn Your
  </span>
  <span className="block bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f7b500] bg-clip-text text-transparent">
    Seat.
  </span>
</h2>

       <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mx-auto mt-10 max-w-[980px] text-[14px] sm:text-[16px] md:text-[20px] leading-[1.7] sm:leading-[1.8] text-[#9aa0ad]"
>
  I&apos;m not giving this away to spectators. If you want in, prove you&apos;re a doer.
  The price of admission?{" "}
  <strong className="font-semibold text-white">
    Refer 3 entrepreneurs or business owners.
  </strong>{" "}
  That&apos;s it.
</motion.p>
      </motion.div>

      {/* cards */}
      <div className="mx-auto mt-16 grid grid-cols-3 gap-3 sm:max-w-[920px] sm:gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="border border-[#1c2232] bg-[#0a0f1b] px-3 py-8 text-center sm:px-8 sm:py-12"
            style={{ borderTop: `3px solid ${s.color}` }}
          >
            <div
              className="mb-6 text-[34px] font-black leading-none sm:mb-8 sm:text-[44px]"
              style={{ color: s.color }}
            >
              {s.num}
            </div>

            <h3 className="mb-4 text-[16px] font-extrabold leading-[1.25] text-white sm:mb-5 sm:text-[20px]">
              {s.title}
            </h3>

            <p className="mx-auto max-w-[120px] text-[14px] leading-[1.5] text-[#8b8f9f] sm:max-w-[250px] sm:text-[16px] sm:leading-[1.6]">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* quote block */}
     <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mx-auto mt-16 max-w-[760px]"
>
  {/* QUOTE BOX */}
  <div className="relative overflow-hidden border border-[#1c2232] bg-[linear-gradient(180deg,#0d111c_0%,#0a0f1b_100%)]">
    
    {/* LEFT BAR */}
    <div className="absolute left-0 top-0 h-full w-[4px] bg-[#f7b500]" />

    {/* QUOTE ICON */}
    <div className="absolute right-10 top-4 text-[90px] font-black leading-none text-[#5a2411]/30">
      ”
    </div>

    {/* TEXT */}
   <div className="px-10 py-12 text-center">
  <p className="mx-auto max-w-[600px] text-[14px] sm:text-[18px] md:text-[24px] font-semibold italic leading-[1.55] sm:leading-[1.65] md:leading-[1.7] text-white">
  “If you can&apos;t get 3 business owners to sign up for something that&apos;s free — that tells me everything I need to know about your network and your ability to execute.”
</p>
</div>
  </div>

  {/* BELOW TEXT */}
  <p className="mx-auto mt-12 max-w-[620px] text-center text-[13px] sm:text-[15px] md:text-[17px] leading-[1.75] sm:leading-[1.85] md:leading-[1.9] text-[#8f8f9e]">
  This isn&apos;t a filter to be difficult. It&apos;s a filter to be effective.
  The best rooms are built by the people in them. If you&apos;re a doer,
  this takes you 10 minutes. If it feels hard — that&apos;s a data point too.
</p>
</motion.div>
    </div>
  </section>
);

export default HowItWorks;