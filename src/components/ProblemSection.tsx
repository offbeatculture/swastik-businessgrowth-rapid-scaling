// import { motion } from "framer-motion";

// const bullets = [
//   {
//     bold: "A good offer",
//     text: " — but no system to generate leads consistently.",
//   },
//   {
//     bold: "Revenue growing",
//     text: " — but profits somehow shrinking",
//   },
//   {
//     bold: "A team in place ",
//     text: " — but you still do every task that matters.",
//   },
//   {
//     bold: "Clients coming in",
//     text: " — but leaving just as fast",
//   },
//    {
//     bold: "A calendar packed with motion",
//     text: " — and a business that won't move.",
//   },
// ];

// const ProblemSection = () => (
//   <section className="bg-black px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
//     <div className="mx-auto max-w-[1280px]">
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="w-full"
//       >
//         {/* Label */}
//         <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
//           <span className="h-[2px] w-6 bg-[#f08a1a] sm:w-8" />
//           <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#f08a1a] sm:text-[11px] sm:tracking-[0.32em]">
//             THE REAL PROBLEM
//           </p>
//         </div>

//         {/* Heading */}
//         <h2 className="max-w-[92%] text-[28px] font-black leading-[1.08] tracking-[-0.035em] text-white sm:max-w-[95%] sm:text-[36px] md:text-[68px] lg:text-[74px]">
//           You&apos;re Not Stuck Because
//           <br />
//           You&apos;re Not Working Hard Enough.
//         </h2>

//         {/* Paragraphs */}
//         <div className="mt-7 max-w-full space-y-6 text-[15px] leading-[1.7] text-[#9ea3ad] sm:mt-10 sm:max-w-[860px] sm:space-y-8 sm:text-[17px] md:text-[20px]">
//           <p>
//             You&apos;re putting in the hours. Clients are coming in. From the
//             outside, it looks like growth.
//           </p>

//           <p>
//             But you know the truth. You can&apos;t take a week off without
//             things falling apart. You ARE the business. If you stop, revenue
//             stops.
//           </p>

//           <p>
//             That&apos;s not a revenue problem.{" "}
//             <span className="font-bold text-white">
//               That&apos;s a structural problem.
//             </span>{" "}
//             And no amount of harder work fixes structure.
//           </p>
//         </div>

//         {/* Quote Box */}
//         <div className="relative mt-8 overflow-hidden border border-white/10 bg-[#0d0d0f] sm:mt-12">
//           <div className="absolute left-0 top-0 h-full w-[3px] bg-[#f08a1a] sm:w-[4px]" />
//           <div className="px-5 py-6 sm:px-10 sm:py-8">
//             <p className="text-[17px] italic leading-[1.6] text-white sm:text-[22px] md:text-[28px]">
//               “Revenue without infrastructure is just stress that scales.”
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Bullets */}
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2"
//       >
//         {bullets.map((b, i) => (
//           <div
//             key={i}
//             className="rounded-[6px] border border-white/10 bg-[#0d0d0f] px-5 py-5 sm:px-7 sm:py-7"
//           >
//             <p className="text-[14px] leading-[1.6] text-[#c3c7cf] sm:text-[16px] md:text-[18px]">
//               <span className="font-bold text-white">{b.bold}</span>
//               <span>{b.text}</span>
//             </p>
//           </div>
//         ))}
//       </motion.div>

//       {/* Bottom text */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="mt-8 max-w-full text-[15px] leading-[1.75] text-[#9ea3ad] sm:mt-12 sm:max-w-[1120px] sm:text-[18px] md:text-[20px]"
//       >
//         Every business — whether it&apos;s doing ₹3 lakh/month or ₹3 crore/year —
//         runs on the same{" "}
//         <span className="font-bold text-white">8 pillars.</span> When one
//         breaks, growth stalls. This bootcamp tears open all 8 across.
//       </motion.p>
//     </div>
//   </section>
// );

// export default ProblemSection;
import { motion } from "framer-motion";

const bullets = [
  {
    bold: "A good offer",
    text: " — but no system to generate leads consistently.",
  },
  {
    bold: "Revenue growing",
    text: " — while profit is somehow shrinking.",
  },
  {
    bold: "A team in place",
    text: " — but you still do every task that matters.",
  },
  {
    bold: "Clients coming in",
    text: " — and leaving just as fast.",
  },
  {
    bold: "A calendar packed with motion",
    text: " — and a business that won't move.",
  },
];

const ProblemSection = () => (
  <section className="bg-[#0b0b0d] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
    <div className="mx-auto grid max-w-[1080px] items-start gap-10 lg:grid-cols-[1fr_430px] lg:gap-14">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <p className="mb-5 text-[9px] font-extrabold uppercase tracking-[0.34em] text-[#ff6428]">
          THE REAL PROBLEM
        </p>

        <h2 className="max-w-[520px] text-[36px] font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-[46px] md:text-[54px] lg:text-[56px]">
          You're Not Stuck Because You're Not Working Hard Enough.
        </h2>

        <p className="mt-7 max-w-[500px] text-[15px] leading-[1.6] text-[#aeb6c5] sm:text-[16px] md:text-[17px]">
          You've put in the hours. Clients are coming in. From the outside, it
          looks like growth. But you know the truth: you can't take a week off
          without things slipping. You <em className="text-white">are</em> the
          business. That's not a revenue problem — that's a structural one. And
          no amount of harder work fixes structure.
        </p>

        <div className="mt-8 max-w-[430px] rounded-[7px] border border-[#ff6428]/40 bg-[#341c15] px-6 py-5">
          <p className="text-[14px] font-semibold italic leading-[1.55] text-white sm:text-[15px]">
            "Revenue without infrastructure is just stress that scales."
          </p>
        </div>
      </motion.div>

      {/* Right Cards */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="flex flex-col gap-4"
      >
        {bullets.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative rounded-[7px] border border-[#272a32] bg-[#15161b] px-6 py-5"
          >
            <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-[7px] bg-[#ff6428]" />

            <p className="text-[14px] font-semibold leading-[1.5] text-white sm:text-[15px]">
              <span>{b.bold}</span>
              <span>{b.text}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;