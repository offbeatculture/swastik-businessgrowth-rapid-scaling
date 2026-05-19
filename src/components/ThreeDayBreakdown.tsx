// import { motion } from "framer-motion";

// const days = [
//   {
//     eyebrow: "DAY 1 — PILLARS 1–3",
//     title: "Why Your Business Is Stuck",
//     date: "01 May",
//     // duration: "Full Day",
//     intro:
//       'Day 1 opens with why effort alone doesn’t fix structural problems. You’ll learn the 8-pillar model, all 7 stages of scale, and the "Fix Your Floor" principle. Then we go deep on the 3 revenue pillars:',
//     items: [
//       {
//         num: "1",
//         title: "The Offer Engine",
//         text: " — Rewrite your offer in one sentence. 3 get hot-seated live.",
//       },
//       {
//         num: "2",
//         title: "The Lead Machine",
//         text: " — Map your lead sources on paper. Circle the ones you’d survive without.",
//       },
//       {
//         num: "3",
//         title: "The Conversion System",
//         text: " — Write your 5 diagnosis questions. If you can’t write 5, that’s your answer.",
//       },
//     ],
//     note: "Live diagnosis of 4–5 volunteers. Real scores. Real archetypes. Real consequences called out live.",
//     leaveWith:
//       "Your stage, your archetype, your floor, and exactly where your revenue system breaks.",
//   },
//   {
//     eyebrow: "DAY 2 — PILLARS 4–8 + YOUR 90-DAY SPRINT",
//     title: "Build The Machine",
//     date: "02 May",
//     // duration: "Full Day",
//     intro:
//       "Day 2 builds the back-end and closes with your sprint — because scaling revenue without infrastructure is how businesses implode. Then: The 3 Deadliest Stage Transitions. Archetype Playbooks. Money Math (calculators open). Live Hot Seats. Your 90-Day Sprint Plan.",
//     items: [
//       {
//         num: "4",
//         title: "The Ops Blueprint",
//         text: " — List your top 5 tasks, mark which ones only you can do.",
//       },
//       {
//         num: "5",
//         title: "The A-Team",
//         text: " — Audit your team with brutal honesty.",
//       },
//       {
//         num: "6",
//         title: "The Money Map",
//         text: " — Calculate your effective hourly rate.",
//       },
//       {
//         num: "7",
//         title: "The Moat",
//         text: " — Define your positioning clearly.",
//       },
//       {
//         num: "8",
//         title: "The Retention Loop",
//         text: " — Build onboarding that keeps clients.",
//       },
//     ],
//     leaveWith:
//       "All 8 pillars mapped, your 90-day plan, and one number to check every Monday.",
//   },
// ];

// type DayCardProps = (typeof days)[number];

// const DayCard = ({
//   eyebrow,
//   title,
//   date,
//   // duration,
//   intro,
//   items,
//   note,
//   leaveWith,
// }: DayCardProps) => (
//   <div className="w-full rounded-[14px] border border-[#24262b] bg-[#0b0b0d] px-8 py-8 sm:px-10 sm:py-9">
//     <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#777d88]">
//       {eyebrow}
//     </div>

//     <h3 className="mt-3 text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[36px] md:text-[40px]">
//       {title}
//     </h3>

//     <div className="mt-2 leading-[1.15]">
//       <div className="text-[18px] font-extrabold text-white sm:text-[22px]">
//         {date}
//       </div>
//       <div className="text-[18px] text-[#98a0ab] sm:text-[22px]">{}</div>
//     </div>

//     <div className="mt-7 border-t border-[#1c1f24] pt-7">
//       <p className="text-[15px] leading-[1.8] text-[#9ea4af] sm:text-[16px]">
//         {intro}
//       </p>

//       <div className="mt-7">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-start gap-4 border-b border-[#1a1d22] py-4 last:border-b-0"
//           >
//             <div className="w-[16px] shrink-0 pt-[1px] text-[16px] font-bold text-[#f08a1a] sm:text-[17px]">
//               {item.num}
//             </div>

//             <p className="text-[15px] leading-[1.7] text-white sm:text-[17px]">
//               <span className="font-bold text-white">{item.title}</span>
//               <span className="text-white">{item.text}</span>
//             </p>
//           </div>
//         ))}
//       </div>

//       {note && (
//         <p className="mt-6 text-[15px] leading-[1.75] text-[#8e949f] sm:text-[16px]">
//           {note}
//         </p>
//       )}

//       <div className="mt-6 bg-[#111214] px-5 py-4 sm:px-6">
//         <p className="text-[14px] leading-[1.75] text-white sm:text-[15px]">
//           <span className="font-extrabold uppercase tracking-[0.14em] text-[#f08a1a]">
//             YOU LEAVE WITH:
//           </span>{" "}
//           {leaveWith}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const ThreeDayBreakdown = () => {
//   return (
//     <section className="bg-black px-6 pt-6 pb-6 sm:px-8 md:px-10">
//       <div className="mx-auto max-w-[1280px] -mt-4 space-y-5">
//         {days.map((day, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 22 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.45, delay: index * 0.08 }}
//           >
//             <DayCard {...day} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ThreeDayBreakdown;
import { motion } from "framer-motion";

const days = [
  {
    eyebrow: "DAY 1 — THE DIAGNOSIS",
    title: "End the Guessing About What's Broken.",
    date: "26 MAY • 7–10 PM",
    intro:
      'Day 1 has one purpose: end the loop of "I have a marketing problem... no, a sales problem... no, a team problem..." The owner leaves with a single, defensible diagnosis they can write on one line.',
    items: [
      {
        num: "01",
        title: "The Identity Trap",
        text: "What business are you actually in vs. what you think you're in. Ends with a silent written exercise — no sharing, no exposure — where the gap shows up on your own paper.",
      },
      {
        num: "02",
        title: "The X-Factor Hunt",
        text: "Name the specific, structural reason a customer cannot substitute you — or admit no such reason exists yet, and what it will cost to build one.",
      },
      {
        num: "03",
        title: "The Full-Body Diagnostic",
        text: "A walk through every force in a business, one by one, with a sharp truth bomb for each followed by silent scoring on paper. By 10 PM, you have a personalized scorecard with your weakest force circled.",
      },
    ],
    leaveWith:
      "A one-sentence statement of what business you're actually in, a named structural X-Factor (or an honest admission you don't have one yet), and a force-by-force scorecard with the weakest one circled. Conviction — not motivation.",
  },
  {
    eyebrow: "DAY 2 — DEMAND",
    title: "Marketing & Sales That Pull Without Pressure.",
    date: "27 MAY • 7–10 PM",
    intro:
      "Day 2 fixes the two forces that decide whether the business actually generates revenue. Most owners have these in the wrong order, working on the wrong layer, spending money on the wrong activity. By 10 PM, that confusion is gone.",
    items: [
      {
        num: "01",
        title: "The 3-Layer Marketing Stack",
        text: "Positioning, Story, Distribution — in that order. Rebuild your marketing stack layer by layer, in writing, and see why your ads, content, and reels weren't landing.",
      },
      {
        num: "02",
        title: "The Offer Rebuild",
        text: "Re-engineer your core offer until saying no feels stupid. Rewrite it on paper. Defend the new price out loud.",
      },
      {
        num: "03",
        title: "The Anti-Close Sales Process",
        text: "A sales structure built on disqualification, investigation, and letting the buyer convince themselves. Map your actual conversation onto the new structure and find where it's leaking.",
      },
    ],
    leaveWith:
      "A rewritten marketing message — positioning, story, distribution aligned. A rebuilt offer you can put in front of a prospect the next morning. A sales conversation structure that makes closing unnecessary. Clarity on whether you ever had a marketing problem in the first place.",
  },
  {
    eyebrow: "DAY 3 — PROFIT, OPTIMIZATION & SCALE",
    title: "Stop Thinking Like an Operator. Start Thinking Like an Owner.",
    date: "28 MAY • 7–10 PM",
    intro:
      "Day 3 is about everything that happens after the revenue comes in: keeping profit, growing without breaking, and stepping out of the business without it collapsing.",
    items: [
      {
        num: "01",
        title: "The Financial Truth Test",
        text: "The 4–5 numbers that actually decide survival. The difference between aspirational profit and systematic profit. Walk out with a profit allocation system you can implement on Monday.",
      },
      {
        num: "02",
        title: "The Constraint & The 3 Ways to Grow",
        text: "Find the one constraint holding the entire business back (it's almost never what you assumed). Then the 3 levers — in priority order — that compound.",
      },
      {
        num: "03",
        title: "Operator-to-Owner Ladder + Owner Energy",
        text: "The 4-rung ladder — what to stop, delegate, systematize, and own. Closes with the hidden force: if you're too scattered or tired, none of the other fixes work. You leave with a personal operating system, not just a business one.",
      },
    ],
    leaveWith:
      "The numbers to track weekly and a system to honor them. Your #1 business constraint named and a 3-lever growth plan in priority order. A map of operator vs. owner work. A personal focus system to make sure the plan actually gets executed.",
  },
];

type DayCardProps = (typeof days)[number];

const DayCard = ({
  eyebrow,
  title,
  date,
  intro,
  items,
  leaveWith,
}: DayCardProps) => {
  return (
    <div className="w-full rounded-[14px] border border-[#24262d] bg-[#15161b] px-7 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:px-8 md:py-8">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-[9px] font-black uppercase tracking-[0.32em] text-[#ff6428]">
            {eyebrow}
          </p>

          <h3 className="max-w-[720px] text-[26px] font-black leading-[1.04] tracking-[-0.05em] text-white sm:text-[32px] md:text-[36px]">
            {title}
          </h3>
        </div>

        <p className="shrink-0 pb-1 text-[12px] font-bold uppercase tracking-[0.06em] text-[#7f8592] sm:text-[13px]">
          {date}
        </p>
      </div>

      <div className="mt-5 border-t border-[#282a31] pt-6">
        <p className="max-w-[860px] text-[14px] leading-[1.55] text-[#b9c1cf] sm:text-[15px]">
          {intro}
        </p>

        <div className="mt-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#292b31] py-5 last:border-b-0 sm:grid-cols-[52px_1fr]"
            >
              <div className="text-[24px] font-black leading-none tracking-[-0.04em] text-[#ff6428] sm:text-[26px]">
                {item.num}
              </div>

              <div>
                <h4 className="text-[17px] font-black leading-tight tracking-[-0.03em] text-white sm:text-[19px]">
                  {item.title}
                </h4>

                <p className="mt-2 text-[13px] leading-[1.55] text-[#b9c1cf] sm:text-[14px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[8px] border border-[#a34520] bg-[#3a211b] px-5 py-4 sm:px-6">
          <p className="text-[13px] font-semibold leading-[1.55] text-white sm:text-[14px]">
            <span className="font-black uppercase text-[#ff6428]">
              YOU LEAVE WITH:
            </span>{" "}
            {leaveWith}
          </p>
        </div>
      </div>
    </div>
  );
};

const ThreeDayBreakdown = () => {
  return (
    <section className="bg-[#050506] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-11 max-w-[720px] text-center"
        >
          <p className="mb-4 text-[9px] font-black uppercase tracking-[0.36em] text-[#ff6428]">
            3 NIGHTS, 9 HOURS, LIVE ONLY
          </p>

          <h2 className="mx-auto max-w-[680px] text-[34px] font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-[46px] md:text-[52px]">
            What Happens — Night by Night.
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.5] text-[#b9c1cf] sm:text-[16px]">
            Live only. No replays, no recordings. The intensity of the room, the
            silent scoring, and the real-time pressure are the product — and
            they don't translate to a recording.
          </p>
        </motion.div>

        <div className="mx-auto max-w-[900px] space-y-6">
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
      </div>
    </section>
  );
};

export default ThreeDayBreakdown;