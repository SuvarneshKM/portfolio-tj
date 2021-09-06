import Header from '../../components/project/Header';
import CalendarTodoFillIcon from 'remixicon-react/CalendarTodoFillIcon';
import Image from 'next/image';
import { useRouter } from 'next/router';

function ttclub() {
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
    return (
        <>
            <Header />
            <main className="max-w-[1160px] mx-auto">
                <section className="pt-[145px]">
                    <div className="flex flex-row justify-between ">
                        <div>
                            <span className="text-ttclub1 text-[16px] font-medium">March 2021</span>
                            <h2 className="text-[48px] font-extrabold text-ttclub3 pb-[16px] ">TT Club - Dashboard</h2>
                            <p className="font-normal text-[20px] text-ttclub3 pt-[8px]">
                                TT Club is a real time airline booking dashboard that<br />
                                aims to cover all operational, relevant areas of an airline<br />
                                booking and serivices.
                            </p>
                            <ul className="list-disc font-normal text-[20px] pt-[16px] mx-[40px] text-ttclub3">
                                <li>Web Design</li>
                                <li>Admin Application</li>
                                <li className="text-ttclub1">100% Auto Layout</li>
                            </ul>
                        </div>
                        <div className="relative h-auto w-[520px] ">
                            <Image
                                src='/Portfolio/TTClub.png'
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="">
                    <h1 className="font-semibold text-[32px] text-ttclub1 pt-[140px] ">Style Guides</h1>
                    <div className="absolute h-[393px] w-[880px] mt-[24px] ">
                        <Image
                            src='/Portfolio/TT-Club-Style-Guides.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <h1 className="font-semibold text-[32px] text-ttclub1 pt-[500px]  ">Final UI</h1>
                    <div className="relative h-[578px] w-[921px] mt-[24px]  ">
                        <Image
                            src='/Portfolio/TT-Club-Final-UI-1.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="flex flex-row justify-end">
                        <div />
                        <div className="relative h-[578px] w-[921px] mt-[24px] ">
                            <Image
                                src='/Portfolio/TT-Club-Final-UI-2.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>

                    <div className="relative h-[578px] w-[921px] mt-[24px]  ">
                        <Image
                            src='/Portfolio/TT-Club-Final-UI-3.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>

                    <div className="flex flex-row justify-end">
                        <div />
                        <div className="relative h-[578px] w-[921px] mt-[24px]  ">
                            <Image
                                src='/Portfolio/TT-Club-Final-UI-4.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>

                    <div className="relative h-[578px] w-[921px] mt-[24px]  ">
                        <Image
                            src='/Portfolio/TT-Club-Final-UI-5.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>

                </section>
                <section >
                    <h1 className="font-extrabold text-center text-[36px] text-accent my-[140px] ">Other Featured Projects</h1>
                    <div className=" inline-flex flex-wrap space-x-[22.47px] ">
                        <div 
                        onClick={ctracker}
                        className="relative h-[371.69px] w-[371.69px] mt-[24px] hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Image-Assets/Ctracker.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                        <div 
                        onClick={livangle}
                        className="relative h-[371.69px] w-[371.69px] mt-[24px] hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Image-Assets/Livangle.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                        <div 
                        onClick={hccucek}
                        className="relative h-[371.69px] w-[371.69px] mt-[24px] hover:scale-105 transition
        transform duration-200 ease-out cursor-pointer">
                            <Image
                                src='/Playground/HC-Cucek.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
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

export default ttclub
