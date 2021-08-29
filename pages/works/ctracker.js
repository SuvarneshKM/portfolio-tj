import Header from '../components/project/Header';
import CalendarTodoFillIcon from 'remixicon-react/CalendarTodoFillIcon';
import Image from 'next/image';

function ctracker() {
    return (
        <>
            <Header />
            <div className=" pt-[145px]">
                <div className="flex flex-row static">
                    <div className="absolute">
                        <div className="flex flex-row space-x-[50px] mx-[220px] px-8 sm:px-16">
                            <CalendarTodoFillIcon className="text-ctracker1" />
                            <span className="text-ctracker1 text-[16px] font-medium">June 2021</span>
                        </div>
                        <h2 className="text-[48px] font-extrabold text-ctracker3 pb-[16px] mx-[220px] px-8 sm:px-16">Ctracker - Track your foot and confirm your footprint</h2>
                        <div className="bg-ctracker2 h-[398px] w-full">
                            <p className="font-normal text-[20px] text-ctracker3 mx-[220px] px-8 pt-[8px] sm:px-16">
                                Maintaining records of staff, customers and
                                visitors for contact tracing purposes, as set out in the
                                Government guidance due to COVID-19.
                            </p>
                            <ul className="list-disc font-normal text-[20px] pt-[16px] mx-[280px] text-ctracker3 max-w-[90rem] px-8 sm:px-16">
                                <li>Flutter QR Code Scanner Application
                                    <li>Dark and Light Modes</li>
                                    <li>Received <span className="text-ctracker1">237 Duplicates</span> and <span className="text-ctracker1">7 Favourites</span> in Figma Community</li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute h-[507px] w-[360px] right-[350px] top-[150px]">
                        <Image
                            src='/Portfolio/Ctracker-New.png'
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

export default ctracker
