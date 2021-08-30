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
                            <div className="bg-ctracker2  h-[398px] w-full">
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
                    <div className="absolute h-[829px] w-[1236px] mt-[24px]  mx-[300px] px-8 sm:px-16">
                        <Image
                            src='/Portfolio/Ctracker-Final-UI-1.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                    <div className=" pt-[800px]" />
                    <div className="absolute h-[829px] w-[1236px] mt-[24px]  mx-[300px] px-8 sm:px-16">
                        <Image
                            src='/Portfolio/Ctracker-Final-UI-2.png'
                            layout="fill"
                            objectFit="cover"
                            className=""
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default ctracker
