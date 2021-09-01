import Image from 'next/image';

function Playground() {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 
                lg:grid-cols-3 xl:grid-cols-4 ">
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[135px] w-[135px] md:h-[270px] lg:p-20 md:w-[270px] ">
                        <Image
                            src='/Playground/Cart.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[135px] w-[135px] md:h-[270px] lg:p-20 md:w-[270px] ">
                        <Image
                            src='/Playground/Covid.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-3 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[135px] w-[135px] md:h-[270px] lg:p-20 md:w-[270px] ">
                        <Image
                            src='/Playground/Login.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-3 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[135px] w-[135px] md:h-[270px] lg:p-20 md:w-[270px] ">
                        <Image
                            src='/Playground/Portfolio.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
                <div className="flex items-center m-2 mt-5 space-x-3 rounded-lg cursor-pointer
        hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
                    <div className="relative h-[135px] w-[135px] md:h-[270px] lg:p-20 md:w-[270px] ">
                        <Image
                            src='/Playground/Resume-Template.png'
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
