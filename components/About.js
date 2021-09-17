import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function About() {
    const router = useRouter();
    const about = () => {
        router.push({
            pathname: '/about'
        })
    }
    return (
        <div className=" px-[16px] py-[16px]">
            <h2 className="text-[36px] text-left lg:text-center font-extrabold text-accent">
                About Me
            </h2>
            <div className="text-dark flex flex-col lg:flex-row lg:pt-[80px] pt-[40px]">
                <div className="relative aspect-w-1 aspect-h-1 lg:h-[500px] lg:p-20 lg:w-[500px] flex-shrink-0">
                    <Image
                        src='/Image-Assets/Akhil-T-J.png'
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>
                <div className="flex lg:pl-32 flex-col pt-[24px] lg:pt-0">
                    <h4 className="lg:text-[32px] text-left text-[24px] font-semibold ">Hello, I’m Akhil T J</h4>
                    <p className="lg:pt-[12px] text-[20px] text-left font-normal">I’m a self taught <span className="text-accent">freelance</span> designer,
                        specialized in <span className="text-accent">UI/UX</span>, skilled in leadership, seeking to leverage solid design skills with a focus on collaboration, communication and passion. My knowledge and skillset includes the following:
                    </p>
                    <div className="pt-[16px] lg:pt-[24px]">
                        <div className="lg:pr-[8px] lg:pb-[8px]">
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                User Interface Design
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                User Experience Design
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Design Thinking
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Wireframing
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Rapid Prototyping
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Design System
                            </span>
                        </div>
                    </div>

                    <div className=" pt-[32px]">
                        <div className="pr-[8px] pb-[8px]">
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Figma
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Adobe XD
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Canva
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Miro
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Trello
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Git/Github
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                MS Word
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Adobe Photoshop
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                Flutter
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                C
                            </span>
                            <span className="text-[14px] mr-[8px] mb-[8px] font-medium inline-block py-[5px] px-[9px] rounded text-accent bg-accentlight last:mr-0 ">
                                C++
                            </span>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:pt-[52px] pt-[40px] lg:space-x-[24px] space-y-[24px] lg:space-y-0">
                        <div className="">
                            <Link href="/about">
                                <button
                                    onClick={about}
                                    className="bg-transparent
                    hover:bg-accent text-accent 
                    font-semibold text-[20px] hover:text-light 
                    lg:w-[276px] lg:h-[64px] h-[61px] w-full flex-shrink border-2 border-accent 
                    hover:border-transparent rounded">
                                    Know More About Me
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.figma.com/proto/CzBq3kBFgun86eVK4DyZCC/Akhil-T-J-Resume?page-id=0%3A1&node-id=2%3A6&viewport=241%2C48%2C0.2&scaling=scale-down-width">
                                <a target="_blank" rel="noopener noreferrer">
                                    <button
                                        className="bg-transparent
                    hover:bg-accent text-accent 
                    font-semibold text-[20px] hover:text-light 
                    lg:w-[173px] lg:h-[64px] h-[61px] w-full flex-shrink border-2 border-accent 
                    hover:border-transparent rounded">
                                        My Resume
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
