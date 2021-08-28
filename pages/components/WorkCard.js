import Image from 'next/image';
import React from 'react';

function WorkCard() {
    return (
        <>
            {/* card-1 */}
            <div className="text-dark flex flex-col-reverse lg:flex-row 2xl:pt-[80px] xl:pt-[80px] lg:pt-[80px] pt-[40px]">
                {/* text */}
                <div className="flex pr-16 2xl:pr-32 xl:pr-32 lg:pr-32 flex-col flex-grow">
                    <h4 className="lg:text-[32px] text-left text-[24px] pt-[24px] font-normal">Ctracker - Track your foot and confirm your footprint</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light flex-grow">Maintaining records of staff,
                        customers and visitors for contact tracing purposes,
                        as set out in the Government guidance due to COVID-19.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light flex-grow">
                        <li className="p-1">Flutter Application</li>
                        <li className="p-1">QR Code Scanner</li>
                        <li className="p-1">Admin and User Application</li>
                        <li className="p-1">Dark and Light Modes</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
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
                    <h4 className="lg:text-[32px] text-left text-[24px] pt-[24px] font-normal">Livangle</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light flex-grow">Maintaining records of staff,
                        customers and visitors for contact tracing purposes,
                        as set out in the Government guidance due to COVID-19.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light flex-grow">
                        <li className="p-1">Flutter Application</li>
                        <li className="p-1">QR Code Scanner</li>
                        <li className="p-1">Admin and User Application</li>
                        <li className="p-1">Dark and Light Modes</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
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
                    <h4 className="lg:text-[32px] text-left text-[24px] pt-[24px] font-normal">Hack Club CUCEK - Web Design</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light flex-grow">Maintaining records of staff,
                        customers and visitors for contact tracing purposes,
                        as set out in the Government guidance due to COVID-19.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light flex-grow">
                        <li className="p-1">Flutter Application</li>
                        <li className="p-1">QR Code Scanner</li>
                        <li className="p-1">Admin and User Application</li>
                        <li className="p-1">Dark and Light Modes</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
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
                        src='/Image-Assets/Hack-Club-CUCEK.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
            </div>
           
            {/* card-4 */}
            <div className="text-dark flex flex-col lg:flex-row 2xl:pt-[140px] xl:pt-[140px] lg:pt-[140px] pt-[64px]">
                {/* img */}
                <div className="relative h-[343px] w-[343px] lg:h-[500px] p-10 lg:p-20 lg:w-[500px] flex-shrink-0">
                    <Image
                        src='/Image-Assets/TT-Club.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
                {/* text */}
                <div className="flex pr-16 2xl:pl-32 xl:pl-32 lg:pl-32 flex-col flex-grow">
                    <h4 className="lg:text-[32px] text-left text-[24px] pt-[24px] font-normal">T T Club - Dashboard, Web Design</h4>
                    <p className="pt-[16px] text-[20px] text-left font-light flex-grow">Maintaining records of staff,
                        customers and visitors for contact tracing purposes,
                        as set out in the Government guidance due to COVID-19.
                    </p>
                    <ul className="list-disc pl-10 pt-[24px] lg:pt-[40px] text-[20px] font-light flex-grow">
                        <li className="p-1">Flutter Application</li>
                        <li className="p-1">QR Code Scanner</li>
                        <li className="p-1">Admin and User Application</li>
                        <li className="p-1">Dark and Light Modes</li>
                    </ul>
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
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