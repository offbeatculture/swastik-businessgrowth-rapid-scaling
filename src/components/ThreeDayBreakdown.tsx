import { motion } from "framer-motion";

const days = [
  {
    eyebrow: "DAY 1 — PILLARS 1–3",
    title: "Why Your Business Is Stuck",
    date: "01 May",
    duration: "Full Day",
    intro:
      'Day 1 opens with why effort alone doesn’t fix structural problems. You’ll learn the 8-pillar model, all 7 stages of scale, and the "Fix Your Floor" principle. Then we go deep on the 3 revenue pillars:',
    items: [
      {
        num: "1",
        title: "The Offer Engine",
        text: " — Rewrite your offer in one sentence. 3 get hot-seated live.",
      },
      {
        num: "2",
        title: "The Lead Machine",
        text: " — Map your lead sources on paper. Circle the ones you’d survive without.",
      },
      {
        num: "3",
        title: "The Conversion System",
        text: " — Write your 5 diagnosis questions. If you can’t write 5, that’s your answer.",
      },
    ],
    note: "Live diagnosis of 4–5 volunteers. Real scores. Real archetypes. Real consequences called out live.",
    leaveWith:
      "Your stage, your archetype, your floor, and exactly where your revenue system breaks.",
  },
  {
    eyebrow: "DAY 2 — PILLARS 4–8 + YOUR 90-DAY SPRINT",
    title: "Build The Machine",
    date: "02 May",
    duration: "Full Day",
    intro:
      "Day 2 builds the back-end and closes with your sprint — because scaling revenue without infrastructure is how businesses implode. Then: The 3 Deadliest Stage Transitions. Archetype Playbooks. Money Math (calculators open). Live Hot Seats. Your 90-Day Sprint Plan.",
    items: [
      {
        num: "4",
        title: "The Ops Blueprint",
        text: " — List your top 5 tasks, mark which ones only you can do.",
      },
      {
        num: "5",
        title: "The A-Team",
        text: " — Audit your team with brutal honesty.",
      },
      {
        num: "6",
        title: "The Money Map",
        text: " — Calculate your effective hourly rate.",
      },
      {
        num: "7",
        title: "The Moat",
        text: " — Define your positioning clearly.",
      },
      {
        num: "8",
        title: "The Retention Loop",
        text: " — Build onboarding that keeps clients.",
      },
    ],
    leaveWith:
      "All 8 pillars mapped, your 90-day plan, and one number to check every Monday.",
  },
];

type DayCardProps = (typeof days)[number];

const DayCard = ({
  eyebrow,
  title,
  date,
  duration,
  intro,
  items,
  note,
  leaveWith,
}: DayCardProps) => (
  <div className="w-full rounded-[14px] border border-[#24262b] bg-[#0b0b0d] px-8 py-8 sm:px-10 sm:py-9">
    <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#777d88]">
      {eyebrow}
    </div>

    <h3 className="mt-3 text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[36px] md:text-[40px]">
      {title}
    </h3>

    <div className="mt-2 leading-[1.15]">
      <div className="text-[18px] font-extrabold text-white sm:text-[22px]">
        {date}
      </div>
      <div className="text-[18px] text-[#98a0ab] sm:text-[22px]">{duration}</div>
    </div>

    <div className="mt-7 border-t border-[#1c1f24] pt-7">
      <p className="text-[15px] leading-[1.8] text-[#9ea4af] sm:text-[16px]">
        {intro}
      </p>

      <div className="mt-7">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-b border-[#1a1d22] py-4 last:border-b-0"
          >
            <div className="w-[16px] shrink-0 pt-[1px] text-[16px] font-bold text-[#f08a1a] sm:text-[17px]">
              {item.num}
            </div>

            <p className="text-[15px] leading-[1.7] text-white sm:text-[17px]">
              <span className="font-bold text-white">{item.title}</span>
              <span className="text-white">{item.text}</span>
            </p>
          </div>
        ))}
      </div>

      {note && (
        <p className="mt-6 text-[15px] leading-[1.75] text-[#8e949f] sm:text-[16px]">
          {note}
        </p>
      )}

      <div className="mt-6 bg-[#111214] px-5 py-4 sm:px-6">
        <p className="text-[14px] leading-[1.75] text-white sm:text-[15px]">
          <span className="font-extrabold uppercase tracking-[0.14em] text-[#f08a1a]">
            YOU LEAVE WITH:
          </span>{" "}
          {leaveWith}
        </p>
      </div>
    </div>
  </div>
);

const ThreeDayBreakdown = () => {
  return (
    <section className="bg-black px-6 pt-6 pb-6 sm:px-8 md:px-10">
      <div className="mx-auto max-w-[1280px] -mt-4 space-y-5">
        {days.map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <DayCard {...day} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThreeDayBreakdown;