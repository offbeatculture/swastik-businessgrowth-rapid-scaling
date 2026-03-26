import { motion } from "framer-motion";

const days = [
  {
    label: "DAY 1 — PILLARS 1-3",
    title: "Why Your Business Is Stuck",
    date: "April 7",
    time: "7 PM · 3 Hours",
    intro:
      `Day 1 opens with why effort alone doesn't fix structural problems. You'll learn the 8-pillar model, all 7 stages of scale, and the "Fix Your Floor" principle. Then we go deep on the 3 revenue pillars:`,
    items: [
      {
        num: "1",
        bold: "The Offer Engine",
        text: " — Rewrite your offer in one sentence. 3 get hot-seated live.",
      },
      {
        num: "2",
        bold: "The Lead Machine",
        text: " — Map your lead sources on paper. Circle the ones you'd survive without.",
      },
      {
        num: "3",
        bold: "The Conversion System",
        text: " — Write your 5 diagnosis questions. If you can't write 5, that's your answer.",
      },
    ],
    extra:
      "Live diagnosis of 4-5 volunteers. Real scores. Real archetypes. Real consequences called out live.",
    leaveWith:
      "Your stage, your archetype, your floor, and exactly where your revenue system breaks.",
  },
  {
    label: "DAY 2 — PILLARS 4-8",
    title: "Build The Machine",
    date: "April 8",
    time: "7 PM · 3 Hours",
    intro:
      "Day 2 builds the back-end — because scaling revenue without infrastructure is how businesses implode.",
    items: [
      {
        num: "4",
        bold: "The Ops Blueprint",
        text: " — List your top 5 tasks, mark which ones only you can do.",
      },
      {
        num: "5",
        bold: "The A-Team",
        text: " — Audit your team with brutal honesty.",
      },
      {
        num: "6",
        bold: "The Money Map",
        text: " — Calculate your effective hourly rate.",
      },
      {
        num: "7",
        bold: "The Moat",
        text: " — Define your positioning clearly.",
      },
      {
        num: "8",
        bold: "The Retention Loop",
        text: " — Build onboarding that keeps clients.",
      },
    ],
    extra: null,
    leaveWith: "All 8 pillars fully mapped with clear execution plan.",
  },
  {
    label: "DAY 3 — YOUR PLAN",
    title: "The Traps, The Math, and Your Sprint",
    date: "April 9",
    time: "7 PM · 2-2.5 Hrs",
    intro:
      "Day 3 is not a recap. It's entirely new content you can't get from pillar deep-dives.",
    items: [],
    paragraphs: [
      {
        bold: "The 3 Deadliest Stage Transitions:",
        text: " Solo Ceiling to Crore Chase. Crore Chase to Real Business. Real Business to The Machine.",
      },
      {
        bold: "Archetype Playbooks:",
        text: " A Hustler and a Perfectionist both scored 3 on Ops. Their fix is completely different.",
      },
      {
        bold: "The Money Math Block:",
        text: " Calculators open. Effective hourly rate. Gross margin per client. CAC.",
      },
      {
        bold: "Live Case Studies + Hot Seats:",
        text: " Real businesses diagnosed. 3-4 attendees pulled live.",
      },
      {
        bold: "Your 90-Day Sprint:",
        text: " 1-2 focus pillars. Month 1 Build. Month 2 Execute. Month 3 Optimize.",
      },
    ],
    extra: null,
    leaveWith:
      "A plan with specific pillars, actions, and one number to check every Monday.",
  },
];

const ThreeDayBreakdown = () => (
  <section className="bg-[#050816] py-16 sm:py-24">
    <div className="mx-auto max-w-[1120px] px-4 sm:px-6">

      {/* Header */}
      <div className="mb-12 sm:mb-20 max-w-[920px]">
        <div className="mb-5 flex items-center gap-3 sm:gap-4">
          <div className="h-[2px] w-8 sm:w-10 bg-[#f7b500]" />
          <p className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[#f7b500]">
            THE 3-DAY BREAKDOWN
          </p>
        </div>

        <h2 className="text-[34px] sm:text-[52px] md:text-[64px] font-black leading-[1.05] tracking-[-0.03em] text-white">
          Not a Webinar. Not a Motivational Talk.
          <br />
          A Working Session.
        </h2>

        <p className="mt-6 sm:mt-8 max-w-[860px] text-[13px] sm:text-[15px] md:text-[16px] leading-[1.65] sm:leading-[1.75] text-[#8b8f9f]">
          You earned your seat by referring 3 entrepreneurs. Now use it. You arrive with your assessment already scored. Each evening dismantles a specific layer of your business and gives you something to execute immediately. No passengers in this room.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-8 sm:space-y-10">
        {days.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="w-full border border-[#1b2233] bg-[#070c18] px-7 py-8 sm:px-12 sm:py-12"
          >
            {/* Top */}
            <div className="mb-7">
              <p className="mb-5 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.28em] sm:tracking-[0.3em] text-[#f0d6c3]">
                {d.label}
              </p>

              <h3 className="max-w-[360px] sm:max-w-[620px] text-[28px] sm:text-[32px] md:text-[42px] font-black leading-[1.1] tracking-[-0.03em] text-white">
                {d.title}
              </h3>

              <div className="mt-5 sm:mt-6">
                <p className="text-[16px] sm:text-[18px] font-extrabold text-white">
                  {d.date}
                </p>
                <p className="mt-1 text-[13px] sm:text-[15px] text-[#8b8f9f]">
                  {d.time}
                </p>
              </div>
            </div>

            <div className="mb-7 sm:mb-8 h-px bg-[#1b2233]" />

            {/* Intro */}
            <p className="mb-8 max-w-[520px] sm:max-w-[820px] text-[13px] sm:text-[16px] md:text-[18px] leading-[1.65] sm:leading-[1.85] text-[#8b8f9f]">
              {d.intro}
            </p>

            {/* Items */}
            {d.items.length > 0 && (
              <div className="mb-8">
                {d.items.map((item, idx) => (
                  <div
                    key={item.num}
                    className={`flex items-start gap-3 sm:gap-4 py-4 sm:py-5 ${
                      idx !== d.items.length - 1 ? "border-b border-[#1b2233]" : ""
                    }`}
                  >
                    <span className="w-5 shrink-0 pt-0.5 text-[14px] sm:text-[16px] font-extrabold text-white">
                      {item.num}
                    </span>

                    <p className="max-w-[500px] sm:max-w-[820px] text-[13px] sm:text-[15px] md:text-[16px] leading-[1.6]">
                      <span className="font-extrabold text-white">{item.bold}</span>
                      <span className="text-[#8b8f9f]">{item.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Paragraphs */}
            {d.paragraphs && (
              <div className="mb-8 space-y-4">
                {d.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="max-w-[520px] sm:max-w-[820px] text-[13px] sm:text-[16px] md:text-[18px] leading-[1.65] sm:leading-[1.8] text-[#8b8f9f]"
                  >
                    <span className="font-extrabold text-white">{p.bold}</span>
                    <span>{p.text}</span>
                  </p>
                ))}
              </div>
            )}

            {/* Extra */}
            {d.extra && (
              <p className="mb-8 max-w-[520px] sm:max-w-[820px] text-[13px] sm:text-[16px] md:text-[18px] leading-[1.65] sm:leading-[1.8] text-[#8b8f9f]">
                {d.extra}
              </p>
            )}

            {/* Leave With */}
            <div className="border border-[#1b2233] bg-[#0c111d] px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-extrabold leading-[1.65] text-white">
                YOU LEAVE WITH:{" "}
                <span className="font-normal text-[#cbd5f5]">{d.leaveWith}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeDayBreakdown;