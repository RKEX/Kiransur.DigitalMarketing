import { IconCloud } from "../magicui/icon-cloud";
import { Particles } from "../magicui/particles";

const slugs = [
  "google", // Google Search & Ads
  "meta", // Facebook & Instagram Ads
  "youtube", // Video marketing
  "facebook", // Social media marketing
  "instagram", // Influencer & visual marketing

  "pinterest", // Visual discovery & shopping
  "snapchat", // Gen-Z marketing
  "mailchimp", // Email marketing
  "hubspot", // CRM + inbound marketing
  "semrush", // SEO & PPC tools

  "canva", // Content design
  "buffer", // Social media scheduling
  "googleads", // Google Ads campaigns
  "googleanalytics", // Website traffic tracking
  "shopify", // E-commerce marketing
  "wordpress", // Blog + content marketing
];

const AnimationComp = () => {
  // for converting slugs to images
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <>
      <div className="relative bg-black w-full overflow-hidden border-b">
        {/* particles background */}
        <div className="absolute inset-0 z-0 h-full min-h-screen">
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            refresh
          />
        </div>

        {/* Main content with higher z-index */}
        <div className="relative z-10 w-full text-white px-4 py-24">
          <div className="max-w-7xl mx-auto text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by Global Digital Leaders
            </h2>
            <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
              We collaborate with industry-leading platforms to deliver the best
              results in digital marketing.
            </p>
          </div>
          {/* icon cloud start here */}
          <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[400px]">
            <IconCloud images={images} />
          </div>
          {/*  icon cloud end here */}
          {/* global leaders start here */}
          <div className="mt-12 text-center px-4">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Powering growth with global technology leaders.
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              From Google and Meta to HubSpot and TikTok — our integrated
              strategies and partnerships deliver measurable outcomes that move
              your business forward.
            </p>
          </div>
          {/* global leaders end here */}
        </div>
      </div>
    </>
  );
};

export default AnimationComp;
