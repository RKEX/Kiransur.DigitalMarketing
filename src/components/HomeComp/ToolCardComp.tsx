import { TextAnimate } from "../magicui/text-animate";

const ToolCardComp = () => {
  return (
    <>
      <div className="bg-gray-100 w-full pt-5 ">
        {/* headline start here */}
        <TextAnimate
          className="text-2xl lg:text-5xl pb-5 font-bold text-center transition-all ease-in-out leading-tight"
          animation="slideLeft"
          duration={0.7}
          by="word"
        >
          Tools we provide
        </TextAnimate>
        <div className="flex justify-center">
          <hr className="h-1 w-24 lg:w-40 bg-orange-500 mb-6 mx-auto" />
        </div>
        {/* headline end here */}
        <div className="pb-12 py-6 px-6 lg:px-12 flex flex-wrap justify-center gap-6">
          {/* 1st tool card start here */}
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full sm:w-[320px]">
            {/* logo start here */}
            <div className="flex justify-center items-center mb-3">
              <div className="border-2 border-orange-500 text-orange-500 p-2 text-2xl font-bold">
                KS
              </div>
              <div className="ml-2 text-orange-500 text-xl">digital</div>
            </div>
            {/* logo end here */}
            {/* headline start here */}
            <div className="text-2xl font-bold text-center mb-2">
              SEO Analyzer
            </div>
            {/* headline end here */}
            {/* description start here */}
            <div className="text-gray-700 text-sm text-center">
              Boost your website’s visibility with our powerful SEO Analyzer.
              Uncover technical issues, keyword gaps, and optimization
              opportunities in seconds. Upgrade your rankings — get the tool
              trusted by marketers who want real results.
            </div>
            {/* description end here */}
          </div>
          {/* 1st tool card end here */}

          {/* 2nd tool card start here */}
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full sm:w-[320px]">
            {/* logo start here */}
            <div className="flex justify-center items-center mb-3">
              <div className="border-2 border-orange-500 text-orange-500 p-2 text-2xl font-bold">
                KS
              </div>
              <div className="ml-2 text-orange-500 text-xl">digital</div>
            </div>
            {/* logo end here */}
            {/* headline start here */}
            <div className="text-2xl font-bold text-center mb-2">
              Keyword Analyzer
            </div>
            {/* headline end here */}
            {/* description start here */}
            <div className="text-gray-700 text-sm text-center">
              Discover high-performing keywords and uncover hidden ranking
              opportunities. Our tool helps you dominate search results with
              accurate data, keyword trends, and competitor analysis — all in
              one place.
            </div>
            {/* description end here */}
          </div>
          {/* 2nd tool card end here */}

          {/* 3rd tool card start here */}
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full sm:w-[320px]">
            {/* logo start here */}
            <div className="flex justify-center items-center mb-3">
              <div className="border-2 border-orange-500 text-orange-500 p-2 text-2xl font-bold">
                KS
              </div>
              <div className="ml-2 text-orange-500 text-xl">digital</div>
            </div>
            {/* logo end here */}
            {/* headline start here */}
            <div className="text-2xl font-bold text-center mb-2">
              Site Audit Analyze
            </div>
            {/* headline end here */}
            {/* description start here */}
            <div className="text-gray-700 text-sm text-center">
              Run in-depth audits to identify broken links, performance issues,
              and technical SEO errors. Optimize your site health for better
              speed, usability, and search visibility — effortlessly
            </div>
            {/* description end here */}
          </div>
          {/* 3rd tool card end here */}

          {/* 4th tool card start here */}
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full sm:w-[320px]">
            {/* logo start here */}
            <div className="flex justify-center items-center mb-3">
              <div className="border-2 border-orange-500 text-orange-500 p-2 text-2xl font-bold">
                KS
              </div>
              <div className="ml-2 text-orange-500 text-xl">digital</div>
            </div>
            {/* logo end here */}
            {/* headline start here */}
            <div className="text-2xl font-bold text-center mb-2">
              Invoice Maker
            </div>
            {/* headline end here */}
            {/* description start here */}
            <div className="text-gray-700 text-sm text-center">
              Create professional invoices in minutes. Customize, send, and
              track payments with ease using our intuitive tool — perfect for
              freelancers, agencies, and businesses of all sizes.
            </div>
            {/* description end here */}
          </div>
          {/* 4th tool card end here */}
        </div>
      </div>
    </>
  );
};

export default ToolCardComp;
