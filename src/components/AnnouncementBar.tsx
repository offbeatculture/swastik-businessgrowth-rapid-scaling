import { motion } from "framer-motion";

const CTA_LINK = "https://app.queueform.com/share/form/332";

const AnnouncementBar = () => (
  <header className="w-full bg-[#050816]">
    {/* animated top strip */}
    <div className="relative w-full overflow-hidden py-[14px] text-center sm:py-[8px]">
      <div className="absolute inset-0 animate-[announcementShift_8s_linear_infinite] bg-[linear-gradient(90deg,#f2a000_0%,#e86a1f_35%,#d85424_60%,#f2a000_100%)] bg-[length:200%_100%]" />

      <div className="relative z-10">
        <p className="mx-auto max-w-[360px] px-4 text-[11px] font-extrabold uppercase leading-[1.5] tracking-[0.14em] text-white sm:max-w-none sm:text-[13px] sm:tracking-[0.18em]">
          26,27,28 MAY (Tue, Wed, Thu) • 7 PM DAILY
        </p>
      </div>
    </div>

    {/* continuously moving nav row */}
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden border-b border-[#241813] bg-[#050816]"
    >
      <div className="relative flex h-[56px] items-center overflow-hidden sm:h-[72px]">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 pr-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#6f727d] sm:text-[12px] sm:tracking-[0.30em]">
                SWASTIK NANDAKUMAR
              </span>

              <span className="text-[11px] text-[#ff6a1a] sm:text-[12px]">
                •
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#6f727d] sm:text-[12px] sm:tracking-[0.30em]">
                BUSINESS GROWTH STRATEGIST
              </span>

              <span className="text-[11px] text-[#ff6a1a] sm:text-[12px]">
                •
              </span>

              {/* <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#6f727d] sm:text-[12px] sm:tracking-[0.30em]">
                RAPID SCALING BOOTCAMP
              </span> */}

              <span className="text-[11px] text-[#ff6a1a] sm:text-[12px]">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.nav>

    <style>{`
      @keyframes announcementShift {
        0% { 
          background-position: 0% 50%; 
        }
        100% { 
          background-position: 200% 50%; 
        }
      }

      @keyframes marqueeMove {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .marquee-track {
  animation: marqueeMove 60s linear infinite;
}
    `}</style>
  </header>
);

export default AnnouncementBar;