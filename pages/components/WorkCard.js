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
            {/* card-1 */}
            <div className="text-dark flex flex-col-reverse lg:flex-row 2xl:pt-[80px] xl:pt-[80px] lg:pt-[80px] pt-[40px]">
                {/* text */}
                <div className="flex pr-16 2xl:pr-32 xl:pr-32 lg:pr-32 flex-col">
                    <h4 className="lg:text-[32px] text-left text-[24px] font-normal">Ctracker - Track your foot and confirm your footprint</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light ">Maintaining records of staff, customers and visitors for contact tracing purposes, as set out in the Government guidance due to COVID-19.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light flex-grow">
                        <li className="p-1">Flutter QR Code Scanner Application</li>
                        <li className="p-1">Dark and Light Modes</li>
                        <li className="p-1">Received 237 Duplicates and 7 Favourites in Figma Community</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
                            onClick={ctracker}
                            className="bg-transparent
                    hover:bg-accent text-accent 
                    font-medium text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] w-[343px] h-[61px] border-2 border-accent 
                    hover:border-transparent rounded">
                            Read More
                        </button>
                    </div>
                </div>
                {/* img */}
                <div className="relative h-[343px] w-[343px] lg:h-[500px] p-10 lg:p-20 lg:w-[500px] flex-shrink-0">
                    <Image
                        src='/Image-Assets/Ctracker.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
            </div>

            {/* card-2 */}
            <div className="text-dark flex flex-col lg:flex-row 2xl:pt-[140px] xl:pt-[140px] lg:pt-[140px] pt-[64px]">
                {/* img */}
                <div className="relative h-[343px] w-[343px] lg:h-[500px] p-10 lg:p-20 lg:w-[500px] flex-shrink-0">
                    <Image
                        src='/Image-Assets/Livangle.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
                {/* text */}
                <div className="flex pr-16 2xl:pl-32 xl:pl-32 lg:pl-32 flex-col flex-grow">
                    <h4 className="lg:text-[32px] text-left text-[24px] font-normal">Livangle</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light ">Livangle is an online e-commerce platform for your choice of business(Eg: Online Shopping, Healthcare, Food & Beverage etc) based in UAE & India.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light flex-grow">
                        <li className="p-1">E-commerce Android Application</li>
                        <li className="p-1">Happy Clients :)</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
                            onClick={livangle}
                            className="bg-transparent
                    hover:bg-accent text-accent 
                    font-medium text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] w-[343px] h-[61px] border-2 border-accent 
                    hover:border-transparent rounded">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            {/* card-3 */}
            <div className="text-dark flex flex-col-reverse lg:flex-row 2xl:pt-[140px] xl:pt-[140px] lg:pt-[140px] pt-[64px]">
                {/* text */}
                <div className="flex pr-16 2xl:pr-32 xl:pr-32 lg:pr-32 flex-col flex-grow">
                    <h4 className="lg:text-[32px] text-left text-[24px] font-normal">Hack Club CUCEK - Web Design</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light ">A nonprofit network of high school coding clubs and makers around the world. For the students, by the students.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light flex-grow">
                        <li className="p-1">Responsive Web Design</li>
                        <li className="p-1">Full Design System(In Progress)</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
                            onClick={hccucek}
                            className="bg-transparent
                    hover:bg-accent text-accent 
                    font-medium text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] w-[343px] h-[61px] border-2 border-accent 
                    hover:border-transparent rounded">
                            Read More
                        </button>
                    </div>
                </div>
                {/* img */}
                <div className="relative h-[207.58px] w-[344px] lg:h-[400px] lg:w-[680px] flex-shrink-0">
                    <Image
                        src='/Portfolio/HCCUCEK.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
            </div>

            {/* card-4 */}
            <div className="text-dark flex flex-col lg:flex-row 2xl:pt-[140px] xl:pt-[140px] lg:pt-[140px] pt-[64px]">
                {/* img */}
                <div className="relative h-[207.27px] w-[343px] lg:h-[330px] p-10 lg:p-20 lg:w-[550px] flex-shrink-0">
                    <Image
                        src='/Portfolio/TTClub.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
                {/* text */}
                <div className="flex pr-16 2xl:pl-32 xl:pl-32 lg:pl-32 flex-col flex-grow">
                    <h4 className="lg:text-[32px] text-left text-[24px] font-normal">TT Club - Dashboard</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light ">TT Club is a real time airline booking dashboard that aims to cover all operational, relevant areas of an airline booking and serivices.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light ">
                        <li className="p-1">Web Design</li>
                        <li className="p-1">Admin Application</li>
                        <li className="p-1">100% Auto Layout</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
                            onClick={ttclub}
                            className="bg-transparent
                    hover:bg-accent text-accent 
                    font-medium text-[20px] hover:text-light 
                    lg:w-[163px] lg:h-[64px] w-[343px] h-[61px] border-2 border-accent 
                    hover:border-transparent rounded">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard
