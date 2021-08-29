import Image from 'next/image';

function Banner() {
    return (
        <div className="relative my-auto py-[150px] max-w-6xl mx-auto px-8 sm:px-16 text-left lg:text-center text-dark bg-light ">
            <div className="relative h-32">
                <Image
                    src="/Avatar/main-avatar.png"
                    layout='fill'
                    objectFit='contain'
                    className="cursor-pointer object-left lg:object-center"
                />
            </div>
            <p className="text-xl pt-5 pb-4">Hello, I'm Akhil T J.</p>
            <h1 className="text-6xl font-bold">Inquestive Junior Designer,
                Specialized in UI/UX,</h1>
            <p className="text-xl pt-5 pr-20 pl-20">
                skilled in <span className="text-accent">leadership</span>, seeking to leverage solid design skills with a focus on
                <span className="text-accent">collaboration</span>, <span className="text-accent">communication</span> and <span className="text-accent">passion</span>.
            </p>
            <div className="hidden lg:inline-flex pt-24">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.141 2.5H12.859C14.873 2.5 15.953 2.778 16.931 3.301C17.8973 3.81249 18.6875 4.60269 19.199 5.569C19.722 6.547 20 7.627 20 9.641V15.359C20 17.373 19.722 18.453 19.199 19.431C18.6875 20.3973 17.8973 21.1875 16.931 21.699C15.953 22.222 14.873 22.5 12.859 22.5H11.14C9.126 22.5 8.046 22.222 7.068 21.699C6.10169 21.1875 5.31149 20.3973 4.8 19.431C4.278 18.453 4 17.373 4 15.359V9.64C4 7.626 4.278 6.546 4.801 5.568C5.31292 4.60192 6.10347 3.81206 7.07 3.301C8.047 2.778 9.127 2.5 11.141 2.5ZM11 6.5V11.5H13V6.5H11Z" fill="#F6490D" />
                </svg>
            </div>
        </div>
    )
}

export default Banner
