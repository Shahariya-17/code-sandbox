import React from 'react';

const StackSection = () => {
  return (
    <div className='w-11/12 md:w-8/12 mx-auto py-10 md:py-20'>
      <h4 className='text-xl md:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300'>Template universe</h4>
      <h1 className='text-3xl md:text-7xl font-bold mb-12 leading-tight text-gray-900 dark:text-white'>
        Start with your <br /> favorite stack.
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Card 1 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 4 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 5 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 6 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 7 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 8 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
        {/* Card 9 */}
        <div className='p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-transform transform hover:-translate-y-1'>
          <div className='flex items-start justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center rounded-xl bg-emerald-400 p-3 shadow-sm'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 18l6-6-6-6M8 6L2 12l6 6' />
                </svg>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>AI Code Completion</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>Write code faster using our built-in code completion, powered by Codeium.</p>
              </div>
            </div>
            <div className='text-gray-400 dark:text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-gray-500 dark:text-gray-400'>Popularity</div>
              <div className='text-sm font-semibold text-gray-900 dark:text-gray-100'>8.1k</div>
            </div>
            <button className='flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-600 dark:text-gray-300' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' />
                <path d='M8 4a2 2 0 114 0v1H8V4z' />
              </svg>
              <span className='hidden sm:inline'>Install</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;
