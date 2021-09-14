import Header from "../components/project/Header"
import Image from 'next/image';
import Link from 'next/link';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';

function playground() {
    return (
        <>
            <Header />
            <main className="max-w-[1240px] mx-auto px-[16px] py-[16px] text-dark">
                <section className="lg:flex flex-wrap lg:flex-wrap lg:pt-[145px] pt-[80px]">
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
                </section>
                <section className="pt-[100px] lg:pt-[200px]">
                    <h2 className="text-[36px] text-left lg:text-center font-extrabold text-accent">
                        Contact
                    </h2>
                    <p className="text-[20px] text-left lg:text-center font-normal text-dark lg:pt-[24px] pt-[40px]">
                        I’m always interested about cool stuff. Need help? Let’s talk.
                    </p>
                    <form className="flex flex-col pt-[12px]  space-y-[24px] ">
                        <input placeholder="Name" type="text" className="border-2 border-dark px-[9px] py-[9px] rounded-md bg-light text-dark" />
                        <input placeholder="Email" type="text" className="border-2 border-dark px-[9px] py-[9px] rounded-md bg-light text-dark" />
                        <textarea rows="5" placeholder="Message" type="text" className="border-2 border-dark px-[9px] py-[9px] rounded-md bg-light text-dark" />
                    </form>
                    <div className="flex flex-col-reverse items-center md:flex-row justify-between">
                        <div>
                            <div className="inline-flex items-center space-x-4 pt-10">
                                <Link href="https://twitter.com/akhil__tj" >
                                    <a target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <TwitterFillIcon className="text-light" />
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/akhiltj/" >
                                    <a target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <LinkedinFillIcon className="text-light" />
                                    </a>
                                </Link>
                                <Link href="https://www.figma.com/@akhiltj">
                                    <a target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center border-2 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4608 7.5C12.7275 7.5 11.3335 8.95421 11.3335 10.7357C11.3335 11.8187 11.8492 12.7806 12.6418 13.3678C12.2333 13.6739 11.9022 14.0714 11.675 14.5285C11.4478 14.9856 11.3309 15.4896 11.3335 16C11.3335 17.0837 11.8492 18.045 12.6418 18.6322C12.2333 18.9382 11.9022 19.3357 11.675 19.7928C11.4478 20.2499 11.3309 20.7539 11.3335 21.2643C11.3335 23.0458 12.7275 24.5 14.4608 24.5C16.1934 24.5 17.5881 23.0458 17.5881 21.2643V18.5287C18.1359 18.9855 18.8264 19.2359 19.5396 19.2364C21.2729 19.2357 22.6669 17.7815 22.6669 16C22.6669 14.9162 22.1519 13.955 21.3586 13.3678C21.7671 13.0618 22.0982 12.6643 22.3254 12.2072C22.5526 11.7501 22.6695 11.2461 22.6669 10.7357C22.6669 8.95421 21.2729 7.5 19.5396 7.5H14.4608V7.5ZM12.5087 10.7357C12.5087 9.60871 13.3884 8.70629 14.4608 8.70629H16.4123V12.765H14.4608C13.3884 12.765 12.5087 11.8619 12.5087 10.7357V10.7357ZM19.5396 12.7643H17.5881V8.70558H19.5396C20.6127 8.70558 21.4917 9.60871 21.4917 10.7357C21.4917 11.8619 20.6127 12.7643 19.5396 12.7643ZM12.5094 16C12.5094 14.8737 13.3891 13.9706 14.4615 13.9706H16.413V18.0294H14.4608C13.3877 18.0294 12.5087 17.1262 12.5087 16H12.5094ZM17.5881 16C17.5881 14.8737 18.4679 13.9706 19.5403 13.9706C20.6134 13.9706 21.4925 14.873 21.4925 16C21.4925 17.1262 20.6134 18.0294 19.5403 18.0294C18.4679 18.0294 17.5888 17.127 17.5888 16H17.5881ZM12.5094 21.2643C12.5094 20.1381 13.3891 19.2357 14.4615 19.2357H16.413V21.2643C16.413 22.3913 15.5347 23.2937 14.4615 23.2937C13.3891 23.2937 12.5094 22.3913 12.5094 21.2643Z" fill="#FAF9F0" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="pt-[36px] lg:pt-[40px]">
                            <button
                                className="bg-transparent px-[16px]
                    hover:bg-accent text-accent 
                    font-semibold text-[20px] hover:text-light 
                    lg:w-[199px] lg:h-[64px] h-[61px] w-full flex-shrink border-2 border-accent 
                    hover:border-transparent rounded">
                                Send Message
                            </button>
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

export default playground
