import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { Transition } from "@headlessui/react";
import React, { useState } from 'react';
import HeartFillIcon from 'remixicon-react/HeartFillIcon';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky text-center top-0 z-40 bg-white px-0 py-5 md:px-10 shadow-md lg:shadow-none md:shadow-none">
            <div className="hidden md:inline-flex text-dark items-center align-middle space-x-20 whitespace-nowrap">
                <p className="text-accent font-medium cursor-pointer text-lg">Home</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">Featured Works</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">Playground</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">About</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">Contact</p>
                <div className="hidden lg:inline-flex items-center space-x-4">
                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                        <TwitterFillIcon className="text-white" />
                    </div>
                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                        <LinkedinFillIcon className="text-white" />
                    </div>
                    <div className="flex h-8 w-8 items-center border-2 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4608 7.5C12.7275 7.5 11.3335 8.95421 11.3335 10.7357C11.3335 11.8187 11.8492 12.7806 12.6418 13.3678C12.2333 13.6739 11.9022 14.0714 11.675 14.5285C11.4478 14.9856 11.3309 15.4896 11.3335 16C11.3335 17.0837 11.8492 18.045 12.6418 18.6322C12.2333 18.9382 11.9022 19.3357 11.675 19.7928C11.4478 20.2499 11.3309 20.7539 11.3335 21.2643C11.3335 23.0458 12.7275 24.5 14.4608 24.5C16.1934 24.5 17.5881 23.0458 17.5881 21.2643V18.5287C18.1359 18.9855 18.8264 19.2359 19.5396 19.2364C21.2729 19.2357 22.6669 17.7815 22.6669 16C22.6669 14.9162 22.1519 13.955 21.3586 13.3678C21.7671 13.0618 22.0982 12.6643 22.3254 12.2072C22.5526 11.7501 22.6695 11.2461 22.6669 10.7357C22.6669 8.95421 21.2729 7.5 19.5396 7.5H14.4608V7.5ZM12.5087 10.7357C12.5087 9.60871 13.3884 8.70629 14.4608 8.70629H16.4123V12.765H14.4608C13.3884 12.765 12.5087 11.8619 12.5087 10.7357V10.7357ZM19.5396 12.7643H17.5881V8.70558H19.5396C20.6127 8.70558 21.4917 9.60871 21.4917 10.7357C21.4917 11.8619 20.6127 12.7643 19.5396 12.7643ZM12.5094 16C12.5094 14.8737 13.3891 13.9706 14.4615 13.9706H16.413V18.0294H14.4608C13.3877 18.0294 12.5087 17.1262 12.5087 16H12.5094ZM17.5881 16C17.5881 14.8737 18.4679 13.9706 19.5403 13.9706C20.6134 13.9706 21.4925 14.873 21.4925 16C21.4925 17.1262 20.6134 18.0294 19.5403 18.0294C18.4679 18.0294 17.5888 17.127 17.5888 16H17.5881ZM12.5094 21.2643C12.5094 20.1381 13.3891 19.2357 14.4615 19.2357H16.413V21.2643C16.413 22.3913 15.5347 23.2937 14.4615 23.2937C13.3891 23.2937 12.5094 22.3913 12.5094 21.2643Z" fill="#FAF9F0" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-dark hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <MenuLineIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <CloseLineIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden absolute bg-white right-0 h-screen w-3/4 top-full shadow-xl">
                        <div ref={ref} className="px-20 text-dark pt-2 pb-3 space-y-8">
                            <p className="text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Home</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Featured Works</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Playground</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">About</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Contact</p>
                            <div>
                                <div className="inline-flex items-center space-x-4 pt-10">
                                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <TwitterFillIcon className="text-white" />
                                    </div>
                                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <LinkedinFillIcon className="text-white" />
                                    </div>
                                    <div className="flex h-8 w-8 items-center border-2 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4608 7.5C12.7275 7.5 11.3335 8.95421 11.3335 10.7357C11.3335 11.8187 11.8492 12.7806 12.6418 13.3678C12.2333 13.6739 11.9022 14.0714 11.675 14.5285C11.4478 14.9856 11.3309 15.4896 11.3335 16C11.3335 17.0837 11.8492 18.045 12.6418 18.6322C12.2333 18.9382 11.9022 19.3357 11.675 19.7928C11.4478 20.2499 11.3309 20.7539 11.3335 21.2643C11.3335 23.0458 12.7275 24.5 14.4608 24.5C16.1934 24.5 17.5881 23.0458 17.5881 21.2643V18.5287C18.1359 18.9855 18.8264 19.2359 19.5396 19.2364C21.2729 19.2357 22.6669 17.7815 22.6669 16C22.6669 14.9162 22.1519 13.955 21.3586 13.3678C21.7671 13.0618 22.0982 12.6643 22.3254 12.2072C22.5526 11.7501 22.6695 11.2461 22.6669 10.7357C22.6669 8.95421 21.2729 7.5 19.5396 7.5H14.4608V7.5ZM12.5087 10.7357C12.5087 9.60871 13.3884 8.70629 14.4608 8.70629H16.4123V12.765H14.4608C13.3884 12.765 12.5087 11.8619 12.5087 10.7357V10.7357ZM19.5396 12.7643H17.5881V8.70558H19.5396C20.6127 8.70558 21.4917 9.60871 21.4917 10.7357C21.4917 11.8619 20.6127 12.7643 19.5396 12.7643ZM12.5094 16C12.5094 14.8737 13.3891 13.9706 14.4615 13.9706H16.413V18.0294H14.4608C13.3877 18.0294 12.5087 17.1262 12.5087 16H12.5094ZM17.5881 16C17.5881 14.8737 18.4679 13.9706 19.5403 13.9706C20.6134 13.9706 21.4925 14.873 21.4925 16C21.4925 17.1262 20.6134 18.0294 19.5403 18.0294C18.4679 18.0294 17.5888 17.127 17.5888 16H17.5881ZM12.5094 21.2643C12.5094 20.1381 13.3891 19.2357 14.4615 19.2357H16.413V21.2643C16.413 22.3913 15.5347 23.2937 14.4615 23.2937C13.3891 23.2937 12.5094 22.3913 12.5094 21.2643Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center pt-[10px] inline-flex text-dark ">
                                Made With&nbsp;&nbsp;
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.8335 7.70012C1.83327 6.37126 2.36735 5.09811 3.31557 4.16713C4.2638 3.23614 5.54653 2.72551 6.87516 2.75012C8.44937 2.74176 9.9515 3.40937 11.0002 4.58345C12.0488 3.40937 13.551 2.74176 15.1252 2.75012C16.4538 2.72551 17.7366 3.23614 18.6848 4.16713C19.633 5.09811 20.167 6.37126 20.1668 7.70012C20.1668 12.6098 14.3194 16.3168 11.0002 19.2501C7.68825 16.292 1.8335 12.6134 1.8335 7.70012Z" fill="#F6490D" />
                                </svg>
                                &nbsp;&nbsp;Akhil T J</p>
                        </div>
                    </div>
                )}
            </Transition>
        </header>
    )
}

export default Header
