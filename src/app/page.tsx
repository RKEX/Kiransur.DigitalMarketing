"use client";
import AnimationComp from "@/components/HomeComp/AnimationComp";
import AwardsComp from "@/components/HomeComp/AwardsComp";
import FounderComp from "@/components/HomeComp/FounderComp";
import ToolCardComp from "@/components/HomeComp/ToolCardComp";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useEffect, useState } from "react";

const slugs = [
  "google",
  "meta",
  "youtube",
  "facebook",
  "instagram",
  "linkedin",
  "googleads",
  "googleanalytics",
  "mailchimp",
  "hubspot",
  "tiktok",
  "x",
];

export default function Page() {
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingKey((prev) => prev + 1);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="grid place-items-center">
      {/* hero part start here */}
      <div className="bg-[url('/banner.jpg')] bg-no-repeat bg-center bg-cover w-full">
        <div className="bg-black/70 h-full w-full flex items-center px-4 py-10">
          <div className="container mx-auto text-white text-center lg:text-left">
            <div className="w-full mx-auto lg:mx-0">
              <TextAnimate
                once
                className="text-3xl lg:text-6xl font-bold transition-all ease-in-out leading-tight"
                animation="slideLeft"
                by="word"
              >
                Empowering Your Digital Marketing Journey with Precision and
                Performance.
              </TextAnimate>
            </div>
            <div className="h-1 w-24 lg:w-48 bg-orange-500 my-6 mx-auto lg:mx-0" />
            <div className="w-[90vw] lg:max-w-[65vw] mx-auto lg:mx-0">
              <TextAnimate
                className="sm:text-xl transition-all ease-in-out lg:text-2xl font-semibold"
                animation="blurInUp"
                by="word"
                once
              >
                We power digital marketing with precision and performance. As a
                full-service digital marketing agency, we help brands — big and
                small — connect meaningfully with their audience across today’s
                complex digital landscape. Leveraging AI-driven strategies, we
                are built for speed and efficiency, adapting seamlessly to the
                ever-evolving demands of modern consumers.
              </TextAnimate>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition">
                Learn more
              </button>
              <button className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-md font-medium transition">
                Join us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* hero part end here */}
      {/* award start here */}
      <div className="w-full">
        <AwardsComp />
      </div>
      {/* award end here */}
      {/* tagline part start here */}
      <div className="lg:pt-24 pt-12 bg-gray-100 w-full">
        <div className="text-orange-500 font-bold text-xl text-center">
          KS digital
        </div>
        <div className="pb-6 flex-col flex mt-6 gap-6 lg:px-5 px-2 text-center">
          <TypingAnimation
            key={typingKey}
            className="text-black text-3xl text-center lg:text-6xl font-bold"
          >
            We embrace ownership.
          </TypingAnimation>
          <p className="text-center text-xl lg:text-4xl font-semibold text-black">
            Redefining what an agency should be.
          </p>
        </div>
        <div className="flex justify-center">
          <hr className="h-1 w-24 lg:w-48 bg-orange-500 mb-6 mx-auto" />
        </div>
        <div className="px-6 mb-6 text-center lg:text-2xl">
          <p>
            We’re a full-service global digital marketing agency — created by
            marketers, for marketers. From scrappy startups to enterprise
            powerhouses, <br className="hidden lg:block" />
            we fuel growth through strategic support, expert insights, and
            next-gen technology.
          </p>
        </div>
      </div>
      {/* tagline part end here */}
      {/* tsool Cards start here */}
      <ToolCardComp />
      {/* tool cards end here */}
      {/* Icon Cloud Section */}
      <AnimationComp />
      {/* founder and ratings start here */}
      <FounderComp />
      {/* founder and ratings end here */}
    </div>
  );
}
/*******  6b6e30d1-87ba-462e-aed0-e91011f73111  *******/
