import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const badges = [
  { label: "01 May & 02 May", sub: "2 FULL DAYS" },
  { label: "Full Day", sub: "PER SESSION" },
  { label: "FREE", sub: "REGISTER NOW" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill Name, Email, and Phone");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://offbeatn8n.coachswastik.com/webhook/swastik-rsb", {//webhook to add
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
      <section
      id="register"
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20"
    >
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
            FREE TO ATTEND · SIGN UP → REFER 3 → GET ₹50,000 AUDIT · NO REPLAYS
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mb-8 max-w-[720px] px-2 text-center sm:mb-10"
        >
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.7] sm:leading-[1.8] text-[#a1a1aa]">
            In 2 days, I&apos;ll show you the exact bottleneck that&apos;s capping your
            business at ₹30 Lakh, ₹1 Crore, or ₹5 Crore — and how to fix it.
          </p>

          <p className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-[1.7] sm:leading-[1.8] text-[#ff6a1a]">
            Register free. Refer 3 business owners right after signing up. Get a
            ₹50,000 Business Audit done for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex h-[78px] w-[230px] flex-col items-center justify-center rounded-[12px] border border-white/10 bg-[#121212] px-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="text-[18px] font-extrabold leading-none text-white sm:text-[20px]">
                {b.label}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#6f7480]">
                {b.sub}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mx-auto mb-10 max-w-[720px]"
        >
          <div className="rounded-[18px] border border-white/10 bg-[#121212]/90 p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="grid gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="h-[54px] w-full rounded-[10px] border border-white/10 bg-[#0f0f0f] px-4 text-white outline-none placeholder:text-[#6f7480]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="h-[54px] w-full rounded-[10px] border border-white/10 bg-[#0f0f0f] px-4 text-white outline-none placeholder:text-[#6f7480]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="h-[54px] w-full rounded-[10px] border border-white/10 bg-[#0f0f0f] px-4 text-white outline-none placeholder:text-[#6f7480]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="inline-flex min-h-[60px] min-w-[308px] items-center justify-center rounded-[4px] bg-[#df7a1c] px-10 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:text-[15px]"
          >
            {loading ? "Submitting..." : "Register Free Now"}
          </button>

          <p className="text-[13px] text-[#6f7480]">
            Limited seats. No replays. Doers only.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;