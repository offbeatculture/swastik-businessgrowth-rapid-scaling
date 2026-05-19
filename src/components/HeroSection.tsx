import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const badges = [
  {
    label: "26, 27 & 28 May",
    sub: "LIVE AT 7:00 PM",
    subClassName: "text-white/90",
  },
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

      const response = await fetch(
        "https://offbeatn8n.coachswastik.com/webhook/swastik-rsb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      navigate("/ty");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
     className="relative overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-20"
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
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 sm:mb-12"
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
          <p className="text-[14px] leading-[1.7] text-[#a1a1aa] sm:text-[16px] sm:leading-[1.8] md:text-[18px]">
            3 nights. 9 hours. The clearest diagnosis your business has ever had — and the exact levers to fix it, in the right order.
          </p>

          {/* <p className="mt-4 text-[14px] font-semibold leading-[1.7] text-[#ff6a1a] sm:text-[16px] sm:leading-[1.8] md:text-[18px]">
            Register free. Refer 3 business owners right after signing up. Get a
            ₹50,000 Business Audit done for you.
          </p> */}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        > */}
          {/* {badges.map((b) => (
            <div
              key={b.label}
              className="flex h-[78px] w-[230px] flex-col items-center justify-center rounded-[12px] border border-white/10 bg-[#121212] px-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="text-[18px] font-extrabold leading-none text-white sm:text-[20px]">
                {b.label}
              </div>

              <div
                className={`mt-2 text-[11px] uppercase tracking-[0.22em] ${
                  b.subClassName || "text-[#6f7480]"
                }`}
              >
                {b.sub}
              </div>
            </div>
          ))}
        </motion.div> */}

    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  className="mx-auto max-w-[820px] rounded-[30px] border border-[#2f343a] bg-[#3a4048] px-5 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-8 md:px-10"
>
  {/* top orange text */}
  <h3 className="mx-auto max-w-[760px] text-center text-[20px] font-black leading-[1.35] tracking-[-0.01em] text-[#ff6a1a] md:text-[22px]">
  Register free. Refer 3 business owners right after signing up.
  <br />
  Get a ₹50,000 Business Audit done for you.
</h3>

  {/* date box */}
  <div className="mx-auto mt-10 flex h-[78px] w-fit min-w-[230px] flex-col items-center justify-center rounded-[12px] border-2 border-[#4d535c] bg-[#242424] px-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]">
  <div className="text-[22px] font-extrabold leading-none text-white">
    26, 27 & 28 May
  </div>

  <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white">
    Live At 7:00 PM
  </div>
</div>

  {/* form inputs - no extra inner box */}
  <div className="mx-auto mt-10 max-w-[640px] text-left">
    <div className="grid gap-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="h-[68px] w-full rounded-2xl border border-[#4d535c] bg-[#111111] px-6 text-[18px] text-white outline-none transition placeholder:text-[#8b98b8] focus:border-[#ed7d12]"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="h-[68px] w-full rounded-2xl border border-[#4d535c] bg-[#111111] px-6 text-[18px] text-white outline-none transition placeholder:text-[#8b98b8] focus:border-[#ed7d12]"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Whatsapp Number"
        value={formData.phone}
        onChange={handleChange}
        className="h-[68px] w-full rounded-2xl border border-[#4d535c] bg-[#111111] px-6 text-[18px] text-white outline-none transition placeholder:text-[#8b98b8] focus:border-[#ed7d12]"
      />
    </div>
  </div>

  {/* button */}
  <button
    onClick={handleSubmit}
    disabled={loading}
    className="mx-auto mt-10 inline-flex min-h-[60px] min-w-[308px] items-center justify-center rounded-[6px] bg-[#ed7d12] px-10 py-5 text-sm font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#d96f0d] disabled:cursor-not-allowed disabled:opacity-70 sm:text-[15px]"
  >
    {loading ? "Submitting..." : "Register Free Now"}
  </button>

  <p className="mt-5 text-center text-[13px] text-[#b8beca]">
    Limited seats. No replays. Doers only.
  </p>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;