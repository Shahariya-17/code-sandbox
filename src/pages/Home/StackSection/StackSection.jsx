import React from "react";

const StackSection = () => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto py-10 md:py-20">
      <h4 className="text-xl md:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
        Template universe
      </h4>
      <h1 className="text-3xl md:text-7xl font-bold mb-12 leading-tight text-gray-900 dark:text-white">
        Start with your <br /> favorite stack.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 18l6-6-6-6M8 6L2 12l6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  AI Code Completion
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Write code faster using our built-in code completion, powered
                  by Codeium.
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                8.1k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-red-500 p-3 shadow-sm">
                {/* ✅ Angular SVG Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250 250"
                  className="h-6 w-6"
                >
                  <polygon
                    fill="#DD0031"
                    points="125,0 250,45 225,190 125,250 25,190 0,45"
                  />
                  <polygon
                    fill="#C3002F"
                    points="125,0 125,28 125,28 125,163 125,250 225,190 250,45"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M125 47L56 187h26l14-31h58l14 31h26L125 47zm0 45l21 45H104l21-45z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Angular
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  The quickest way to get started with Angular!
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                287k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-sky-400 p-3 shadow-sm">
                {/* Docker SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M29.2 13.5c-.8-.5-1.9-.6-2.7-.3-.2-1.5-1.5-2.6-3-2.6h-2.2v3H18v3h-3v-3H9v3H6v3h3v3h3v-3h3v3h3v-3h3v3h2.8c1.7 0 3.2-.6 4.2-1.9 1-1.1 1.5-2.6 1.5-4.2 0-1.5-.6-2.9-1.8-3.8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Docker
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  The easiest way to get started from Docker in CodeSandbox
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                131.4k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
        {/* Card 4 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-blue-500 p-3 shadow-sm">
                {/* ✅ CSS SVG ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="h-6 w-6 text-white"
                >
                  <path
                    fill="#0277BD"
                    d="M41,5L37,39.6l-13,4.4l-13-4.4L7,5H41z"
                  />
                  <path fill="#039BE5" d="M24 8L24 39.1 34.2 35.7 37.7 8z" />
                  <path
                    fill="#FFF"
                    d="M31.3 26.9l-0.8 7.2-6.5 2.2-6.5-2.2-0.4-4.6h3.2l0.2 2.3 3.5 1.2 3.5-1.2 0.4-3.9h-7.6l-0.4-3h11.3l-0.3 2zM32 20.1l0.4-3H15.6l0.4 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  HTML + CSS
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  A template for HTML & CSS
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                35.5k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
        {/* Card 5 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-[#F7DF1E] p-3 shadow-sm">
                {/* ✅ JavaScript SVG ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="h-6 w-6"
                >
                  <path
                    fill="#000000"
                    d="M6,42V6h36v36H6z M25.7,35.1c0,1.6-1,2.9-2.5,3.5c-1.8,0.8-4.2,0.5-5.4-0.6l0.9-2.6
            c0.9,0.7,1.8,1,2.7,1c0.9,0,1.5-0.4,1.5-1c0-0.7-0.6-1-2-1.5c-1.8-0.6-3.1-1.4-3.1-3.2c0-2.3,1.8-3.9,4.6-3.9
            c1.4,0,2.7,0.4,3.6,1l-0.9,2.6c-0.8-0.6-1.6-0.8-2.6-0.8c-0.9,0-1.4,0.4-1.4,0.9c0,0.7,0.6,1,2,1.5
            C24.4,32.4,25.7,33.2,25.7,35.1z M34.5,34.9c0.9,0,1.7-0.2,2.3-0.5l0.5,2.5c-0.8,0.4-1.9,0.6-3.3,0.6
            c-3.2,0-5.2-1.8-5.2-4.8V27h-1.8v-2.6h1.8v-2.8l3.2-1v3.8h3.2V27h-3.2v5.4C31.9,33.9,32.8,34.9,34.5,34.9z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  JavaScript
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  The JavaScript template
                </p>
              </div>
            </div>

            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                27.9k
              </div>
            </div>

            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>

        {/* Card 6 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 18l6-6-6-6M8 6L2 12l6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  AI Code Completion
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Write code faster using our built-in code completion, powered
                  by Codeium.
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                8.1k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
        {/* Card 7 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 18l6-6-6-6M8 6L2 12l6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  AI Code Completion
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Write code faster using our built-in code completion, powered
                  by Codeium.
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                8.1k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
        {/* Card 8 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 18l6-6-6-6M8 6L2 12l6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  AI Code Completion
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Write code faster using our built-in code completion, powered
                  by Codeium.
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                8.1k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
        {/* Card 9 */}
        <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 18l6-6-6-6M8 6L2 12l6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  AI Code Completion
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Write code faster using our built-in code completion, powered
                  by Codeium.
                </p>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Popularity
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                8.1k
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <path d="M8 4a2 2 0 114 0v1H8V4z" />
              </svg>
              <span className="hidden sm:inline">Install</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;
