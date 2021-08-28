import Image from 'next/image';

function About() {
    return (
        <div className="text-dark flex flex-col lg:flex-row 2xl:pt-[80px] xl:pt-[80px] lg:pt-[80px] pt-[40px]">
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
            <div className="flex pr-16 2xl:pl-32 xl:pl-32 lg:pl-32 flex-col flex-grow">
                <h4 className="lg:text-[32px] text-left text-[24px] pt-[24px] font-normal">Hello, I’m Akhil T J</h4>
                <p className="pt-[16px] text-[20px] text-left font-light flex-grow">I’m a self taught <span className="text-accent">freelance</span> designer,
                    specialized in <span className="text-accent">UI/UX</span> with a clear focus on user experience,
                    collabration, communication and passion.
                </p>
                <div className="grid-cols-2 lg:grid-cols-3">
                    <div className="pr-[8px] pb-[8px]">
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Interface Design
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            User Experience Design
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Color Theory
                        </span>
                    </div>
                    <div className="pr-[8px]">
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Design Thinking
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Layout Theory
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Design System
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Rapid Prototying
                        </span>
                    </div>
                </div>

                <div className="grid-cols-2 lg:grid-cols-3 pt-[32px]">
                    <div className="pr-[8px] pb-[8px]">
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Figma
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Adobe XD
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Proto Pie
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Framer
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Miro
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Notion
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Trello
                        </span>
                    </div>
                    <div className="pr-[8px]">
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Adobe Photoshop
                        </span>
                        <span className="text-xs font-medium inline-block py-1 px-2 rounded text-accent bg-accentlight last:mr-0 mr-1">
                            Kenban Board
                        </span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="pt-[36px] md:pr-[24px] lg:pt-[40px]">
                        <button
                            className="bg-transparent
                    hover:bg-accent text-accent 
                    font-medium text-[20px] hover:text-light 
                    lg:w-[276px] lg:h-[64px] w-[343px] h-[61px] border-2 border-accent 
                    hover:border-transparent rounded">
                            Know More About Me
                        </button>
                    </div>
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
