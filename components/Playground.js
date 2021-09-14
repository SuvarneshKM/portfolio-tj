import Image from 'next/image';

function Playground() {
    return (
        <>
            <section className="lg:pt-[200px] pt-[100px]" >
                <h2 className="text-[36px] text-left lg:text-center font-extrabold text-accent">
                    Playground
                </h2>
                <div className="lg:flex flex-wrap lg:flex-wrap lg:pt-[80px] pt-[40px]">
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative lg:h-[360px] lg:w-[360px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Cart.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative aspect-h-1 aspect-w-1 lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Cart.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative lg:h-[360px] lg:w-[360px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Covid.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative aspect-h-1 aspect-w-1 lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Covid.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative lg:h-[360px] lg:w-[360px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Login.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative aspect-h-1 aspect-w-1 lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Login.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative lg:h-[360px] lg:w-[360px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Portfolio.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative aspect-h-1 aspect-w-1 lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Portfolio.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative lg:h-[360px] lg:w-[360px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Resume-Template.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="
                            items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer
                             hover:scale-105 transition
                            transform duration-200 ease-out relative aspect-h-1 aspect-w-1 lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Playground/Resume-Template.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Playground
