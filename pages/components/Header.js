import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { Transition } from "@headlessui/react";
import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky text-center top-0 z-40 bg-light px-0 py-5 md:px-10 shadow-md lg:shadow-none md:shadow-none">
            <div className="hidden md:inline-flex text-dark items-center align-middle space-x-20 whitespace-nowrap">
                <p className="text-accent font-medium cursor-pointer text-lg">Home</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">Featured Works</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">Playground</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">About</p>
                <p className="hover:text-accent font-medium cursor-pointer text-lg">Contact</p>
                <div className="hidden lg:inline-flex items-center space-x-4">
                    <svg className="cursor-pointer" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5005 2.5C8.76924 2.5 2.50049 8.76875 2.50049 16.5C2.50049 24.2312 8.76924 30.5 16.5005 30.5C24.2317 30.5 30.5005 24.2312 30.5005 16.5C30.5005 8.76875 24.2317 2.5 16.5005 2.5ZM23.2286 13.0531C23.238 13.2 23.238 13.3531 23.238 13.5031C23.238 18.0906 19.7442 23.375 13.3599 23.375C11.3911 23.375 9.56611 22.8031 8.02861 21.8188C8.30986 21.85 8.57861 21.8625 8.86611 21.8625C10.4911 21.8625 11.9849 21.3125 13.1755 20.3813C11.6505 20.35 10.3692 19.35 9.93174 17.975C10.4661 18.0531 10.9474 18.0531 11.4974 17.9125C10.7121 17.753 10.0063 17.3265 9.49991 16.7056C8.99348 16.0846 8.71763 15.3075 8.71924 14.5063V14.4625C9.17861 14.7219 9.71924 14.8812 10.2849 14.9031C9.80937 14.5862 9.41942 14.1569 9.14959 13.6532C8.87975 13.1495 8.73837 12.587 8.73799 12.0156C8.73799 11.3687 8.90674 10.7781 9.20986 10.2656C10.0814 11.3386 11.169 12.2161 12.4019 12.8411C13.6349 13.4662 14.9855 13.8249 16.3661 13.8938C15.8755 11.5344 17.638 9.625 19.7567 9.625C20.7567 9.625 21.6567 10.0437 22.2911 10.7188C23.0755 10.5719 23.8255 10.2781 24.4942 9.88437C24.2349 10.6875 23.6911 11.3656 22.9692 11.7937C23.6692 11.7187 24.3442 11.525 24.9692 11.2531C24.4974 11.9469 23.9067 12.5625 23.2286 13.0531V13.0531Z" fill="#000249" />
                        <path d="M31.5005 16.5C31.5005 24.7843 24.7848 31.5 16.5005 31.5C8.21622 31.5 1.50049 24.7843 1.50049 16.5C1.50049 8.21573 8.21622 1.5 16.5005 1.5C24.7848 1.5 31.5005 8.21573 31.5005 16.5ZM5.13175 16.5C5.13175 22.7788 10.2217 27.8687 16.5005 27.8687C22.7793 27.8687 27.8692 22.7788 27.8692 16.5C27.8692 10.2212 22.7793 5.13126 16.5005 5.13126C10.2217 5.13126 5.13175 10.2212 5.13175 16.5Z" fill="#000249" />
                    </svg>
                    <svg className="cursor-pointer" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5016 1.13989C8.0184 1.13989 1.1416 8.01669 1.1416 16.4999C1.1416 24.9831 8.0184 31.8599 16.5016 31.8599C24.9848 31.8599 31.8616 24.9831 31.8616 16.4999C31.8616 8.01669 24.9848 1.13989 16.5016 1.13989ZM12.7416 22.8663H9.6312V12.8567H12.7416V22.8663ZM11.1672 11.6279C10.1848 11.6279 9.5496 10.9319 9.5496 10.0711C9.5496 9.19269 10.204 8.51749 11.2072 8.51749C12.2104 8.51749 12.8248 9.19269 12.844 10.0711C12.844 10.9319 12.2104 11.6279 11.1672 11.6279ZM24.1016 22.8663H20.9912V17.3191C20.9912 16.0279 20.54 15.1511 19.4152 15.1511C18.556 15.1511 18.0456 15.7447 17.82 16.3159C17.7368 16.5191 17.716 16.8071 17.716 17.0935V22.8647H14.604V16.0487C14.604 14.7991 14.564 13.7543 14.5224 12.8551H17.2248L17.3672 14.2455H17.4296C17.8392 13.5927 18.8424 12.6295 20.5208 12.6295C22.5672 12.6295 24.1016 14.0007 24.1016 16.9479V22.8663Z" fill="#000249" />
                    </svg>
                    <svg className="cursor-pointer" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16.4995" cy="16.5" r="15" fill="#000249" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4608 7.5C12.7275 7.5 11.3335 8.95421 11.3335 10.7357C11.3335 11.8187 11.8492 12.7806 12.6418 13.3678C12.2333 13.6739 11.9022 14.0714 11.675 14.5285C11.4478 14.9856 11.3309 15.4896 11.3335 16C11.3335 17.0837 11.8492 18.045 12.6418 18.6322C12.2333 18.9382 11.9022 19.3357 11.675 19.7928C11.4478 20.2499 11.3309 20.7539 11.3335 21.2643C11.3335 23.0458 12.7275 24.5 14.4608 24.5C16.1934 24.5 17.5881 23.0458 17.5881 21.2643V18.5287C18.1359 18.9855 18.8264 19.2359 19.5396 19.2364C21.2729 19.2357 22.6669 17.7815 22.6669 16C22.6669 14.9162 22.1519 13.955 21.3586 13.3678C21.7671 13.0618 22.0982 12.6643 22.3254 12.2072C22.5526 11.7501 22.6695 11.2461 22.6669 10.7357C22.6669 8.95421 21.2729 7.5 19.5396 7.5H14.4608V7.5ZM12.5087 10.7357C12.5087 9.60871 13.3884 8.70629 14.4608 8.70629H16.4123V12.765H14.4608C13.3884 12.765 12.5087 11.8619 12.5087 10.7357V10.7357ZM19.5396 12.7643H17.5881V8.70558H19.5396C20.6127 8.70558 21.4917 9.60871 21.4917 10.7357C21.4917 11.8619 20.6127 12.7643 19.5396 12.7643ZM12.5094 16C12.5094 14.8737 13.3891 13.9706 14.4615 13.9706H16.413V18.0294H14.4608C13.3877 18.0294 12.5087 17.1262 12.5087 16H12.5094ZM17.5881 16C17.5881 14.8737 18.4679 13.9706 19.5403 13.9706C20.6134 13.9706 21.4925 14.873 21.4925 16C21.4925 17.1262 20.6134 18.0294 19.5403 18.0294C18.4679 18.0294 17.5888 17.127 17.5888 16H17.5881ZM12.5094 21.2643C12.5094 20.1381 13.3891 19.2357 14.4615 19.2357H16.413V21.2643C16.413 22.3913 15.5347 23.2937 14.4615 23.2937C13.3891 23.2937 12.5094 22.3913 12.5094 21.2643Z" fill="#FAF9F0" />
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-end md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                    <div className="md:hidden absolute bg-light right-0 h-screen w-3/4 top-full shadow-xl">
                        <div ref={ref} className="px-20 text-dark pt-2 pb-3 space-y-8">
                            <p className="text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Home</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Featured Works</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Playground</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">About</p>
                            <p className="hover:text-accent border-2 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">Contact</p>
                            <div>
                                <div className="inline-flex items-center space-x-4 pt-10">
                                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <TwitterFillIcon className="text-light" />
                                    </div>
                                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <LinkedinFillIcon className="text-light" />
                                    </div>
                                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <InstagramFillIcon className="text-light" />
                                    </div>
                                </div>
                            </div>
                            <p className="font-medium pt-10">Made With ❤ Akhil T J</p>
                        </div>
                    </div>
                )}
            </Transition>
        </header>
    )
}

export default Header
