import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import Link from 'next/link';

function Contact() {
    return (
        <>
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
        </>
    )
}

export default Contact
