import { motion } from "framer-motion";

const FinalCTA = () => (
  <section
    id="signup"
    className="bg-black px-6 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32"
  >
    <div className="mx-auto max-w-[1280px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#f08a1a]" />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#f08a1a]">
            YOUR MOVE
          </p>
        </div>

        <h2 className="mx-auto max-w-[980px] text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-[52px] md:text-[68px]">
          Register Free. Refer 3.
          <br />
          <span className="text-[#f08a1a]">Get Your ₹50,000 Audit.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[760px] text-[17px] leading-[1.75] text-[#9ea3ad] sm:text-[18px]">
          Sign up in 2 minutes. Your referral link is waiting on the other side.
          Refer 3 business owners right away — and Swastik&apos;s team does the
          rest.
        </p>

        <div className="mt-8">
          <a
            href="https://forms.queueform.com/311?referrer=412891aa-7335-4ae8-acec-5fc7c9ed8ced"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[58px] items-center justify-center rounded-[4px] bg-[#df7a1c] px-10 text-[15px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:opacity-90"
          >
            Register Free Now
          </a>
        </div>

        <p className="mt-6 text-[17px] leading-[1.7] text-[#9ea3ad]">
          25 April &amp; 26 April · Free to Attend · No Replays · Doers Only
        </p>

        <div className="mx-auto mt-10 max-w-[720px] overflow-hidden bg-[#111214] text-left">
          <div className="flex">
            <div className="w-[4px] shrink-0 bg-[#f08a1a]" />
            <div className="px-8 py-10">
              <p className="text-[18px] italic leading-[1.7] text-[#b9bec8] sm:text-[19px]">
                “Talkers read landing pages. Doers show up and refer 3. Which
                one are you?”
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;