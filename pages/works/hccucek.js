import Header from '../../components/project/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';

function hccucek() {
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
    const ttclub = () => {
        router.push({
            pathname: '/works/ttclub'
        })
    }
    return (
        <>
            <Header page={`featured`} />
            <main className="max-w-[1160px] mx-auto px-[16px] py-[16px] text-hccucek3">
                <section className="flex flex-col-reverse lg:flex-row lg:pt-[145px] pt-[128px]">
                    <div className=" flex flex-col lg:pr-[30px] pt-[24px] lg:pt-0">
                        <div className="flex flex-col lg:space-y-[61px]">
                            {/* <div className="hidden lg:flex border-2 h-[40px] w-[40px] text-hccucek2 justify-center items-center rounded">
                                <ListCheckIcon className="" />
                            </div> */}
                            <span className="text-hccucek1 text-[16px] font-medium">August 2021</span>
                        </div>
                        <h2 className="lg:text-[48px] text-[40px] font-extrabold text-hccucek3 pt-[16px] ">Hack Club CUCEK - Web Design</h2>
                        <div className="">
                            <p className="font-normal text-[20px] text-hccucek3 pt-[16px]">
                                A nonprofit network of high school coding clubs
                                and makers around the world. For the students,
                                by the students.
                            </p>
                            <ul className="list-disc font-normal text-[20px] pl-10 pt-[16px] text-hccucek3">
                                <li>Responsive Web Design Design</li>
                                <li>System(In Progress)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative aspect-h-623 aspect-w-1032 lg:hidden flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Mobile/HC-Cucek-Image.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[360px] lg:w-[610px] lg:max-w-[610px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/HCCUCEK.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section className="flex flex-col lg:pt-[140px] pt-[40px]">
                    <h1 className="font-semibold text-[24px] lg:text-[32px] text-hccucek1">Style Guides</h1>
                    <div className="relative aspect-h-786 aspect-w-1029 lg:hidden flex-shrink lg:flex-shrink-0 mt-[24px]">
                        <Image
                            src='/Mobile/HC-Cucek-Style-Guides.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[393px] lg:w-[666px] lg:mt-[24px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/HC-CUCEK-Style-Guides.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section className="flex flex-col lg:pt-[140px] pt-[40px]">
                    <h1 className="font-semibold text-[24px] lg:text-[32px] text-hccucek1">Final UI</h1>
                    <div className="relative aspect-w-1248 aspect-h-4016 lg:hidden flex-shrink lg:flex-shrink-0 mt-[24px]">
                        <Image
                            src='/Portfolio/HC-CUCEK-Final-UI.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:h-[4016px] lg:w-[1248px] lg:mt-[24px] flex-shrink lg:flex-shrink-0">
                        <Image
                            src='/Portfolio/HC-CUCEK-Final-UI.png'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </section>
                <section className="lg:pt-[140px] pt-[80px]">
                    <h2 className="lg:text-[36px] text-[28px] text-left lg:text-center font-extrabold text-accent">Other Featured Projects</h2>
                    <div className="flex flex-col lg:flex-row pt-[24px] lg:pt-[80px] lg:space-x-[22px]">
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
                        <div
                            onClick={livangle}
                            className="relative lg:h-[371.69px] lg:w-[371.69px] mt-[24px] lg:mt-0 hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Image-Assets/Livangle.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div
                            onClick={livangle}
                            className="relative mt-[24px] aspect-w-1 aspect-h-1 lg:hidden hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Image-Assets/Livangle.png'
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
        </>
    )
}

export default hccucek
