import { motion } from "framer-motion";

const ThankYouPage = () => {
  const whatsappLink = "https://chat.whatsapp.com/IvkXEFNm3mB2hSN7gV9Y9j";
  const referralFormLink = "https://app.queueform.com/share/form/332";

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-14 sm:px-6 sm:py-20">
      <div
        className="absolute inset-x-0 top-0 h-[420px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top center, hsl(18 100% 40% / 0.28), transparent 72%)",
        }}
      />
      <div
        className="absolute top-24 right-0 h-[320px] w-[320px] rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, hsl(220 100% 60% / 0.35), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#df7a1c]/30 bg-[#df7a1c]/5 px-5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#df7a1c] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff8a2a]">
              Registration Confirmed
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            You&apos;re In.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.85] text-[#a1a1aa] sm:text-[17px]">
            Your registration is confirmed. Join the WhatsApp community for
            important bootcamp updates and reminders.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mt-10 rounded-[22px] border border-white/10 bg-[#101010] p-7 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#ff8a2a]">
            Step 1
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Join WhatsApp Community
          </h2>

          <p className="mt-3 text-[15px] leading-[1.8] text-[#9ca3af]">
            Get important updates, reminders, and event instructions here.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[56px] items-center justify-center rounded-[8px] bg-[#df7a1c] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:opacity-90 sm:text-[15px]"
          >
            Join WhatsApp Community
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mt-6 rounded-[22px] border border-[#df7a1c]/25 bg-[linear-gradient(180deg,rgba(223,122,28,0.08),rgba(16,16,16,0.96))] p-7 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)]"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#ff8a2a]">
            Optional Bonus
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Want a ₹50,000 Business Audit?
          </h2>

          <p className="mt-3 text-[15px] leading-[1.8] text-[#d1d5db]">
            Refer 3 business owners using the referral form below and unlock
            your free audit.
          </p>

          <a
            href={referralFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[56px] items-center justify-center rounded-[8px] bg-[#df7a1c] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:opacity-90 sm:text-[15px]"
          >
            Refer 3 People
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouPage;