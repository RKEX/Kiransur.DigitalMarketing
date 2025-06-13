import Image from "next/image";
import { NumberTicker } from "../magicui/number-ticker";

const stats = [
  { label: "Client Satisfaction", value: 512 },
  { label: "Likes", value: 980 },
  { label: "5-Star Ratings", value: 276 },
  { label: "Campaigns Delivered", value: 134 },
  { label: "Conversions Generated", value: 1520 },
  { label: "Social Reach (in K)", value: 210 },
  { label: "Ad Spend Managed ($)", value: 12000 },
  { label: "Avg ROI Boost (%)", value: 320 },
];

const FounderComp = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#eef2f5] to-[#c3cfe2] dark:from-[#0f0f0f] dark:to-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Founder Image & Quote */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-[260px] h-[360px] relative rounded-2xl overflow-hidden shadow-md border border-gray-300 dark:border-neutral-700">
            <Image
              src="/founder.jpg" // Make sure you use your actual image path
              alt="Founder"
              layout="fill"
              objectFit="cover"
              priority
              quality={90}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-6 italic text-sm text-gray-700 dark:text-gray-400 max-w-xs leading-relaxed">
            "Great things in business are never done by one person. They're done
            by a team."
          </p>
          <p className="text-sm mt-2 font-semibold text-gray-800 dark:text-white">
            — Kiran Sur, Founder
          </p>
        </div>

        {/* Text & Stats */}
        <div>
          <h2 className="text-4xl font-extrabold text-neutral-900 dark:text-white mb-4">
            Founder’s Impact
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            With vision and dedication, our founder built a company that values
            people, results, and creativity. The impact is reflected in the
            numbers—and the trust of our clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md p-5 rounded-xl shadow-md text-center border border-neutral-200 dark:border-neutral-800"
              >
                <NumberTicker
                  value={item.value}
                  className="text-2xl font-bold text-black dark:text-white"
                />
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderComp;
