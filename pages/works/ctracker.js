import Header from '../components/project/Header';
import CalendarTodoFillIcon from 'remixicon-react/CalendarTodoFillIcon';
import Image from 'next/image';

function ctracker() {
    return (
        <>
            <Header />
            <main className="">
                <section className=" pt-[145px]">
                    <div className="flex flex-row ">
                        <div className="">
                            <div className="flex flex-row space-x-[50px] mx-[220px] px-8 sm:px-16">
                                <CalendarTodoFillIcon className="text-ctracker1" />
                                <span className="text-ctracker1 text-[16px] font-medium">June 2021</span>
                            </div>
                            <div className="pr-[780px]">
                                <h2 className="text-[48px] font-extrabold text-ctracker3 pb-[16px] mx-[220px] px-8 sm:px-16">Ctracker - Track your foot and confirm your footprint</h2>
                            </div>
                            {/* <div className="bg-ctracker2  h-[398px] w-full"> */}
                            <div className="h-[532px]">
                                <p className="font-normal text-[20px] text-ctracker3 mx-[220px] px-8 pt-[8px] sm:px-16">
                                    Maintaining records of staff, customers and
                                    visitors for<br /> contact tracing purposes, as set out in the
                                    Government<br /> guidance due to COVID-19.
                                </p>
                                <ul className="list-disc font-normal text-[20px] pt-[16px] mx-[260px] text-ctracker3 max-w-[90rem] px-8 sm:px-16">
                                    <li>Flutter QR Code Scanner Application
                                        <li>Dark and Light Modes</li>
                                        <li>Received <span className="text-ctracker1">237 Duplicates</span> and <span className="text-ctracker1">7 Favourites</span> in Figma <br />Community</li></li>
                                </ul>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="absolute h-[507px] w-[360px] right-[350px] pt-[150px]">
                            <Image
                                src='/Portfolio/Ctracker-New.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>
                </section>
                <section className="">
                    <h1 className="font-semibold text-[32px] text-ctracker1 pt-[140px] mx-[220px] px-8 sm:px-16">Style Guides</h1>
                    <div className="absolute h-[393px] w-[1160px] mt-[24px] mx-[300px] px-8 sm:px-16">
                        <Image
                            src='/Portfolio/Ctracker-Style-Guides.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <h1 className="font-semibold text-[32px] text-ctracker1 pt-[500px] mx-[220px] px-8 sm:px-16">Userflow Diagram</h1>
                    <div className="absolute h-[412px] w-[1160px] mt-[24px] mx-[300px] px-8 sm:px-16">
                        <Image
                            src='/Portfolio/Ctracker-Userflow-Diagram.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>

                    <h1 className="font-semibold text-[32px] text-ctracker1 pt-[500px] mx-[220px] px-8 sm:px-16">Wireframes</h1>
                    <div className="absolute h-[367px] w-[1160px] mt-[24px] mx-[300px] px-8 sm:px-16">
                        <Image
                            src='/Portfolio/Ctracker-Wireframes.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <h1 className="font-semibold text-[32px] text-ctracker1 pt-[500px]  mx-[220px] px-8 sm:px-16">Final UI</h1>
                    <div className="relative h-[829px] w-[1236px] mt-[24px]  mx-[300px] px-8 sm:px-16">
                        <Image
                            src='/Portfolio/Ctracker-Final-UI-1.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className="relative h-[829px] w-[1236px] mt-[24px]  mx-[300px] px-8 sm:px-16">
                        <Image
                            src='/Portfolio/Ctracker-Final-UI-2.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </section>
                <section >
                    <h1 className="font-extrabold text-center text-[36px] text-accent my-[140px] mx-[220px] px-8 sm:px-16">Other Featured Projects</h1>
                    <div className=" inline-flex flex-wrap space-x-[22.47px] mx-[300px] px-8 sm:px-16">
                        <div className="relative h-[371.69px] w-[371.69px] mt-[24px] ">
                            <Image
                                src='/Image-Assets/Ctracker.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                        <div className="relative h-[371.69px] w-[371.69px] mt-[24px] ">
                            <Image
                                src='/Portfolio/Playground-Image.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                        <div className="relative h-[371.69px] w-[371.69px] mt-[24px]">
                            <Image
                                src='/Image-Assets/Livangle.png'
                                layout="fill"
                                objectFit="cover"
                                className=""
                            />
                        </div>
                    </div>
                </section>
                <footer className="text-center">
                    <p className="text-center inline-flex text-dark pb-[30px] pt-[40px] lg:pt-[150px]">
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

export default ctracker
