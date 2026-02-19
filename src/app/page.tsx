import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen lg:h-full lg:min-h-0 flex flex-col items-center justify-center p-24 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-end justify-between text-center lg:text-left font-barlow text-sm">
        <div className="max-w-[450px]">
          <h5 className="font-barlow text-[#d0d6f9] text-[16px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.75px] mb-4 md:mb-6 uppercase">
            So, you want to travel to
          </h5>

          <h1 className="font-bellefair text-white text-[80px] md:text-[150px] uppercase leading-none mb-4 md:mb-6">
            Space
          </h1>

          <p className="font-barlow text-[#d0d6f9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[28px] lg:leading-[32px] max-w-[444px] mx-auto lg:mx-0 mb-8 lg:mb-0">
            Let's face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we'll give you a truly out of this world experience!
          </p>
        </div>

        <div className="relative group lg:mt-0 mt-8">
          <div className="absolute -inset-0 bg-white/10 rounded-full blur transition-all duration-500 group-hover:bg-white/20 group-hover:scale-150"></div>
          <Link
            href="/destination"
            className="relative flex items-center justify-center w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full text-[#0b0d17] font-bellefair text-[20px] md:text-[32px] uppercase tracking-[1.25px] md:tracking-[2px] z-10 hover:ring-[44px] md:hover:ring-[88px] hover:ring-white/10 transition-all duration-300"
          >
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
}
