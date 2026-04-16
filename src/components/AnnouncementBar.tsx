import { motion } from "framer-motion";

const CTA_LINK =
  "https://forms.queueform.com/311?referrer=412891aa-7335-4ae8-acec-5fc7c9ed8ced";

const AnnouncementBar = () => (
  <header className="w-full bg-[#050816]">
    {/* animated top strip */}
    <div className="relative w-full overflow-hidden py-[14px] text-center sm:py-[8px]">
      <div className="absolute inset-0 animate-[announcementShift_8s_linear_infinite] bg-[linear-gradient(90deg,#f2a000_0%,#e86a1f_35%,#d85424_60%,#f2a000_100%)] bg-[length:200%_100%]" />
      <div className="relative z-10">
        <p className="mx-auto max-w-[360px] px-4 text-[11px] font-extrabold uppercase leading-[1.5] tracking-[0.14em] text-white sm:max-w-none sm:text-[13px] sm:tracking-[0.18em]">
          {/* APRIL 7, 8, 9 • 7 PM ONWARDS • FREE WHEN YOU REFER 3 ENTREPRENEURS • DOERS ONLY */}
          25,26 April • FREE TO ATTEND • REFER 3 AFTER SIGN UP → GET ₹50,000 BONUS • DOERS ONLY
        </p>
      </div>
    </div>

    {/* nav row */}
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full border-b border-[#241813] bg-[#050816]"
    >
      {/* MOBILE */}
      <div className="grid grid-cols-[120px_16px_130px_110px] items-center justify-center gap-2 px-3 py-4 sm:hidden">
        <div className="text-center text-[10px] font-extrabold uppercase leading-[1.25] tracking-[0.18em] text-[#6f727d]">
          <div>SWASTIK</div>
          <div>NANDAKUMAR</div>
        </div>

        <div className="text-center text-[11px] text-[#ff6a1a]">•</div>

        <div className="text-center text-[10px] font-extrabold uppercase leading-[1.25] tracking-[0.18em] text-[#6f727d]">
          <div>BUSINESS</div>
          <div>GROWTH</div>
          <div>STRATEGIST</div>
        </div>

        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-[#b84a18] px-3 py-3 text-center text-[10px] font-extrabold uppercase leading-[1.25] tracking-[0.14em] text-[#ff6a1a]"
        >
          <span>
            Register
            <br />
            Free
          </span>
        </a>
      </div>

      {/* DESKTOP */}
      <div className="relative hidden h-[72px] w-full sm:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-5">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.30em] text-[#6f727d]">
              SWASTIK NANDAKUMAR
            </span>
            <span className="text-[12px] text-[#ff6a1a]">•</span>
            <span className="text-[12px] font-extrabold uppercase tracking-[0.30em] text-[#6f727d]">
              BUSINESS GROWTH STRATEGIST
            </span>
          </div>
        </div>

        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-6 top-1/2 inline-flex h-[36px] -translate-y-1/2 items-center justify-center border border-[#b84a18] px-7 text-[12px] font-extrabold uppercase tracking-[0.20em] text-[#ff6a1a] transition hover:bg-[#ff6a1a]/10"
        >
          Register Free
        </a>
      </div>
    </motion.nav>

    <style>{`
      @keyframes announcementShift {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }
    `}</style>
  </header>
);

export default AnnouncementBar;