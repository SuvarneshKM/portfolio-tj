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
                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark cursor-pointer">
                        <TwitterFillIcon className="text-light" />
                    </div>
                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark cursor-pointer">
                        <LinkedinFillIcon className="text-light" />
                    </div>
                    <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark cursor-pointer">
                        <InstagramFillIcon className="text-light" />
                    </div>
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
