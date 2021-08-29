import Header from '../components/project/Header';
import CalendarTodoFillIcon from 'remixicon-react/CalendarTodoFillIcon';
import Image from 'next/image';

function ctracker() {
    return (
        <>
            <Header />
            <div className="max-w-[90rem] mx-auto px-8 sm:px-16 pt-[145px]">
                <div>
                    <div>
                        <div>
                            <CalendarTodoFillIcon />
                            <span>June 2021</span>
                        </div>
                        <h2>Ctracker - Track your foot and confirm your footprint</h2>
                        <div>
                            <p>
                                Maintaining records of staff, customers and
                                visitors for contact tracing purposes, as set out in the
                                Government guidance due to COVID-19.
                            </p>
                            <ul>
                                <li>Flutter QR Code Scanner Application
                                    <li>Dark and Light Modes</li>
                                    <li>Received <span>237 Duplicates</span> and <span>7 Favourites</span> in Figma Community</li></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {/* <Image /> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default ctracker
