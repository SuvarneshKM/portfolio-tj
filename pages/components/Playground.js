import Image from 'next/image';

function Playground() {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 
                lg:grid-cols-3 xl:grid-cols-4 ">
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[168px] w-[168px] md:h-[298px] lg:p-20 md:w-[298px] ">
                        <Image
                            src='/Image-Assets/Akhil-T-J.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[168px] w-[168px] md:h-[298px] lg:p-20 md:w-[298px] ">
                        <Image
                            src='/Image-Assets/Ctracker.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[168px] w-[168px] md:h-[298px] lg:p-20 md:w-[298px] ">
                        <Image
                            src='/Image-Assets/Hack-Club-CUCEK.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[168px] w-[168px] md:h-[298px] lg:p-20 md:w-[298px] ">
                        <Image
                            src='/Image-Assets/Livangle.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[168px] w-[168px] md:h-[298px] lg:p-20 md:w-[298px] ">
                        <Image
                            src='/Image-Assets/TT-Club.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playground
