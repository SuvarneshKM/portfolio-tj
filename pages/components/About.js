import Image from 'next/image';

function About() {
    return (
        <div className="text-dark flex flex-col lg:flex-row lg:pt-[80px] pt-[40px]">
            {/* img */}
            <div className="relative h-[343px] w-[343px] lg:h-[500px] lg:p-20 lg:w-[500px] flex-shrink-0">
                <Image
                    src='/Image-Assets/Akhil-T-J.png'
                    layout="fill"
                    objectFit="cover"
                    className=""
                />
            </div>
            {/* text */}
            <div className="flex pr-16 lg:pl-32 flex-col">
                <h4 className="lg:text-[32px] text-left text-[24px] font-normal ">Hello, I’m Akhil T J</h4>
                <p className="pt-[16px] text-[20px] text-left font-light">I’m a self taught <span className="text-accent">freelance</span> designer,
                    specialized in <span className="text-accent">UI/UX</span> with a clear focus on user experience,
                    collabration, communication and passion.
                </p>
                <div className="pt-[16px] lg:pt-[24px]">
                    <div className="lg:pr-[8px] lg:pb-[8px]">
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Interface Design
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            User Experience Design
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Color Theory
                        </span>
                    </div>
                    <div className="pr-[8px]">
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Design Thinking
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Layout Theory
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Design System
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Rapid Prototying
                        </span>
                    </div>
                </div>

                <div className=" pt-[32px]">
                    <div className="pr-[8px] pb-[8px]">
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Figma
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Adobe XD
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Proto Pie
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Framer
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Miro
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Notion
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Trello
                        </span>
                    </div>
                    <div className="pr-[8px]">
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Adobe Photoshop
                        </span>
                        <span className="text-[14px] mr-[8px] mb-[8px] font-normal inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 ">
                            Kenban Board
                        </span>
                    </div>
                </div>

                <div className=" pt-[40px] lg:pt-[50px]">
                    <div className="pt-[36px] lg:pt-[40px]">
                        <button
                            className="bg-transparent
                    hover:bg-accent text-accent 
                    font-medium text-[20px] hover:text-light 
                    lg:w-[173px] lg:h-[64px] w-[343px] h-[61px] border-2 border-accent 
                    hover:border-transparent rounded">
                            My Resume
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
