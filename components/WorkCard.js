import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function WorkCard() {
    const router = useRouter();

    const ctracker = () => {
        router.push({
            pathname: '/works/ctracker'
        })
    }
    const livangle = () => {
        router.push({
            pathname: '/works/livangle'
        })
    }
    const hccucek = () => {
        router.push({
            pathname: '/works/hccucek'
        })
    }
    const ttclub = () => {
        router.push({
            pathname: '/works/ttclub'
        })
    }

    return (
        <>
            <div className="px-[16px] py-[16px] text-dark">
                <div className="flex flex-col lg:flex-row-reverse lg:pt-[80px] pt-[40px]">
                    <div className="relative h-[343px] w-auto max-w-[343px] lg:h-[500px] lg:w-[500px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Image-Assets/Ctracker.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col pt-[24px] lg:pt-0 lg:pr-[200px]">
                        <h4 className="lg:text-[32px] text-left text-[24px] font-semibold">Ctracker - Track your foot and confirm your footprint</h4>
                        <p className="pt-[16px] text-[20px] text-left font-normal ">Maintaining records of staff, customers and visitors for contact tracing purposes, as set out in the Government guidance due to COVID-19.
                        </p>
                        <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-normal flex-grow">
                            <li className="p-1">Flutter QR Code Scanner Application</li>
                            <li className="p-1">Dark and Light Modes</li>
                            <li className="p-1">Received <span className="text-accent">237 Duplicates</span> and <span className="text-accent">7 Favourites</span> in Figma Community</li>
                        </ul>
                        <div className="pt-[24px] lg:pt-[40px]">
                            <button
                                onClick={ctracker}
                                className="bg-transparent
                    hover:bg-accent text-accent 
                    font-semibold text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] h-[61px] w-full flex-shrink border-2 border-accent 
                    hover:border-transparent rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:pt-[172px] pt-[64px] space-x-0 lg:space-x-[250px]">
                    <div className="relative h-[343px] w-auto max-w-[343px] lg:h-[500px] lg:w-[500px]  flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Image-Assets/Livangle.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col pt-[24px] lg:pt-0">
                        <h4 className="lg:text-[32px] text-left text-[24px] font-semibold">Livangle</h4>
                        <p className="pt-[16px] text-[20px] text-left font-normal ">Livangle is an online e-commerce platform for your choice of business(Eg: Online Shopping, Healthcare, Food & Beverage etc) based in UAE & India.
                        </p>
                        <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-normal">
                            <li className="p-1">E-commerce Android Application</li>
                            <li className="p-1"><span className="text-accent">Happy Clients</span> :)</li>
                        </ul>
                        <div className="pt-[24px] lg:pt-[40px]">
                            <button
                                onClick={livangle}
                                className="bg-transparent
                    hover:bg-accent text-accent 
                    font-semibold text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] h-[61px] w-full flex-shrink border-2 border-accent 
                    hover:border-transparent rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse lg:pt-[172px] pt-[64px]">
                    <div className="relative lg:h-[410px] lg:w-[690px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/HCCUCEK.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="relative h-[155.685px] w-[258px] sm:h-[207.58px] sm:w-[344px] lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/HC_Assets.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col pt-[24px] lg:pt-0 lg:pr-[30px]">
                        <h4 className="lg:text-[32px] text-left text-[24px] font-semibold">Hack Club CUCEK - Web Design</h4>
                        <p className="pt-[16px] text-[20px] text-left font-normal ">A nonprofit network of high school coding clubs and makers around the world. For the students, by the students.
                        </p>
                        <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-normal flex-grow">
                            <li className="p-1">Responsive Web Design</li>
                            <li className="p-1">Full Design System(In Progress)</li>
                        </ul>
                        <div className="pt-[24px] lg:pt-[40px]">
                            <button
                                onClick={hccucek}
                                className="bg-transparent
                    hover:bg-accent text-accent 
                    font-semibold text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] h-[61px] w-full flex-shrink border-2 border-accent 
                    hover:border-transparent rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:pt-[172px] pt-[64px] space-x-0 lg:space-x-[100px]">
                    <div className="relative lg:h-[330px] lg:w-[550px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/TTClub.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="relative h-[165px] w-[275px] sm:h-[247.5px] sm:w-[412.5px] lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/TTClub.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col pt-[24px] lg:pt-0">
                        <h4 className="lg:text-[32px] text-left text-[24px] font-semibold">TT Club - Dashboard</h4>
                        <p className="pt-[16px] text-[20px] text-left font-normal ">TT Club is a real time airline booking dashboard that aims to cover all operational, relevant areas of an airline booking and serivices.
                        </p>
                        <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-normal ">
                            <li className="p-1">Web Design</li>
                            <li className="p-1">Admin Application</li>
                            <li className="p-1">100% Auto Layout</li>
                        </ul>
                        <div className="pt-[24px] lg:pt-[40px]">
                            <button
                                onClick={ttclub}
                                className="bg-transparent
                    hover:bg-accent text-accent 
                    font-semibold text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] h-[61px] w-full flex-shrink border-2 border-accent 
                    hover:border-transparent rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard
