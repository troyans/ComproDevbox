import Link from "next/link"
import { Button } from "./ui/button";

export default function PricingGrid() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
        <div className="max-w-xl text-left flex gap-4 items-center ">
          <div className="flex flex-col gap-4 max-w-sm">
            <h2 className="text-3xl  text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Harga
            </h2>
            <p>
              Paket Harga Website Company Profile yang Dirancang Sesuai
              Kebutuhan Anda
            </p>
          </div>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
          <div className="bg-white border-4 border-transparent rounded-md">
            <div className="p-6 md:py-10 md:px-9">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                <h3 className="text-sm font-semibold text-gray-900">
                  Standard
                </h3>
              </div>
              <p className="mt-5 text-5xl font-bold text-black">Rp 8jt</p>

              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    Total 8 Halaman
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Slider Carrousel{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Social Media Share{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Livechat / Whatsapp{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Basic Form{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Halaman Blog / Artikel{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Halaman Gallery{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Halaman Portofolio{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Free Support 4 Bulan{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Interaktif motion{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Map{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Search{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>

                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Custom Fitur{" "}
                  </span>
                </li>
              </ul>

              <Link
                href="https://wa.me/6285319205335?text=Saya%20berminat%20develop%20website%20company%20profile%20" target="_blank"
                title=""
                className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-gray-800 rounded-md hover:bg-gray-600 focus:bg-gray-600"
                role="button"
              >
                {" "}
                Mulai Project Sekarang{" "}
              </Link>

              <p className="mt-5 text-sm text-gray-500"></p>
            </div>
          </div>

          <div className="bg-white border-4 border-blue-600 rounded-md">
            <div className="p-6 md:py-10 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                <h3 className="text-sm font-semibold text-blue-600">Premium</h3>
              </div>
              <p className="mt-5 text-5xl font-bold text-black">15jt</p>

              <ul className="flex flex-col mt-8 space-y-4">
                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    Total 15 Halaman
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Slider Carrousel{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Social Media Share{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Livechat / Whatsapp{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Custom Form{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Halaman Blog / Artikel{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Halaman Gallery{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Halaman Portofolio{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Free Support 6 Bulan{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Interaktif motion{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Map{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Search{" "}
                  </span>
                </li>

                <li className="inline-flex items-center space-x-2">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-900">
                    {" "}
                    Custom Fitur (cost sesuai kerumitan){" "}
                  </span>
                </li>
              </ul>

              <Button 
                className="inline-flex items-center justify-center w-full px-4 py-7 mt-8 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                asChild
              >
                <Link 
                  href="https://wa.me/6285319205335?text=Saya%20berminat%20develop%20website%20company%20profile%20"
                  target="_blank"
                  
                >
                  Mulai Project Sekarang
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
