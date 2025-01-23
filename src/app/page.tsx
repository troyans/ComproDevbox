import Header from "@/components/Header";

import PricingGrid from "@/components/PricingGrid";
import Howitworks from "@/components/Howitworks";

import FeaturesGrid from "@/components/FeaturesGrid";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Header />
      {/* Hero */}
      <HeroSection />

      {/* Features */}
      <div
        id="layanan"
        className="max-w-7xl mx-auto px-10 py-16 md:py-24 bg-white flex flex-col gap-4"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl text-gray-900 sm:text-4xl xl:text-5xl font-pj leading-snug">
            Selain design yang menarik, kami pastikan hal-hal berikut ada di
            website anda :
          </h2>
        </div>

        <FeaturesGrid />

        <div className="flex flex-col gap-4 md:flex-col overflow-x-auto">
          <div className="flex">
            <p>Teknologi yang kami gunakan : </p>
          </div>

          <div className="flex flex-row gap-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="WordPress"
                role="img"
                viewBox="0 0 512 512"
                width="64px"
                height="64px"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#05a8da"></rect>
                  <circle
                    cx="256"
                    cy="256"
                    fill="none"
                    r="182"
                    stroke="#ffffff"
                    strokeWidth="20"
                  ></circle>
                  <path
                    d="m315 424 28-15 54-156c10-25 13-45 13-62 0-32-13-60-36-63-21-2-33 19-32 31 2 29 31 45 31 85 0 28-18 73-31 117l-62-187 20-1c10 0 9-15-1-14-31 3-60 2-92 0-10-1-10 14-1 14l18 1 27 74-38 114-63-188 20-1c9 0 8-15-1-14-29 2-57 4-64-1l-8 24 84 233 25 14 54-158"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="JavaScript"
                role="img"
                viewBox="0 0 512 512"
                width="64px"
                height="64px"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#f7df1e"></rect>
                  <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                </g>
              </svg>
            </div>

            <div>
              <svg
                width="64px"
                height="64px"
                viewBox="-52.5 0 361 361"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z"
                      fill="#E44D26"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z"
                      fill="#F16529"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z"
                      fill="#EBEBEB"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z"
                      fill="#EBEBEB"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z"
                      fill="#000000"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z"
                      fill="#000000"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z"
                      fill="#000000"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z"
                      fill="#000000"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z"
                      fill="#FFFFFF"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z"
                      fill="#FFFFFF"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>

            <div>
              <svg
                width="64px"
                height="64px"
                viewBox="-52.5 0 361 361"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L127.843868,360.087912 Z"
                      fill="#264DE4"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L212.416703,314.546637 L212.416703,314.546637 Z"
                      fill="#2965F1"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M53.6685714,188.636132 L56.530989,220.572835 L128,220.572835 L128,188.636132 L53.6685714,188.636132 L53.6685714,188.636132 Z"
                      fill="#EBEBEB"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M47.917011,123.994725 L50.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L47.917011,123.994725 Z"
                      fill="#EBEBEB"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L128,271.580132 Z"
                      fill="#EBEBEB"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M60.4835165,0 L99.1648352,0 L99.1648352,16.1758242 L76.6593407,16.1758242 L76.6593407,32.3516484 L99.1648352,32.3516484 L99.1648352,48.5274725 L60.4835165,48.5274725 L60.4835165,0 L60.4835165,0 Z"
                      fill="#000000"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M106.901099,0 L145.582418,0 L145.582418,14.0659341 L123.076923,14.0659341 L123.076923,16.8791209 L145.582418,16.8791209 L145.582418,49.2307692 L106.901099,49.2307692 L106.901099,34.4615385 L129.406593,34.4615385 L129.406593,31.6483516 L106.901099,31.6483516 L106.901099,0 L106.901099,0 Z"
                      fill="#000000"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M153.318681,0 L192,0 L192,14.0659341 L169.494505,14.0659341 L169.494505,16.8791209 L192,16.8791209 L192,49.2307692 L153.318681,49.2307692 L153.318681,34.4615385 L175.824176,34.4615385 L175.824176,31.6483516 L153.318681,31.6483516 L153.318681,0 L153.318681,0 Z"
                      fill="#000000"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M202.126769,188.636132 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.932132 L172.892132,155.932132 L169.98611,188.636132 L127.889582,188.636132 L127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L202.126769,188.636132 Z"
                      fill="#FFFFFF"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Portofolio */}
      <div
        id="portofolio"
        className="max-w-7xl mx-auto px-10 py-5 bg-white flex flex-col gap-4"
      >
        <h2 className="text-3xl  text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Portofolio
        </h2>
        <p>Website yang telah kami kembangkan untuk perusahaan</p>
      </div>
      <MarqueeDemo />

      {/* How it works */}
      <div className="max-w-7xl mx-auto px-10 py-5 bg-white flex flex-col gap-4 mt-10">
        <h2 className="text-3xl  text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Alur Kerja Kami
        </h2>

        <Howitworks />
      </div>

      {/* Pricing */}
      <div
        id="pricing"
        className="max-w-7xl mx-auto px-10 bg-white flex flex-col gap-4"
      >
        <PricingGrid />
      </div>

      <Footer />
    </main>
  );
}
