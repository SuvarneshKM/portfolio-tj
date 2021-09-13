import Header from '../../components/project/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';

function livangle() {
    const router = useRouter();

    const ctracker = () => {
        router.push({
            pathname: '/works/ctracker'
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
            <Header />
            <main className="max-w-[1160px] mx-auto px-[16px] py-[16px] text-livangle2">
                <section className="flex flex-col-reverse lg:flex-row lg:pt-[145px] pt-[128px]">
                    <div className=" flex flex-col lg:pr-[140px] pt-[24px] lg:pt-0">
                        <div className="flex flex-col lg:space-y-[61px]">
                            {/* <div className="hidden lg:flex border-2 h-[40px] w-[40px] text-livangle3 justify-center items-center rounded">
                                <ListCheckIcon className="" />
                            </div> */}
                            <span className="text-livangle1 text-[16px] font-medium">March 2021</span>
                        </div>
                        <h2 className="lg:text-[48px] text-[40px] font-extrabold text-livangle2 pt-[16px] ">Livangle</h2>
                        <div className="">
                            <p className="font-normal text-[20px] text-livangle2 pt-[16px]">
                                Livangle is an online e-commerce platform for your
                                choice of business(Eg: Online Shopping, Healthcare,
                                Food & Beverage etc) based in UAE & India.
                            </p>
                            <ul className="list-disc font-normal text-[20px] pl-10 pt-[16px] text-livangle2">
                                <li>E-commerce Android Application</li>
                                <li className="text-livangle1">Happy Clients :)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative aspect-h-1521 aspect-w-963 lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Mobile/Livangle-Image.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[507px] lg:w-[360px] lg:max-w-[360px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/Livangle.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section className="flex flex-col lg:pt-[140px] pt-[40px]">
                    <h1 className="font-semibold text-[24px] lg:text-[32px] text-livangle1">Style Guides</h1>
                    <div className="relative aspect-h-750 aspect-w-1029 lg:hidden flex-shrink lg:flex-shrink-0 mt-[24px]">
                        <Image
                            src='/Mobile/Livangle-Style-Guides.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[387px] lg:w-[592px] lg:mt-[24px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/Livangle-Style-Guides.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section className="flex flex-col lg:pt-[140px] pt-[40px]">
                    <h1 className="font-semibold text-[24px] lg:text-[32px] text-livangle1">Final UI</h1>
                    <div className="relative aspect-w-20 aspect-h-14 lg:hidden flex-shrink lg:flex-shrink-0 mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-1.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[829px] lg:w-[1236px] lg:mt-[24px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-1.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative aspect-w-20 aspect-h-14 lg:hidden flex-shrink lg:flex-shrink-0 mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-2.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[829px] lg:w-[1236px] lg:mt-[24px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-2.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative aspect-w-20 aspect-h-14 lg:hidden flex-shrink lg:flex-shrink-0 mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-3.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[829px] lg:w-[1236px] lg:mt-[24px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-3.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative aspect-w-20 aspect-h-14 lg:hidden flex-shrink lg:flex-shrink-0 mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-4.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[829px] lg:w-[1236px] lg:mt-[24px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-4.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section className="lg:pt-[140px] pt-[80px]">
                    <h2 className="lg:text-[36px] text-[28px] text-left lg:text-center font-extrabold text-accent">Other Featured Projects</h2>
                    <div className="flex flex-col lg:flex-row pt-[24px] lg:pt-[80px] lg:space-x-[22px]">

                        <div
                            onClick={hccucek}
                            className="relative lg:h-[371.69px] lg:w-[371.69px] mt-[24px] lg:mt-0 hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Playground/HC-Cucek.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div
                            onClick={hccucek}
                            className="relative mt-[24px] aspect-w-1 aspect-h-1 lg:hidden hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Playground/HC-Cucek.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div
                            onClick={ttclub}
                            className="relative lg:h-[371.69px] lg:w-[371.69px] mt-[24px] lg:mt-0 hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Playground/TT-Club.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div
                            onClick={ttclub}
                            className="relative mt-[16px] aspect-w-1 aspect-h-1 lg:hidden hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Playground/TT-Club.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div
                            onClick={ctracker}
                            className="relative lg:h-[371.69px] lg:w-[371.69px] mt-[24px] lg:mt-0 hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Image-Assets/Ctracker.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div
                            onClick={ctracker}
                            className="relative mt-[16px] aspect-w-1 aspect-h-1 lg:hidden hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Image-Assets/Ctracker.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </section>
                <footer className="text-center">
                    <p className="text-center font-medium inline-flex text-dark pb-[30px] pt-[40px] lg:pt-[150px]">
                        Made With&nbsp;&nbsp;
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.8335 7.70012C1.83327 6.37126 2.36735 5.09811 3.31557 4.16713C4.2638 3.23614 5.54653 2.72551 6.87516 2.75012C8.44937 2.74176 9.9515 3.40937 11.0002 4.58345C12.0488 3.40937 13.551 2.74176 15.1252 2.75012C16.4538 2.72551 17.7366 3.23614 18.6848 4.16713C19.633 5.09811 20.167 6.37126 20.1668 7.70012C20.1668 12.6098 14.3194 16.3168 11.0002 19.2501C7.68825 16.292 1.8335 12.6134 1.8335 7.70012Z" fill="#F6490D" />
                        </svg>
                        &nbsp;&nbsp;Akhil T J</p>
                </footer>
            </main>
            {/* <main className="max-w-[1160px] mx-auto">
                <section className="pt-[145px]">
                    <div className="flex flex-row justify-between ">
                        <div>
                            <span className="text-livangle1 text-[16px] font-medium">June 2021</span>
                            <h2 className="text-[48px] font-extrabold text-livangle2 pb-[16px] ">Livangle</h2>
                            <p className="font-normal text-[20px] text-livangle2 pt-[8px]">
                                Livangle is an online e-commerce platform for your<br/>
                                choice of business(Eg: Online Shopping, Healthcare,<br/>
                                Food & Beverage etc) based in UAE & India.
                            </p>
                            <ul className="list-disc font-normal text-[20px] pt-[16px] mx-[40px] text-livangle2">
                                <li>E-commerce Android Application</li>
                                <li className="text-livangle1">Happy Clients :)</li>
                            </ul>
                        </div>
                        <div className="relative h-[507px] w-[402px] ">
                            <Image
                                src='/Portfolio/Livangle.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="font-semibold text-[32px] text-livangle1 pt-[140px]">Style Guides</h1>
                    <div className="absolute h-[387px] w-[592px] mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Style-Guides.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="font-semibold text-[32px] text-livangle1 pt-[500px]">Final UI</h1>
                    <div className="relative h-[817px] w-[1235px] mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-1.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative h-[818px] w-[1235px] mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-2.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative h-[818px] w-[1235px] mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-3.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative h-[818px] w-[1235px] mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-4.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative h-[1514px] w-[1234px] mt-[24px]">
                        <Image
                            src='/Portfolio/Livangle-Final-UI-5.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section >
                    <h1 className="font-extrabold text-center text-[36px] text-accent my-[140px]">Other Featured Projects</h1>
                    <div className=" inline-flex flex-wrap space-x-[22.47px]">
                        <div 
                        onClick={hccucek}
                        className="relative h-[371.69px] w-[371.69px] mt-[24px] hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Playground/HC-Cucek.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div 
                        onClick={ttclub}
                        className="relative h-[371.69px] w-[371.69px] mt-[24px] hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Playground/TT-Club.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div 
                        onClick={ctracker}
                        className="relative h-[371.69px] w-[371.69px] mt-[24px] hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Image-Assets/Ctracker.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </section>
                <footer className="text-center">
                    <p className="text-center font-medium inline-flex text-dark pb-[30px] pt-[40px] lg:pt-[150px]">
                        Made With&nbsp;&nbsp;
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.8335 7.70012C1.83327 6.37126 2.36735 5.09811 3.31557 4.16713C4.2638 3.23614 5.54653 2.72551 6.87516 2.75012C8.44937 2.74176 9.9515 3.40937 11.0002 4.58345C12.0488 3.40937 13.551 2.74176 15.1252 2.75012C16.4538 2.72551 17.7366 3.23614 18.6848 4.16713C19.633 5.09811 20.167 6.37126 20.1668 7.70012C20.1668 12.6098 14.3194 16.3168 11.0002 19.2501C7.68825 16.292 1.8335 12.6134 1.8335 7.70012Z" fill="#F6490D" />
                        </svg>
                        &nbsp;&nbsp;Akhil T J</p>
                </footer>
            </main> */}
        </>
    )
}

export default livangle
