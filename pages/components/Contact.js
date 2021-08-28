import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';

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
                        <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                            <TwitterFillIcon className="text-light" />
                        </div>
                        <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                            <LinkedinFillIcon className="text-light" />
                        </div>
                        <div className="flex h-8 w-8 items-center border-2 p-1 rounded-full bg-dark hover:bg-accent hover:border-accent cursor-pointer">
                            <InstagramFillIcon className="text-light" />
                        </div>
                    </div>
                </div>
                <div className="pt-[36px] lg:pt-[40px]">
                    <button
                        className="bg-transparent
                    hover:bg-accent text-accent 
                    font-medium text-[20px] hover:text-light 
                    lg:w-[276px] lg:h-[64px] w-[343px] h-[61px] border-2 border-accent 
                    hover:border-transparent rounded">
                        Know More About Me
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contact
